package ru.burtseva.recipes.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ru.burtseva.recipes.dao.UserDao;
import ru.burtseva.recipes.model.Login;
import ru.burtseva.recipes.model.User;

import java.util.HashMap;
import java.util.Map;

@RestController
public class UserController {
    private final UserDao userDao;

    @Autowired
    public UserController(UserDao userDao) {
        this.userDao = userDao;
    }

    @GetMapping(value = "/users/user")
    @CrossOrigin(origins = "http://localhost:3000")
    public Map<String, Map<String,String>> getUser() {
        HashMap<String, Map<String, String>> map = new HashMap<>();
        String login = userDao.getUser();
        if (login == null) {
            map.put("user", null);
            return map;
        } else {
            map.put("user", new HashMap<>());
            map.get("user").put("login", login);
            return map;
        }
    }

    @PostMapping(value = "/users/register")
    @CrossOrigin(origins = "http://localhost:3000")
    public Map<String, String> register(@RequestBody User user) {
        HashMap<String, String> map = new HashMap<>();
        if (userDao.addUser(user)) {
            map.put("body", "OK");
            return map;
        } else {
            map.put("body", "Login already used");
            return map;
        }
    }

    @PostMapping(value = "/users/login")
    @CrossOrigin(origins = "http://localhost:3000")
    public Map<String, String> login(@RequestBody Login login) {
        HashMap<String, String> map = new HashMap<>();
        System.out.println(login);
        String loginVal = login.getLogin();
        if (userDao.setUser(loginVal)) {
            map.put("body", "OK");
            map.put("user", loginVal );
        } else {
            map.put("body", "Wrong login");
        }
        return map;
    }

    @GetMapping(value = "/users/logout")
    @CrossOrigin(origins = "http://localhost:3000")
    public Map<String, String> logout() {
        userDao.setUser(null);
        HashMap<String, String> map = new HashMap<>();
        map.put("body", "OK");
        map.put("user", null);
        return map;
    }

}