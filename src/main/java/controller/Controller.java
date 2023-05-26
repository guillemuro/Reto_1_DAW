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
        // Establecer encabezados para permitir el acceso desde cualquier origen
        resp.setHeader("Access-Control-Allow-Origin", "*");
        // Establecer los métodos HTTP permitidos
        resp.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
        // Establecer los encabezados permitidos
        resp.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
        // Establecer el tipo de contenido de la respuesta como JSON
        resp.setContentType("application/json");

        // Obtener el parámetro "ACTION" de la solicitud
        String action = req.getParameter("ACTION");

        // Crear una instancia de PrintWriter para escribir la respuesta de la solicitud
        PrintWriter pw = resp.getWriter();

        // Dividir la cadena "action" utilizando el punto como separador
        String[] splittedAction = action.split("\\.");

        // Variable para almacenar la respuesta JSON
        String json = "";

        // Evaluar el primer elemento de "splittedAction"
        switch (splittedAction[0]) {
            case "USER":
                // Crear una instancia de CoffeeUserAction y llamar al método execute() con los
                // parámetros req y el segundo elemento de splittedAction
                json = new CoffeeUserAction().execute(req, splittedAction[1]);
                break;
            case "SHOPPINGCART":
                // Crear una instancia de ShoppingCartAction y llamar al método execute() con
                // los parámetros req y el segundo elemento de splittedAction
                json = new ShoppingCartAction().execute(req, splittedAction[1]);
                break;
            case "PRODUCT":
                // Crear una instancia de ProductAction y llamar al método execute() con los
                // parámetros req y el segundo elemento de splittedAction
                json = new ProductAction().execute(req, splittedAction[1]);
                break;
        }

        // Escribir la respuesta JSON
        pw.print(json);
    }
}
