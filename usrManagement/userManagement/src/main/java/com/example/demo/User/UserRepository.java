package com.example.demo.User;

import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, String> {
    void updateUserEmailByNumber(String number, String newEmail);
    void updateUserPasswordByNumber(String number, String newPassword);
}
