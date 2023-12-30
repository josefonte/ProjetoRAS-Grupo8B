package com.example.demo.App.JsonModels;

public class MessageFormat {

    private String subject;

    private String messageBody;

    public MessageFormat(){}

    public MessageFormat(String subject, String messageBody) {
        this.subject = subject;
        this.messageBody = messageBody;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getMessageBody() {
        return messageBody;
    }

    public void setMessageBody(String messageBody) {
        this.messageBody = messageBody;
    }

    @Override
    public String toString() {
        return "MessageFormat{" +
                "subject='" + subject + '\'' +
                ", messageBody='" + messageBody + '\'' +
                '}';
    }
}
