package com.example.demo.User;

import jakarta.persistence.*;

@Entity(name="UserType")
public class UserType {
    @Id
    @ManyToOne
    @JoinColumn(name="number")
    private User user;

    private String type;


}


