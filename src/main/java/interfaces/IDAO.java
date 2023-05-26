package interfaces;

import java.util.ArrayList;

public interface IDAO<E> {
    public int add(E bean);

    public ArrayList<E> find(E bean);

    public int delete(Integer i);

    public int update(Integer i);

    public ArrayList<E> findAll();

    E findById(int id);
}
