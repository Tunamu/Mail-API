package mailapi.dto;

public class UserDataDTO {
    private String DtoUserName;
    private String DtoUserSurname;
    private String DtoEmail;
    private String DtoPassword;

    public UserDataDTO(String DtoUserName, String DtoUserSurname, String DtoEmail, String DtoPassword) {
        this.DtoUserName = DtoUserName;
        this.DtoUserSurname = DtoUserSurname;
        this.DtoEmail = DtoEmail;
        this.DtoPassword = DtoPassword;
    }

    public String getDtoUserName() {
        return DtoUserName;
    }

    public String getDtoUserSurname() {
        return DtoUserSurname;
    }

    public String getDtoEmail() {
        return DtoEmail;
    }

    public String getDtoPassword() {
        return DtoPassword;
    }
}
