package action;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public interface Action {
    // Método execute() que toma los parámetros HttpServletRequest,
    // HttpServletResponse y String action
    public void execute(HttpServletRequest req, HttpServletResponse resp, String action);
}
