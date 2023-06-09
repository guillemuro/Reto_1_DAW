
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
    public String add(HttpServletRequest req) {
        String productName = req.getParameter("NAME");
        String productDesc = req.getParameter("DESC");
        double productPrice = Double.parseDouble(req.getParameter("PRECIO"));
        String productImg = req.getParameter("IMG");
        int productType = Integer.parseInt(req.getParameter("CATEGORIA"));
        String productTitle = req.getParameter("TITLE");

        Product product = new Product(0, productName, productType, productPrice, productTitle, productDesc, productImg);

        ProductDAO productDAO = new ProductDAO(); // Instancia del ProductDAO

        int productId = productDAO.add(product); // Inserta el producto en la base de datos y obtén el ID del producto
                                                 // creado

        // Recupera el producto recién insertado
        Product addProduct = productDAO.findById(productId);

        String json = gson.toJson(addProduct);
        return json;
    }

    @Override
    public String delete(HttpServletRequest req) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'delete'");
    }

}