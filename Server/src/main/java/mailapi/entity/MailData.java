package mailapi.entity;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Entity
@SequenceGenerator(name = "mail_seq", sequenceName = "maildata_seq", allocationSize = 1)
@Table(name = "mail_data", schema = "data")
public class MailData {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "mail_seq")
    private Integer mail_id;
    @Setter
    private String sender_user_mail_adress;
    @Setter
    private String receiver_user_mail_adress;
    @Setter
    private String mail_send_date;
    @Setter
    private String mail_data_header;
    @Setter
    private String mail_data_topic;
    @Setter
    private String mail_data_description;

    public MailData(String senderEmail,String receiverEmail,String mailDate,String mailHeader,String mailTopic,String mailDescription) {
        this.sender_user_mail_adress = senderEmail;
        this.receiver_user_mail_adress = receiverEmail;
        this.mail_send_date = mailDate;
        this.mail_data_header = mailHeader;
        this.mail_data_topic = mailTopic;
        this.mail_data_description = mailDescription;
    }

    public MailData(){

    }

}
