package interfaces;

import java.sql.ResultSet;

public interface IMotor {
    public void connect();

    public ResultSet executeQuery(String sql);

    public int executeUpdate(String sql);

    public void disconnect();
}
