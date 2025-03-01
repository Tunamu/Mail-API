package mailapi.entity;


import jakarta.persistence.*;
import lombok.Setter;

@Entity
@SequenceGenerator(name = "mail_seq", sequenceName = "maildata_seq", allocationSize = 1)
@Table(name = "mail_data", schema = "data")
public class MailData {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "mail_seq")
    private Integer mailId;
    @Setter
    private String senderUserMailAdress;
    @Setter
    private String receiverUserMailAdress;
    @Setter
    private String mailSendDate;
    @Setter
    private String mailDataHeader;
    @Setter
    private String mailDataTopic;
    @Setter
    private String mailDataDescription;

    public MailData(String senderEmail,String receiverEmail,String mailDate,String mailHeader,String mailTopic,String mailDescription) {
        this.senderUserMailAdress = senderEmail;
        this.receiverUserMailAdress = receiverEmail;
        this.mailSendDate = mailDate;
        this.mailDataHeader = mailHeader;
        this.mailDataTopic = mailTopic;
        this.mailDataDescription = mailDescription;
    }

    public MailData(){

    }

    public Integer getMailId() {
        return mailId;
    }

    public String getSenderUserMailAdress() {
        return senderUserMailAdress;
    }

    public String getReceiverUserMailAdress() {
        return receiverUserMailAdress;
    }

    public String getMailSendDate() {
        return mailSendDate;
    }

    public String getMailDataHeader() {
        return mailDataHeader;
    }

    public String getMailDataTopic() {
        return mailDataTopic;
    }

    public String getMailDataDescription() {
        return mailDataDescription;
    }

}
