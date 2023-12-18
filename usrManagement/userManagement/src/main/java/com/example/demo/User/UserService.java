package com.example.demo.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    public void addUser(String name, String number, String email){
        this.userRepository.save(new User(name, number, email));
    }

    public void addUsers(List<User> users){
        for(User user: users)
            this.userRepository.save(user);
    }
    /*
    public List<User> getUserInfo(String number, String password){
        Optional<User> this.userRepository.findById(number).isPresent()
    }
    */

    public List<User> getUsers(){
        return (List<User>) this.userRepository.findAll();
    }

    public boolean authenticateUser(String password, String number){
        return this.userRepository.findById(number)
                                    .filter(user -> Objects.equals(user.getPassword(), password))
                                    .isPresent();
    }
}
