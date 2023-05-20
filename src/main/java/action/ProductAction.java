
package action;

import java.util.ArrayList;

import com.google.gson.Gson;

import dao.ProductDAO;
import interfaces.IAction;
import jakarta.servlet.http.HttpServletRequest;
import model.Product;

public class ProductAction implements IAction {
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
        String type = req.getParameter("TYPE");
        int typeInt = Integer.parseInt(type);
        Product product = new Product(typeInt);
        ArrayList<Product> lstProduct = new ProductDAO().find(product);
        String json = gson.toJson(lstProduct);
        return json;
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