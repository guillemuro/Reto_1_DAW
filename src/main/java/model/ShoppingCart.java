package model;

public class ShoppingCart {
    // ATRIBUTOS
    private int shoppingCartId; // ID del carrito de compras
    private int userId; // ID del usuario
    private int productId; // ID del producto
    private int quantity; // Cantidad del producto en el carrito

    // CONSTRUCTORES
    public ShoppingCart(int userId) {
        this.userId = userId;
    }

    public ShoppingCart(int userId, int productId, int quantity, int shoppingCartId) {
        this.userId = userId;
        this.productId = productId;
        this.quantity = quantity;
        this.shoppingCartId = shoppingCartId;
    }

    public ShoppingCart() {
    }

    // MÉTODOS DE ACCESO (GETTERS Y SETTERS)
    public int getShoppingCartId() {
        return shoppingCartId;
    }

    public void setShoppingCartId(int shoppingCartId) {
        this.shoppingCartId = shoppingCartId;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public int getProductId() {
        return productId;
    }

    public void setProductId(int productId) {
        this.productId = productId;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
}
