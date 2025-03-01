package mailapi.repository;

import mailapi.entity.MailData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MailRepository extends JpaRepository<MailData,Integer> {

    List<MailData> findAllByReceiverUserMailAdressOrderByMailSendDateDesc(String receiverMail);
}
