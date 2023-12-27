package com.example.demo.App.User;

import com.example.demo.App.User.User;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, String> {

    @Transactional
    @Modifying
    @Query("UPDATE User u SET u.email = :newEmail WHERE u.number = :number")
    void updateUserEmailByNumber(String number, String newEmail);

    @Transactional
    @Modifying
    @Query("UPDATE User u SET u.password = :newPassword WHERE u.number = :number")
    void updateUserPasswordByNumber(String number, String newPassword);
}
