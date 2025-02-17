package mailapi.service;

import mailapi.dto.UserDataDTO;
import mailapi.entity.UserData;
import mailapi.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MailService {
    @Autowired
    UserRepository userRepository;

    public void saveUser(UserDataDTO userDataDTO){
        UserData userData = new UserData(userDataDTO.getDtoUserName(),userDataDTO.getDtoUserSurname(),userDataDTO.getDtoEmail(),userDataDTO.getDtoPassword());
        userRepository.save(userData);
        System.out.println("User saved!");
    }

    public void isAnyUserWithThisEmail(String userEmail ) {
        if(userRepository.isAnyEmail(userEmail)){
            System.out.println("User with this email already exists!");
        }else{
            System.out.println("User with this email is not exists!");
        }

    }
}
