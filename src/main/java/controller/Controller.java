package controller;

import java.io.IOException;
import java.io.PrintWriter;

import action.CoffeeUserAction;
import action.ProductAction;
import action.ShoppingCartAction;
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
        PrintWriter pw = resp.getWriter();
        String[] splittedAction = action.split("\\.");
        String json = "";

        switch (splittedAction[0]) {
            case "USER":
                json = new CoffeeUserAction().execute(req, splittedAction[1]);
                break;
            case "SHOPPINGCART":
                json = new ShoppingCartAction().execute(req, splittedAction[1]);
                break;
            case "PRODUCT":
                json = new ProductAction().execute(req, splittedAction[1]);
                break;
        }

        pw.print(json);
    }
}
