package com.example.demo.User;

import com.example.demo.User.security.SafePasswordGenerator;
import org.passay.PasswordGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class UserService {

    private final UserRepository userRepository;

    private final UserTypeRepository userTypeRepository;
    private final SafePasswordGenerator safePasswordGenerator;

    @Autowired
    public UserService(UserRepository userRepository, UserTypeRepository userTypeRepository, SafePasswordGenerator safePasswordGenerator){
        this.userRepository = userRepository;
        this.userTypeRepository = userTypeRepository;
        this.safePasswordGenerator = safePasswordGenerator;
    }

    public void addUsers(String userType, List<User> users){
        String password = null;
        for(User user: users) {
            password = this.safePasswordGenerator.generateStrongPassword(); // Todo: notificar users por mail desta password
            user.setPassword(this.safePasswordGenerator.generateEncodedPassword(password));
            user.setUserType(new UserType(user, userType));
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
}
