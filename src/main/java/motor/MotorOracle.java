package motor;

import java.sql.Statement;

import interfaces.IMotor;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class MotorOracle implements IMotor {
    // ATRIBUTOS
    private Connection connection; // Conexión a la base de datos
    private Statement statement; // Objeto de sentencia para consultas SQL
    private PreparedStatement preparedStatement; // Objeto de sentencia precompilada para consultas SQL
    private ResultSet resultSet; // Resultado de una consulta SQL
    private final String DRIVER = "oracle.jdbc.driver.OracleDriver"; // Controlador de la base de datos Oracle
    private final String URL = "jdbc:oracle:thin:@//"; // URL de conexión a la base de datos
    private final String PORT = "localhost:1521/"; // Puerto de la base de datos
    private final String DB_NAME = "XE"; // Nombre de la base de datos
    private final String USER = "COFFEE"; // Usuario de la base de datos
    private final String PASSWORD = "123"; // Contraseña del usuario

    // MÉTODOS

    @Override
    public void connect() {
        try {
            Class.forName(DRIVER); // Cargar el controlador de la base de datos
            this.connection = DriverManager.getConnection(URL + PORT + DB_NAME, USER, PASSWORD); // Establecer la
                                                                                                 // conexión
        } catch (Exception e) {
            System.out.println(e);
        }
    }

    @Override
    public ResultSet executeQuery(String sql) {
        try {
            statement = connection.createStatement(); // Crear un objeto de sentencia
            resultSet = statement.executeQuery(sql); // Ejecutar la consulta SQL y obtener el resultado
            return resultSet;
        } catch (Exception e) {
            System.out.println(e);
            return null;
        }
    }

    @Override
    public int executeUpdate(String sql) {
        try {
            preparedStatement = connection.prepareStatement(sql); // Crear un objeto de sentencia precompilada
            return preparedStatement.executeUpdate(); // Ejecutar la consulta de actualización y obtener el número de
                                                      // filas afectadas
        } catch (Exception e) {
            System.out.println(e);
            return 0;
        }
    }

    public void commit() {
        try {
            connection.commit();
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }

    @Override
    public void disconnect() {
        try {
            if (connection != null) {
                connection.close(); // Cerrar la conexión a la base de datos
            }
            if (statement != null) {
                statement.close(); // Cerrar el objeto de sentencia
            }
            if (preparedStatement != null) {
                preparedStatement.close(); // Cerrar el objeto de sentencia precompilada
            }
            if (resultSet != null) {
                resultSet.close(); // Cerrar el resultado de la consulta
            }
        } catch (Exception e) {
            System.out.println(e);
        }
    }
}
