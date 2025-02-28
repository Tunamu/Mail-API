package mailapi.repository;

import mailapi.dto.MailDataDTO;
import mailapi.entity.MailData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface MailRepository extends JpaRepository<MailData,Integer> {

    @Query("SELECT new mailapi.dto.MailDataDTO( m.sender_user_mail_adress, m.receiver_user_mail_adress, m.mail_data_header,m.mail_data_topic,m.mail_data_description) FROM MailData m WHERE m.receiver_user_mail_adress = :userEmail AND m.receiver_user_mail_adress IS NOT NULL order by m.mail_send_date desc")
    List<MailDataDTO> getAllMailsFromEmail(@Param("userEmail") String userEmail);

}
