package ru.burtseva.recipes.model;

public class User {
    private String firstName;
    private String secondName;
    private String login;
    private int age;

    public User() { }

    public User(String firstName, String secondName, String login, int age) {
        this.firstName = firstName;
        this.secondName =secondName;
        this.login = login;
        this.age = age;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getSecondName() {
        return secondName;
    }

    public void setSecondName(String secondName) {
        this.secondName = secondName;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }
}
