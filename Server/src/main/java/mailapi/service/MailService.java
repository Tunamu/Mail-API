package mailapi.service;

import mailapi.dto.MailDataDTO;
import mailapi.dto.UserDataDTO;
import mailapi.entity.MailData;
import mailapi.entity.UserData;
import mailapi.repository.MailRepository;
import mailapi.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class MailService {
    @Autowired
    UserRepository userRepository;
    @Autowired
    MailRepository mailRepository;

    public boolean isAnyUserWithThisEmail(String email) {
        return userRepository.isAnyEmail(email);
    }
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
    public boolean loginAuthenticator(UserDataDTO userDataDTO){
        if(userRepository.userAuthenticated(userDataDTO.getDtoEmail(), userDataDTO.getDtoPassword())){
            System.out.println("User authenticated!");
            return true;
        }else{
            System.out.println("User NOT authenticated!");
        }
        return false;

    }

    public void sendNewMail(MailDataDTO mailDataDTO){
        if(userRepository.isAnyEmail(mailDataDTO.getDTOMailFrom())&& userRepository.isAnyEmail(mailDataDTO.getDTOMailTo())){
            Date date = new Date();
            MailData mailData = new MailData(mailDataDTO.getDTOMailFrom(),mailDataDTO.getDTOMailTo(),date.toString(),mailDataDTO.getDTOMailHeader(),mailDataDTO.getDTOMailTopic(),mailDataDTO.getDTOMailDescription());
            mailRepository.save(mailData);

            System.out.println("New mail sent!");
        }else{
            System.out.println("Error! Incorrect sender or receiver adress!");
        }
    }

}
