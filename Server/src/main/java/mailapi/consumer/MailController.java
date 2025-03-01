package mailapi.consumer;


import mailapi.dto.MailDataDTO;
import mailapi.dto.UserDataDTO;
import mailapi.service.MailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/custom-mail-api")
public class MailController {
    @Autowired
    MailService mailService;

    @GetMapping("/is-any-user-with-this-email")
    public boolean isAnyUserWithThisEmail(@RequestParam String email){
        return mailService.isAnyUserWithThisEmail(email);
    }

    @PostMapping("/save-user")
    public boolean saveUser(@RequestParam String name , @RequestParam String surname, @RequestParam String email, @RequestParam String password) {
        UserDataDTO userDataDTO = new UserDataDTO(name,surname,email,password);
        return mailService.saveUser(userDataDTO);
    }

    @GetMapping("/login-auth")
    public boolean loginAuth(@RequestParam String email, @RequestParam String password){
        UserDataDTO userDataDTOForLogin = new UserDataDTO(email, password);
        return mailService.loginAuthenticator(userDataDTOForLogin);
    }

    @GetMapping("/get-user-name")
    public String getUserName(@RequestParam String email){
        return mailService.getUserWithEmail(email);
    }

    @PostMapping("/send-mail")
    public void sendMail(@RequestParam String senderMailAdress, @RequestParam String receiverMailAdress, @RequestParam String mailHeader, @RequestParam String mailTopic , @RequestParam String mailDescription){
        MailDataDTO mailDataDTO = new MailDataDTO(
                senderMailAdress,
                receiverMailAdress,
                mailHeader,
                mailTopic,
                mailDescription
        );
        mailService.sendNewMail(mailDataDTO);
    }

    @GetMapping("/get-all-mails")
    public List<MailDataDTO> getAllMails(@RequestParam String email){
        return mailService.getAllMailsFromThisUserMail(email);
    }
}
