package dao;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public interface DAO {
    public void add(HttpServletRequest req, HttpServletResponse resp);

    public void find(HttpServletRequest req, HttpServletResponse resp);

    public void delete(HttpServletRequest req, HttpServletResponse resp);

    public void update(HttpServletRequest req, HttpServletResponse resp);
}
