package model;

public class User {
    // ATRIBUTOS
    private int userId; // ID del usuario
    private String name; // Nombre del usuario
    private String pass; // Contraseña del usuario
    private String email; // Email del usuario

    // CONSTRUCTOR
    public User(String name, String pass, String email) {
        this.name = name;
        this.pass = pass;
        this.email = email;
    }

    // MÉTODOS DE ACCESO (GETTERS Y SETTERS)
    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPass() {
        return pass;
    }

    public void setPass(String pass) {
        this.pass = pass;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
