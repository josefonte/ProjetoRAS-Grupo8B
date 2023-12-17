package com.example.demo.User;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@RestController
@RequestMapping(path = "api/usr")
public class UserController {
    @GetMapping
    public List<User> getUser(){
        return List.of(new User());
    }
}
