package ru.burtseva.recipes.dao;

import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.support.JdbcDaoSupport;
import ru.burtseva.recipes.model.User;

import javax.sql.DataSource;
import java.util.List;

public class UserJdbcDao extends JdbcDaoSupport implements UserDao {
    private String currentUser = null;

    public UserJdbcDao(DataSource dataSource) {
        super();
        setDataSource(dataSource);
        String dropSql = "DROP TABLE IF EXISTS Users;";
        getJdbcTemplate().execute(dropSql);
        
        String initSqlUsers = "CREATE TABLE IF NOT EXISTS Users " +
                "( " +
                "firstName VARCHAR(50) not null, " +
                "secondName VARCHAR(50) not null, " +
                "login VARCHAR(50) not null primary key, " +
                "age INTEGER not null" +
                ");";
        getJdbcTemplate().execute(initSqlUsers);
    }

    @Override
    public boolean addUser(User user) {
        if (getUsers(user.getLogin()).isEmpty()) {
            String sql = "INSERT INTO Users (firstName, secondName, login, age) VALUES " +
                    "('" + user.getFirstName() + "', " +
                    "'" + user.getSecondName() + "', " +
                    "'" + user.getLogin() + "', " +
                    user.getAge() + ");";
            getJdbcTemplate().execute(sql);
            return true;
        } else {
            return false;
        }
    }

    @Override
    public List<User> getUsers(String login) {
        String sql = "SELECT * " +
                "FROM Users " +
                "WHERE Users.login = \"" + login + "\";";
        return getJdbcTemplate().query(sql, new BeanPropertyRowMapper(User.class));
    }

    @Override
    public boolean setUser(String login) {
        if (!getUsers(login).isEmpty()) {
            this.currentUser = login;
            return true;
        } else {
            return false;
        }
    }

    @Override
    public String getUser() {
        return currentUser;
    }
}