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
    private Integer user_id;
    @Getter
    @Setter
    private String user_name;
    @Setter
    private String user_surname;
    @Setter
    private String user_email;
    @Setter
    private String user_password;
    @Setter
    private String user_create_date;

    public UserData(String userName, String userSurname, String programEmail, String password, String programDate) {
        this.user_name = userName;
        this.user_surname = userSurname;
        this.user_email = programEmail;
        this.user_password = password;
        this.user_create_date = programDate;
    }

    public String getUsername() {
        return user_name;
    }

    public String getUserSurname() {
        return user_surname;
    }

    public String getProgramEmail() {
        return user_email;
    }

    public String getPassword() {
        return user_password;
    }

    public String getProgramDate() {
        return user_create_date;
    }

    public UserData() {

    }
}
