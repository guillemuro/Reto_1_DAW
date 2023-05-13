package action;

import dao.UserDAO;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class UserAction implements Action {

    @Override
    public void execute(HttpServletRequest req, HttpServletResponse resp, String action) {
        switch (action) {
            case "ADD":

                break;
            case "FIND":
                System.out.println("find");
                new UserDAO().find(req, resp);
                break;
        }
    }

}
