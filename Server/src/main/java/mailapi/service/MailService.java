package mailapi.service;

import mailapi.dto.MailDataDTO;
import mailapi.dto.UserDataDTO;
import mailapi.entity.MailData;
import mailapi.entity.UserData;
import mailapi.repository.MailRepository;
import mailapi.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class MailService {
    @Autowired
    UserRepository userRepository;
    @Autowired
    MailRepository mailRepository;

    public boolean isAnyUserWithThisEmail(String email) {
        return userRepository.isAnyEmail(email);
    }
    public boolean saveUser(UserDataDTO userDataDTO){
        if(!userRepository.isAnyEmail(userDataDTO.getDtoEmail())){
            Date date = new Date();
            UserData userData = new UserData(userDataDTO.getDtoUserName(),userDataDTO.getDtoUserSurname(),userDataDTO.getDtoEmail(),userDataDTO.getDtoPassword(), date.toString());
            userRepository.save(userData);

            System.out.println("User saved!");
            return true;
        }else{
            System.out.println("User with this email already exists!");
            return false;
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

    public String getUserWithEmail(String email){
        UserData tempUserData =  userRepository.findByuserEmail(email);
        return (tempUserData.getUserName());
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

    public List<MailDataDTO> getAllMailsFromThisUserMail(String email){
        List<MailData> tempMailData = mailRepository.findAllByReceiverUserMailAdressOrderByMailSendDateDesc(email);
        List<MailDataDTO> mailDataDTOList = new ArrayList<>();
        for(MailData mailData : tempMailData){
            mailDataDTOList.add(new MailDataDTO(mailData.getSenderUserMailAdress(),mailData.getReceiverUserMailAdress(),mailData.getMailSendDate(),mailData.getMailDataHeader(),mailData.getMailDataTopic(),mailData.getMailDataDescription()));
        }
        return mailDataDTOList;
    }

}
