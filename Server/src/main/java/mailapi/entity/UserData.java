package mailapi.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;


@Entity
@SequenceGenerator(name = "user_seq", sequenceName = "userdata_seq", allocationSize = 1)
@Table(name = "user_data", schema = "data")
public class UserData {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "user_seq")
    private Integer userId;
    @Getter
    @Setter
    private String userName;
    @Setter
    private String userSurname;
    @Setter
    private String userEmail;
    @Setter
    private String userPassword;
    @Setter
    private String userCreateDate;

    public UserData(String userName, String userSurname, String programEmail, String password, String programDate) {
        this.userName = userName;
        this.userSurname = userSurname;
        this.userEmail = programEmail;
        this.userPassword = password;
        this.userCreateDate = programDate;
    }

    public String getUserName() {
        return userName;
    }

    public String getUserSurname() {
        return userSurname;
    }

    public String getProgramEmail() {
        return userEmail;
    }

    public String getPassword() {
        return userPassword;
    }

    public String getProgramDate() {
        return userCreateDate;
    }

    public UserData() {

    }
}
