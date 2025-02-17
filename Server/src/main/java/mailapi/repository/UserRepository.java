package mailapi.repository;

import mailapi.dto.UserDataDTO;
import mailapi.entity.UserData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface UserRepository extends JpaRepository<UserData,Integer> {

    @Query("SELECT count(u)>0 FROM UserData u where u.useremail = :userEmail")
    boolean isAnyEmail(@Param("userEmail")  String email);

}
