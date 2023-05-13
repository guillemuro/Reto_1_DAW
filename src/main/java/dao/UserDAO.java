package dao;

import java.io.PrintWriter;

import com.google.gson.Gson;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import motor.MotorOracle;

public class UserDAO implements DAO {
    // ATRIBUTO
    MotorOracle motorOracle = new MotorOracle();

    @Override
    public void add(HttpServletRequest req, HttpServletResponse resp) {

    }

    @Override
    public void find(HttpServletRequest req, HttpServletResponse resp) {
        try {
            PrintWriter pw = resp.getWriter();
            pw.print(new Gson().toJson("hola"));
        } catch (Exception e) {
            System.out.println(e);
        }
    }

    @Override
    public void delete(HttpServletRequest req, HttpServletResponse resp) {

    }

    @Override
    public void update(HttpServletRequest req, HttpServletResponse resp) {

    }

}
