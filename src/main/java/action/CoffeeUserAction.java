package action;

import java.util.ArrayList;

import com.google.gson.Gson;
import dao.UserDAO;
import interfaces.IAction;
import jakarta.servlet.http.HttpServletRequest;
import model.User;

public class CoffeeUserAction implements IAction {
    // ATRIBUTO
    Gson gson = new Gson();

    // METODOS

    // Implementación del método execute() de la interfaz IAction
    @Override
    public String execute(HttpServletRequest req, String action) {
        String json = "";
        switch (action) {
            case "ADD":
                json = add(req);
                break;
            case "FIND":
                json = find(req);
                break;
            case "FINDALL":
                json = findAll(req);
                break;
            case "UPDATE":
                json = update(req);
                break;
            case "DELETE":
                json = delete(req);
                break;
        }
        return json;
    }

    // Implementación del método find() de la interfaz IAction
    @Override
    public String find(HttpServletRequest req) {
        String username = req.getParameter("NAME");
        String email = req.getParameter("EMAIL");
        String pass = req.getParameter("PASS");
        User user = new User(username, pass, email);
        ArrayList<User> lstUser = new UserDAO().find(user);
        String json = gson.toJson(lstUser);
        return json;
    }

    // Implementación del método findAll() de la interfaz IAction
    @Override
    public String findAll(HttpServletRequest req) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'findAll'");
    }

    // Implementación del método update() de la interfaz IAction
    @Override
    public String update(HttpServletRequest req) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'update'");
    }

    // Implementación del método delete() de la interfaz IAction
    @Override
    public String delete(HttpServletRequest req) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'delete'");
    }

    // Implementación del método add() de la interfaz IAction
    @Override
    public String add(HttpServletRequest req) {
        String email = req.getParameter("EMAIL");
        String pass = req.getParameter("PASS");
        String username = req.getParameter("USERNAME");
        User user = new User(username, pass, email);
        int filasModificadas = new UserDAO().add(user);
        String json = gson.toJson(filasModificadas);
        return json;
    }
}
