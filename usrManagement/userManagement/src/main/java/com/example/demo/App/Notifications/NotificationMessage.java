package com.example.demo.App.Notifications;

import jakarta.persistence.*;

@Entity
public class NotificationMessage {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private int id_message;

    @ManyToOne
    @JoinColumn(name="id", nullable=false)
    private Notifications notification;

    private String message;

    public NotificationMessage(){}

    public NotificationMessage(String message, Notifications notification) {
        this.message = message;
        this.notification = notification;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String type) {
        this.message = type;
    }
}
