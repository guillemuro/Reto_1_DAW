package motor;

import java.sql.Statement;

import interfaces.IMotor;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class MotorOracle implements IMotor {
    // ATRIBUTO
    private Connection connection;
    private Statement statement;
    private PreparedStatement preparedStatement;
    private ResultSet resultSet;
    private final String DRIVER = "oracle.jdbc.driver.OracleDriver";
    private final String URL = "jdbc:oracle:thin:@//";
    private final String PORT = "localhost:1521/";
    private final String DB_NAME = "XE";
    private final String USER = "COFFEE";
    private final String PASSWORD = "123";
    // METODO

    @Override
    public void connect() {
        try {
            Class.forName(DRIVER);
            this.connection = DriverManager.getConnection(URL + PORT + DB_NAME, USER, PASSWORD);
        } catch (Exception e) {
            System.out.println(e);
        }
    }

    @Override
    public ResultSet executeQuery(String sql) {
        try {
            statement = connection.createStatement();
            resultSet = statement.executeQuery(sql);
            return resultSet;
        } catch (Exception e) {
            System.out.println(e);
            return null;
        }
    }

    @Override
    public int executeUpdate(String sql) {
        try {
            preparedStatement = connection.prepareStatement(sql);
            return preparedStatement.executeUpdate();
        } catch (Exception e) {
            System.out.println(e);
            return 0;
        }
    }

    @Override
    public void disconnect() {
        try {
            if (connection != null) {
                connection.close();
            }
            if (statement != null) {
                statement.close();
            }
            if (preparedStatement != null) {
                preparedStatement.close();
            }
            if (resultSet != null) {
                resultSet.close();
            }
        } catch (Exception e) {
            System.out.println(e);
        }
    }

}
