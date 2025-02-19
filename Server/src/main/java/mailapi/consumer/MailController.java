package mailapi.consumer;


import mailapi.dto.UserDataDTO;
import mailapi.service.MailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/custom-mail-api")
public class MailController {
    @Autowired
    MailService mailService;

    @GetMapping("/a")
    public void a(){
        System.out.println("a");
    }

    @PostMapping("/save-user")
    public void saveUser(@RequestParam String name , @RequestParam String surname, @RequestParam String email, @RequestParam String password) {
        UserDataDTO userDataDTO = new UserDataDTO(name,surname,email,password);
        mailService.saveUser(userDataDTO);
    }

    @GetMapping("/login-auth")
    public void loginAuth(@RequestParam String email, @RequestParam String password){
        UserDataDTO userDataDTOForLogin = new UserDataDTO(email, password);
        mailService.loginAuthenticator(userDataDTOForLogin);
    }
}
