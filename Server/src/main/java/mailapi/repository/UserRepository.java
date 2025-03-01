package mailapi.repository;

import mailapi.entity.UserData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


public interface UserRepository extends JpaRepository<UserData,Integer> {

    @Query("SELECT count(u)>0 FROM UserData u where u.userEmail = :userEmail")
    boolean isAnyEmail(@Param("userEmail")  String email);

    @Query("SELECT count(u)>0 FROM UserData u where  u.userEmail = :userEmail and u.userPassword = :userPassword")
    boolean userAuthenticated(@Param("userEmail")  String email, @Param("userPassword")  String password);

    //@Query("SELECT u.user_name FROM UserData u where u.user_email = :userEmail")
    //String getNameByEmail(@Param("userEmail") String email);

    UserData findByuserEmail(String email);
}
