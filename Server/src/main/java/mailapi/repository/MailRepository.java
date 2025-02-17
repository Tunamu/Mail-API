package mailapi.repository;

import mailapi.entity.MailData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MailRepository extends JpaRepository<MailData, Integer> {
}
