package interfaces;

import java.util.ArrayList;

//Esta interfaz define los métodos genéricos que deben implementar las clases DAO en tu aplicación.
public interface IDAO<E> {
    public int add(E bean);

    public ArrayList<E> find(E bean);

    public int delete(Integer i);

    public int update(Integer i);

    E findById(int id);

    public ArrayList<E> findAll();

}
