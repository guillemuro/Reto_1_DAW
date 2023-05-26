package model;

public class Product {
    // ATRIBUTOS
    private int productId; // ID del producto
    private String productName; // Nombre del producto
    private int productType; // Tipo de producto
    private double productPrice; // Precio del producto
    private String productDesc; // Descripción del producto
    private String productImg; // Imagen del producto
    private String productTitle; // Título del producto

    // CONSTRUCTORES
    public Product(int productType) {
        this.productType = productType;
    }

    public Product(int productId, String productName, int productType, double productPrice, String productTitle,
            String productDesc, String productImg) {
        this.productId = productId;
        this.productName = productName;
        this.productType = productType;
        this.productPrice = productPrice;
        this.productDesc = productDesc;
        this.productImg = productImg;
        this.productTitle = productTitle;
    }

    public Product() {
    }

    // MÉTODOS DE ACCESO (GETTERS Y SETTERS)
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

    public String getProductTitle() {
        return productTitle;
    }

    public void setProductTitle(String productTitle) {
        this.productTitle = productTitle;
    }

    // MÉTODO TOSTRING
    @Override
    public String toString() {
        return "Product [productId=" + productId + ", productName=" + productName + ", productType=" + productType
                + ", productPrice=" + productPrice + ", productDesc=" + productDesc + ", productImg=" + productImg
                + ", productTitle=" + productTitle + "]";
    }

}
