package com.example.demo.App.Notifications;

import com.example.demo.App.User.User;
import jakarta.persistence.*;

import java.util.HashSet;
import java.util.Set;

@Entity
public class Notifications {
    @Id
    private String id;

    @ManyToMany(cascade = { CascadeType.ALL })
    @JoinTable(
            name = "NOTIFICATION_USER",
            joinColumns = { @JoinColumn(name = "id") },
            inverseJoinColumns = { @JoinColumn(name = "number") }
    )
    private Set<User> users;

    //@OneToMany(cascade = {CascadeType.ALL})
    //private Set<NotificationMessage> notificationMessage;

    public Notifications(){ this.users = new HashSet<>(); }

    public Notifications(String id) {
        this.id = id;
        this.users = new HashSet<>();
        //this.notificationMessage = new HashSet<>();
    }

    public Notifications(Notifications notifications){
        this.id = notifications.getId();
        this.users = new HashSet<>();
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void addUsers(Set<User> users){
        this.users.addAll(users);
    }

    public void removeUsers(Set<User> users){
        this.users.removeAll(users);
    }

    public void removeAllUsers(){
        removeUsers(this.users);
    }

    public Notifications clone()
    {
        return new Notifications(this);
    }
}
