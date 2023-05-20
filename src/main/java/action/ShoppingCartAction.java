package action;

import com.google.gson.Gson;

import interfaces.IAction;
import jakarta.servlet.http.HttpServletRequest;

public class ShoppingCartAction implements IAction {
    // ATRIBUTO
    Gson gson = new Gson();

    // METODOS
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

    @Override
    public String find(HttpServletRequest req) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'find'");
    }

    @Override
    public String findAll(HttpServletRequest req) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'findAll'");
    }

    @Override
    public String update(HttpServletRequest req) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'update'");
    }

    @Override
    public String delete(HttpServletRequest req) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'delete'");
    }

    @Override
    public String add(HttpServletRequest req) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'add'");
    }

}
