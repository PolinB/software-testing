package ru.burtseva.recipes.dao;

import ru.burtseva.recipes.model.User;

import java.util.List;

public interface UserDao {
    boolean addUser(User user);
    List<User> getUsers(String login);
    boolean setUser(String login);
    String getUser();
}