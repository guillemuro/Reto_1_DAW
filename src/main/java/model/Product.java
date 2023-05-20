package model;

public class Product {
    // ATRIBUTO
    private int productId;
    private String productName;
    private int productType;
    private double productPrice;
    private String productDesc;
    private String productImg;

    // CONSTRUCTOR
    public Product(int productType) {
        this.productType = productType;
    }

    public Product(int productId, String productName, int productType, double productPrice, String productDesc,
            String productImg) {
        this.productId = productId;
        this.productName = productName;
        this.productType = productType;
        this.productPrice = productPrice;
        this.productDesc = productDesc;
        this.productImg = productImg;
    }

    public Product() {
    }

    // METODO
    public int getProductId() {
        return productId;
    }

    public void setProductId(int productId) {
        this.productId = productId;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public int getProductType() {
        return productType;
    }

    public void setProductType(int productType) {
        this.productType = productType;
    }

    public double getProductPrice() {
        return productPrice;
    }

    public void setProductPrice(double productPrice) {
        this.productPrice = productPrice;
    }

    public String getProductDesc() {
        return productDesc;
    }

    public void setProductDesc(String productDesc) {
        this.productDesc = productDesc;
    }

    public String getProductImg() {
        return productImg;
    }

    public void setProductImg(String productImg) {
        this.productImg = productImg;
    }

}
