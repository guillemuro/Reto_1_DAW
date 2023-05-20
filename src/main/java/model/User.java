package model;

public class User {
    // ATRIBUTO
    private int userId;
    private String name;
    private String pass;
    private String email;

    // CONSTRUCTOR
    public User(String name, String pass, String email) {
        this.name = name;
        this.pass = pass;
        this.email = email;
    }

    // METODOS
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
