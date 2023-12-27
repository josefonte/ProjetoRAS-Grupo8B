package com.example.demo.App.Notifications;

import com.example.demo.App.Mail.MailService;
import com.example.demo.App.User.User;
import com.example.demo.App.User.UserRepository;
import com.example.demo.App.User.UserService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class NotificationsService {

    private final NotificationsRepository notificationsRepository;

    private final NotificationsMessageRepository notificationsMessageRepository;

    private final UserRepository userRepository;

    private final UserService userService;

    private final MailService mailService;

    @Autowired
    public NotificationsService(NotificationsRepository notificationsRepository,
                                NotificationsMessageRepository notificationsMessageRepository,
                                UserService userService, UserRepository userRepository,
                                MailService mailService){

        this.notificationsRepository = notificationsRepository;
        this.notificationsMessageRepository = notificationsMessageRepository;
        this.userService = userService;
        this.userRepository = userRepository;
        this.mailService = mailService;
    }

    private void notifyUsers(String type, String subject, String message){
        List<User> users = this.notificationsRepository.getAllUsers(type);

        for(User user: users){
            this.mailService.sendEmail(user.getEmail(), subject, message);
        }
    }

    @Transactional
    public boolean addNotification(String type, String subject, String message){
        Optional<Notifications> notificationsOptional = this.notificationsRepository.findById(type);
        if(notificationsOptional.isEmpty()) return false;

        notifyUsers(type, subject, message);

        this.notificationsMessageRepository.save(new NotificationMessage(message, notificationsOptional.get()));
        return true;
    }

    @Transactional
    public boolean addNotificationType(String type, List<String> users){
        Optional<Notifications> notificationsOptional = this.notificationsRepository.findById(type);
        if(notificationsOptional.isPresent() || !this.userService.isEveryUserValid(users)) return false;

        Notifications notifications = new Notifications(type);

        Set<User> UsersObservers = new HashSet<>();

        for(String userNumber: users){
            UsersObservers.add(this.userRepository.findById(userNumber).get());
        }

        notifications.addUsers(UsersObservers);

        this.notificationsRepository.save(notifications);
        return true;
    }

    @Transactional
    public boolean removeNotificationType(String type){
        Optional<Notifications> notificationsOptional = this.notificationsRepository.findById(type);
        if(notificationsOptional.isEmpty()) return false;

        Notifications notification = notificationsOptional.get();
        notification.removeAllUsers();
        this.notificationsMessageRepository.removeAllNotificationsByType(type);

        this.notificationsRepository.delete(notification);
        return true;
    }

    @Transactional
    public List<String> getNotificationMessages(String type){
        if(this.notificationsRepository.findById(type).isEmpty()) return null;

        return this.notificationsMessageRepository.getAllMessagesFromType(type);
    }
}
