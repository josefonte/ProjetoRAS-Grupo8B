package com.example.demo.App.Notifications;

import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface NotificationsMessageRepository extends CrudRepository<NotificationMessage, Integer> {
    @Transactional
    @Modifying
    @Query("SELECT n.message FROM NotificationMessage n WHERE n.notification= :type")
    List<String> getAllMessagesFromType(String type);

    @Transactional
    @Modifying
    @Query("DELETE FROM NotificationMessage  n WHERE n.notification= :type")
    void removeAllNotificationsByType(String type);
}
