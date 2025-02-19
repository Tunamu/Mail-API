package mailapi.service;

import mailapi.dto.UserDataDTO;
import mailapi.entity.UserData;
import mailapi.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class MailService {
    @Autowired
    UserRepository userRepository;

    public void saveUser(UserDataDTO userDataDTO){
        if(!userRepository.isAnyEmail(userDataDTO.getDtoEmail())){
            Date date = new Date();
            UserData userData = new UserData(userDataDTO.getDtoUserName(),userDataDTO.getDtoUserSurname(),userDataDTO.getDtoEmail(),userDataDTO.getDtoPassword(), date.toString());
            userRepository.save(userData);

            System.out.println("User saved!");
        }else{
            System.out.println("User with this email already exists!");
        }
    }

    //burası boolean olacak normalde
    public void loginAuthenticator(UserDataDTO userDataDTO){
        if(userRepository.userAuthenticated(userDataDTO.getDtoEmail(), userDataDTO.getDtoPassword())){
            System.out.println("User authenticated!");
        }else{
            System.out.println("User NOT authenticated!");
        }

    }
}
