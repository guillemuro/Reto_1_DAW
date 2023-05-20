package interfaces;

import jakarta.servlet.http.HttpServletRequest;

public interface IAction {
    public String execute(HttpServletRequest req, String action);

    public String find(HttpServletRequest req);

    public String findAll(HttpServletRequest req);

    public String update(HttpServletRequest req);

    public String delete(HttpServletRequest req);

    public String add(HttpServletRequest req);
}
