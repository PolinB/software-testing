package ru.burtseva.recipes.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import ru.burtseva.recipes.dao.UserDao;
import ru.burtseva.recipes.model.Login;
import ru.burtseva.recipes.model.User;

import java.util.HashMap;
import java.util.Map;

@Controller
public class UserController {
    private final UserDao userDao;

    @Autowired
    public UserController(UserDao userDao) {
        this.userDao = userDao;
    }

    ObjectMapper objectMapper = new ObjectMapper();

    @GetMapping(value = "/users/user")
    @CrossOrigin(origins = "http://localhost:3000")
    @ResponseBody
    public String getUser() throws JsonProcessingException {
        HashMap<String, Map<String, String>> map = new HashMap<>();
        String login = userDao.getUser();
        if (login == null) {
            map.put("user", null);
        } else {
            map.put("user", new HashMap<>());
            map.get("user").put("login", login);
        }
        return objectMapper.writeValueAsString(map);
    }

    @PostMapping(value = "/users/register")
    @CrossOrigin(origins = "http://localhost:3000")
    @ResponseBody
    public String register(@RequestBody User user) throws JsonProcessingException {
        HashMap<String, String> map = new HashMap<>();
        if (userDao.addUser(user)) {
            map.put("body", "OK");
        } else {
            map.put("body", "Login already used");
        }
        return objectMapper.writeValueAsString(map);
    }

    @PostMapping(value = "/users/login")
    @CrossOrigin(origins = "http://localhost:3000")
    @ResponseBody
    public String login(@RequestBody Login login) throws JsonProcessingException {
        HashMap<String, String> map = new HashMap<>();
        System.out.println(login);
        String loginVal = login.getLogin();
        if (userDao.setUser(loginVal)) {
            map.put("body", "OK");
            map.put("user", loginVal );
        } else {
            map.put("body", "Wrong login");
        }
        return objectMapper.writeValueAsString(map);
    }

    @GetMapping(value = "/users/logout")
    @CrossOrigin(origins = "http://localhost:3000")
    @ResponseBody
    public String logout() throws JsonProcessingException {
        userDao.setUser(null);
        HashMap<String, String> map = new HashMap<>();
        map.put("body", "OK");
        map.put("user", null);
        return objectMapper.writeValueAsString(map);
    }

}