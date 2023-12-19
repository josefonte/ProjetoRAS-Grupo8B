package com.example.demo.User;

import jakarta.persistence.*;

@Entity(name="UserType")
public class UserType {
    @Id
    private String number;

    @MapsId
    @ManyToOne
    @JoinColumn(name="number", nullable = false)
    private User user;

    private String type;

    public UserType(){

    }

    public UserType(User user, String type){
        this.user = user;
        this.type = type;
    }


    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
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
                "number='" + number + '\'' +
                ", user=" + user +
                ", type='" + type + '\'' +
                '}';
    }
}


