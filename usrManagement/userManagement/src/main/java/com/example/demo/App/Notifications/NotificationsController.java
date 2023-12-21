package com.example.demo.App.Notifications;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;

@RestController
@RequestMapping(path = "api/usr")
public class NotificationsController {

    private final NotificationsService notificationsService;

    @Autowired
    public NotificationsController(NotificationsService notificationsService){
        this.notificationsService = notificationsService;
    }

    @GetMapping(path="/notifications")
    public ResponseEntity<Object> getNotificationType(@RequestParam String type){
        List<String> notificationMessages = this.notificationsService.getNotificationMessages(type);
        return  notificationMessages!=null
                ? ResponseEntity.ok(notificationMessages)
                : ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid Type");
    }

    @PutMapping(path="/notifications")
    public ResponseEntity<String> addNotification(@RequestParam String type, @RequestParam String subject, @RequestBody String Message){
        return this.notificationsService.addNotification(type, subject, Message)
                ? ResponseEntity.ok("Notification added")
                : ResponseEntity.badRequest().body("The exam associated is not valid");
    }

    @PostMapping(path="/notifications")
    public ResponseEntity<String> createNotificationType(@RequestParam String type, @RequestBody List<String> users){
        return this.notificationsService.addNotificationType(type, users)
                ? ResponseEntity.ok("Notification type created")
                : ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid Parameters");
    }

    @DeleteMapping(path="/notifications")
    public ResponseEntity<String> deleteNotificationType(@RequestParam String type){
        return this.notificationsService.removeNotificationType(type)
                ? ResponseEntity.ok("Notification type removed")
                : ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid Notification Type");
    }
}
