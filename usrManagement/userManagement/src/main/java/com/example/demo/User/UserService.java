package com.example.demo.User;

import com.example.demo.User.JsonModels.UserInfoRequest;
import com.example.demo.User.JsonModels.UserInfoResponse;
import com.example.demo.User.JsonModels.UserVerificationResponse;
import com.example.demo.User.security.SafePasswordGenerator;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;

    private final SafePasswordGenerator safePasswordGenerator;

    @Autowired
    public UserService(UserRepository userRepository, SafePasswordGenerator safePasswordGenerator){
        this.userRepository = userRepository;
        this.safePasswordGenerator = safePasswordGenerator;
    }

    @Transactional
    public void addUsers(String userType, List<User> users){
        String password;
        for(User user: users) {
            password = this.safePasswordGenerator.generateStrongPassword(); // Todo: notificar users por mail desta password
            System.out.println(password);
            user.setPassword(this.safePasswordGenerator.generateEncodedPassword(password));
            user.setUserType(new UsersType(user, userType));
            this.userRepository.save(user);
        }
    }

    public List<User> getUsers(){
        return (List<User>) this.userRepository.findAll();
    }

    public boolean authenticateUser(String password, String number){
        return this.userRepository.findById(number)
                                    .filter(user -> this.safePasswordGenerator.verifyPassword(password, user.getPassword()))
                                    .isPresent();
    }

    @Transactional
    public boolean changeUserInfo(UserInfoRequest user){
        if(this.userRepository.findById(user.getNumber()).isPresent()){
            if(user.getPassword()!=null)
                this.userRepository.updateUserPasswordByNumber(user.getNumber(), user.getPassword());
            if(user.getEmail()!=null)
                this.userRepository.updateUserEmailByNumber(user.getNumber(), user.getEmail());

            return true;
        }

        return false;
    }

    @Transactional
    public UserInfoResponse getUserInfo(String number){
        Optional<User> userOptional = this.userRepository.findById(number);

        if(userOptional.isPresent()){
            User user = userOptional.get();
            return new UserInfoResponse(user.getName(), user.getEmail());
        }

        return null;
    }

    @Transactional
    public List<UserVerificationResponse> verifyUsers(List<String> usersNumbers){
        List<UserVerificationResponse> userVerificationResponses = new ArrayList<>();

        for(String userNumber: usersNumbers){
            userVerificationResponses.add(new UserVerificationResponse(
                    userNumber,
                    this.userRepository.findById(userNumber).isPresent()));
        }

        return userVerificationResponses;
    }
}
