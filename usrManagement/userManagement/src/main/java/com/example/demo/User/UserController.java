package com.example.demo.User;

import com.example.demo.User.JsonModels.UserInfoRequest;
import com.example.demo.User.JsonModels.UserInfoResponse;
import com.example.demo.User.JsonModels.UserVerificationResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@RestController
@RequestMapping(path = "api/usr")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService){
        this.userService = userService;
    }

    @GetMapping(path="/all") // TODO: remover isto após testes
    public List<User> getUsers(){
        return this.userService.getUsers();
    }

    @PostMapping(path="/register")
    public @ResponseBody String registerUsers(@RequestParam String userType, @RequestBody List<User> users){
        this.userService.addUsers(userType, users);
        return "Added";
    }

    @PostMapping(path="/login")
    public ResponseEntity<String> authenticateUser(@RequestParam String password, @RequestParam String number){
        return this.userService.authenticateUser(password, number)
                ? ResponseEntity.ok("User successfully authenticated")
                : ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid Credentials");
    }

    @GetMapping(path="/profile")
    public ResponseEntity<Object> getUserInfo(@RequestParam String number){
        UserInfoResponse userInfoResponse = this.userService.getUserInfo(number);
        return userInfoResponse != null
                ? ResponseEntity.ok(userInfoResponse)
                : ResponseEntity.badRequest().body("Requirements to change user not met");
    }

    @PostMapping(path="/profile")
    public ResponseEntity<String> changeUserInfo(@RequestBody UserInfoRequest user){
        return this.userService.changeUserInfo(user)
                ? ResponseEntity.ok("User settings changed successfully")
                : ResponseEntity.badRequest().body("Requirements to change user not met");
    }

    @GetMapping(path="/verify")
    public ResponseEntity<List<UserVerificationResponse>> verifyUsers(@RequestBody List<String> usersNumbers){
        return ResponseEntity.ok(this.userService.verifyUsers(usersNumbers));
    }
}
