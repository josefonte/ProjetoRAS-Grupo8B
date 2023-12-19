package com.example.demo.User;

import jakarta.persistence.*;

import java.util.Set;

@Entity
@Table(name="USERSTYPE")
public class UsersType {
    @Id
    private String type;

    //@ManyToOne
    //@JoinColumn(name="number", nullable = false)
    //private User user;
    @ManyToMany
    private Set<User> users;

    public UsersType(){

    }

    public UsersType(User user, String type){
        this.type = type;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    @Override
    public String toString() {
        return "UserType{" +
                "type='" + type + '\'' +
                '}';
    }
}


