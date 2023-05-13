package controller;

import java.io.IOException;

import action.UserAction;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet("/Controller")
public class Controller extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setHeader("Access-Control-Allow-Origin", "*");
        resp.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
        resp.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
        resp.setContentType("application/json");
        String action = req.getParameter("ACTION");
        System.out.println(action);
        String[] splittedAction = action.split("\\.");

        switch (splittedAction[0]) {
            case "USER":
                System.out.println("user");
                new UserAction().execute(req, resp, splittedAction[1]);
                break;
        }

    }
}
