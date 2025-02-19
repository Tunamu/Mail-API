package mailapi.repository;

import mailapi.entity.MailData;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MailRepository extends JpaRepository<MailData,Integer> {
}
