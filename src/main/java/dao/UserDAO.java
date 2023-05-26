package dao;

import java.sql.ResultSet;
import java.util.ArrayList;

import interfaces.IDAO;
import model.User;
import motor.MotorOracle;

public class UserDAO implements IDAO<User> {
    MotorOracle motorOracle = new MotorOracle();

    @Override
    public int add(User bean) {
        try {
            motorOracle.connect();
            String sql = "SELECT MAX(COFFEEUSER_ID) FROM COFFEEUSER";
            ResultSet rs = motorOracle.executeQuery(sql);
            int maxId = 0;
            if (rs.next()) {
                maxId = rs.getInt(1);
                maxId++;
            }
            sql = "INSERT INTO COFFEEUSER VALUES (" + maxId + ",'" + bean.getName() + "', '" + bean.getPass()
                    + "', '" + bean.getEmail() + "')";
            motorOracle.executeUpdate(sql);
            motorOracle.disconnect();
            sql = "SELECT COFFEEUSER_ID FROM COFFEEUSER CU WHERE CU.COFFEEUSER_EMAIL = " + bean.getEmail();
            rs = motorOracle.executeQuery(sql);
            int userId = 0;
            if (rs.next()) {
                userId = rs.getInt(1);
            }
            return userId;

        } catch (Exception e) {
            System.out.println(e);
            motorOracle.disconnect();
            return 0;
        }
    }

    @Override
    public ArrayList<User> find(User bean) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'find'");
    }

    @Override
    public int delete(Integer i) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'delete'");
    }

    @Override
    public int update(Integer i) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'update'");
    }

    @Override
    public ArrayList<User> findAll() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'findAll'");
    }

    @Override
    public User findById(int id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'findById'");
    }

}
