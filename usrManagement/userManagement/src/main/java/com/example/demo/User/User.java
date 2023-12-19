package com.example.demo.User;

import jakarta.persistence.*;

import java.util.HashSet;
import java.util.Set;

@Entity(name="User")
public class User {

    @Id
    private String number;

    private String name;
    private String email;
    private String password;

    @OneToMany(mappedBy="user", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<UserType> userTypes;

    public User(){
        this.userTypes = new HashSet<>();
    }

    public User(String name, String number, String email){
        this.name = name;
        this.number = number;
        this.email = email;
        this.userTypes = new HashSet<>();
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public boolean removeUserType(String type) {
        return this.userTypes.removeIf(userType -> userType.getType().equals(type));
    }

    public void setUserType(UserType userType) {
        this.userTypes.add(userType);
    }

    @Override
    public String toString() {
        return "User{" +
                "name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
