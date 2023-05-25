package dao;

import java.sql.ResultSet;
import java.util.ArrayList;

import interfaces.IDAO;
import model.Product;
import motor.MotorOracle;

public class ProductDAO implements IDAO<Product> {
    MotorOracle motorOracle = new MotorOracle();

    @Override
    public int add(Product bean) {
        try {
            motorOracle.connect();
            String sql = "SELECT MAX(COFFEEUSER_ID) FROM COFFEEUSER";
            ResultSet rs = motorOracle.executeQuery(sql);
            int maxId = 0;
            if (rs.next()) {
                maxId = rs.getInt(1);
                maxId++;
            }
            String quString = String.format(
                    "INSERT INTO PRODUCT (PRODUCT_ID, PRODUCT_NAME, PRODUCT_DESCRIPTION, PRODUCT_PRICE, PRODUCT_IMG, PRODUCT_TITLE, PRODUCT_TYPE) VALUES (%s, %s, %s, %s, %s, %s, %s)",
                    maxId,
                    bean.getProductName(), bean.getProductDesc(), bean.getProductPrice(), bean.getProductImg(),
                    bean.getProductTitle(), bean.getProductType());

            motorOracle.executeQuery(quString);
            sql = "SELECT PRODUCT_ID FROM PRODUCT P WHERE P.PRODUCT_NAME = " + bean.getProductName();
            rs = motorOracle.executeQuery(sql);
            int productId = 0;
            if (rs.next()) {
                productId = rs.getInt(1);
            }
            return productId;

        } catch (Exception e) {
            System.out.println(e);
            motorOracle.disconnect();
            return 0;
        }

    }

    @Override
    public ArrayList<Product> find(Product bean) {
        try {
            ArrayList<Product> lstProduct = new ArrayList<>();
            motorOracle.connect();
            String sql = "SELECT * FROM PRODUCT WHERE PRODUCT_TYPE =" + bean.getProductType();
            ResultSet rs = motorOracle.executeQuery(sql);
            while (rs.next()) {
                Product product = new Product();

                product.setProductId(rs.getInt("PRODUCT_ID"));
                product.setProductName(rs.getString("PRODUCT_NAME"));
                product.setProductType(rs.getInt("PRODUCT_TYPE"));
                product.setProductPrice(rs.getDouble("PRODUCT_PRICE"));
                product.setProductImg(rs.getString("PRODUCT_TITLE"));
                product.setProductDesc(rs.getString("PRODUCT_DESC"));
                product.setProductTitle(rs.getString("PRODUCT_IMG"));
                lstProduct.add(product);

            }
            motorOracle.disconnect();
            return lstProduct;
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
    public ArrayList<Product> findAll() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'findAll'");
    }

}
