package mailapi.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;


@Entity
@SequenceGenerator(name = "user_seq", sequenceName = "userdata_seq", allocationSize = 1)
@Table(name = "userdata", schema = "data")
public class UserData {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "user_seq")
    private Integer userid;
    @Getter
    @Setter
    private String username;
    @Setter
    private String usersurname;
    @Setter
    private String useremail;
    @Setter
    private String userpassword;

    public UserData(String userName, String userSurname, String programEmail, String password) {
        this.username = userName;
        this.usersurname = userSurname;
        this.useremail = programEmail;
        this.userpassword = password;
    }

    public String getUsername() {
        return username;
    }

    public String getUserSurname() {
        return usersurname;
    }

    public String getProgramEmail() {
        return useremail;
    }

    public String getPassword() {
        return userpassword;
    }

    public UserData() {

    }
}
