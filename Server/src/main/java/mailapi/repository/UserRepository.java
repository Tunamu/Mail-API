package mailapi.repository;

import mailapi.entity.UserData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


public interface UserRepository extends JpaRepository<UserData,Integer> {

    @Query("SELECT count(u)>0 FROM UserData u where u.user_email = :userEmail")
    boolean isAnyEmail(@Param("userEmail")  String email);

    @Query("SELECT count(u)>0 FROM UserData u where  u.user_email = :userEmail and u.user_password = :userPassword")
    boolean userAuthenticated(@Param("userEmail")  String email, @Param("userPassword")  String password);

}
