package com.example.demo.User.JsonModels;

public class UserVerificationResponse {
    private String number;

    private Boolean exists;

    public UserVerificationResponse() {
    }

    public UserVerificationResponse(String number, Boolean exists) {
        this.number = number;
        this.exists = exists;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public Boolean getExists() {
        return exists;
    }

    public void setExists(Boolean exists) {
        this.exists = exists;
    }
}
