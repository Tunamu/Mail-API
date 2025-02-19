package mailapi.entity;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@SequenceGenerator(name = "mail_seq", sequenceName = "maildata_seq", allocationSize = 1)
@Table(name = "mail_data", schema = "data")
public class MailData {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "mail_seq")
    @Getter
    private Integer mail_id;
    @Getter
    @Setter
    private String sender_user_email_adress;
    @Getter
    @Setter
    private String receiver_user_email_adress;
    @Getter
    @Setter
    private String mail_send_date;
    @Getter
    @Setter
    private String mail_data_header;
    @Getter
    @Setter
    private String mail_data_topic;
    @Getter
    @Setter
    private String mail_data_description;

    public MailData(String senderEmail,String receiverEmail,String mailDate,String mailHeader,String mailTopic,String mailDescription) {
        this.sender_user_email_adress = senderEmail;
        this.receiver_user_email_adress = receiverEmail;
        this.mail_send_date = mailDate;
        this.mail_data_header = mailHeader;
        this.mail_data_topic = mailTopic;
        this.mail_data_description = mailDescription;
    }

    public MailData(){

    }

}
