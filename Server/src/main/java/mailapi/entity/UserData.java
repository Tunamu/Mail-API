package mailapi.entity;

import lombok.Getter;
import lombok.Setter;

public class UserData {
    @Setter
    private String username;
    @Setter
    private String userSurname;
    @Setter
    private String programEmail;
    @Setter
    private String password;

    UserData(String userName, String userSurname, String programEmail, String password) {
        this.username = userName;
        this.userSurname = userSurname;
        this.programEmail = programEmail;
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public String getUserSurname() {
        return userSurname;
    }

    public String getProgramEmail() {
        return programEmail;
    }

    public String getPassword() {
        return password;
    }

    UserData(){};
}
