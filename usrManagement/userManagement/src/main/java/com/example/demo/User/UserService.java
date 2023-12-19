package com.example.demo.User;

import com.example.demo.User.security.SafePasswordGenerator;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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
}
