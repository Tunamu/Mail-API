package mailapi.dto;



public class MailDataDTO {
    private String DTOMailFrom;
    private String DTOMailTo;
    private String DTOMailDate;
    private String DTOMailHeader;
    private String DTOMailTopic;
    private String DTOMailDescription;

    public MailDataDTO(String mailFrom, String mailTo, String mailHeader, String mailTopic, String mailDescription) {
        this.DTOMailFrom = mailFrom;
        this.DTOMailTo = mailTo;
        this.DTOMailDate = "";
        this.DTOMailHeader = mailHeader;
        this.DTOMailTopic = mailTopic;
        this.DTOMailDescription = mailDescription;
    }

    public MailDataDTO(String mailFrom, String mailTo,String date, String mailHeader, String mailTopic, String mailDescription) {
        this.DTOMailFrom = mailFrom;
        this.DTOMailTo = mailTo;
        this.DTOMailDate = date;
        this.DTOMailHeader = mailHeader;
        this.DTOMailTopic = mailTopic;
        this.DTOMailDescription = mailDescription;
    }

    public MailDataDTO() {

    }

    public String getDTOMailFrom() {
        return DTOMailFrom;
    }

    public String getDTOMailTo() {
        return DTOMailTo;
    }

    public String getDTOMailDate() {
        return DTOMailDate;
    }

    public String getDTOMailHeader() {
        return DTOMailHeader;
    }

    public String getDTOMailTopic() {
        return DTOMailTopic;
    }

    public String getDTOMailDescription() {
        return DTOMailDescription;
    }

}
