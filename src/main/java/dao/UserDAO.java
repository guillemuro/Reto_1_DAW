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
            String sql = "SELECT MAX(COFFEE_USER_ID) FROM COFFEE_USER";
            ResultSet rs = motorOracle.executeQuery(sql);
            int maxId = 0;
            if (rs.next()) {
                maxId = rs.getInt(1);
                maxId++;
            }

            // Construye la consulta SQL para insertar un nuevo usuario en la base de datos
            sql = "INSERT INTO COFFEE_USER VALUES (" + maxId + ",'" + bean.getName() + "', '" + bean.getPass()
                    + "', '" + bean.getEmail() + "')";
            motorOracle.executeUpdate(sql);
            motorOracle.disconnect();

            // Obtiene el ID del usuario recién insertado
            sql = "SELECT COFFEE_USER_ID FROM COFFEE_USER CU WHERE CU.COFFEE_USER_EMAIL = " + bean.getEmail();
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
