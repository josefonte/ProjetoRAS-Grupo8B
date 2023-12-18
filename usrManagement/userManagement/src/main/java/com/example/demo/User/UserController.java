package com.example.demo.User;

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

    @GetMapping(path="/all")
    public List<User> getUsers(){
        return this.userService.getUsers();
    }

    @PostMapping(path="/register")
    public @ResponseBody String registerUsers(@RequestBody List<User> users){
        this.userService.addUsers(users);
        return "Added";
    }

    @GetMapping(path="/auth")
    public ResponseEntity<String> authenticateUser(@RequestParam String password, @RequestParam String number){
        return this.userService.authenticateUser(password, number)
                ? ResponseEntity.ok("User successfully authenticated")
                : ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid Credentials");
    }
}
