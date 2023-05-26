package dao;

import java.sql.ResultSet;
import java.util.ArrayList;

import interfaces.IDAO;
import model.ShoppingCart;
import motor.MotorOracle;

public class ShoppingCartDAO implements IDAO<ShoppingCart> {
    MotorOracle motorOracle = new MotorOracle();

    @Override
    public int add(ShoppingCart bean) {
        return 0;
    }

    @Override
    public ArrayList<ShoppingCart> find(ShoppingCart bean) {

        try {
            ArrayList<ShoppingCart> listShopping = new ArrayList<>();
            String sql = "SELECT * FROM SHOPPINGCART WHERE USER_ID =" + bean.getUserId();
            ResultSet rs = motorOracle.executeQuery(sql);
            while (rs.next()) {
                ShoppingCart shoppingCart = new ShoppingCart();
                shoppingCart.setUserId(rs.getInt("SHOPINGCART_ID"));
                shoppingCart.setProductId(rs.getInt("PRODUCT_ID"));
                shoppingCart.setQuantity(rs.getInt("QUANTITY"));
                shoppingCart.setShoppingCartId(rs.getInt("SHOPPINGCART_ID"));
                listShopping.add(shoppingCart);

            }
            motorOracle.disconnect();
            return listShopping;
        } catch (Exception e) {
            System.out.println(e);
            return null;
        }

    }

    @Override
    public int delete(Integer i) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'delete'");
    }

    @Override
    public int update(Integer i) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'update'");
    }

    @Override
    public ArrayList<ShoppingCart> findAll() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'findAll'");
    }

    @Override
    public ShoppingCart findById(int id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'findById'");
    }

}
