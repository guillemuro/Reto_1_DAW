package action;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public interface Action {
    public void execute(HttpServletRequest req, HttpServletResponse resp, String action);
}
