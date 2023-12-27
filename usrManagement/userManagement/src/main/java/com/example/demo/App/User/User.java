package com.example.demo.App.User;

import com.example.demo.App.Notifications.Notifications;
import jakarta.persistence.*;

import java.util.HashSet;
import java.util.Set;

@Entity
public class User {

    @Id
    private String number;

    private String name;
    private String email;
    private String password;

    //@OneToMany(mappedBy="user", cascade = CascadeType.ALL, orphanRemoval = true)
    @ManyToMany(cascade = { CascadeType.ALL })
    @JoinTable(
            name = "USERTYPE",
            joinColumns = { @JoinColumn(name = "number") },
            inverseJoinColumns = { @JoinColumn(name = "type") }
    )
    private Set<UsersType> usersTypes;

    public User(){
        this.usersTypes = new HashSet<>();
    }

    public User(String name, String number, String email){
        this.name = name;
        this.number = number;
        this.email = email;
        this.usersTypes = new HashSet<>();
    }

    public User(User user){
        this.name = user.getName();
        this.number = user.getNumber();
        this.email = user.getEmail();
        this.password = user.getPassword();
        this.usersTypes = new HashSet<>();
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
        return this.usersTypes.removeIf(usersType -> usersType.getType().equals(type));
    }

    public void setUserType(UsersType usersType) {
        this.usersTypes.add(usersType);
    }

    @Override
    public String toString() {
        return "User{" +
                "name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                '}';
    }

    @Override
    public User clone(){
        return new User(this);
    }
}
