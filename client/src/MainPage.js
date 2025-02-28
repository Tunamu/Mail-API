import { useEffect, useState } from "react";
import MailListPropt from "./MailListPropt";
import "./MainPage.css";

function MainPage( { email ,setEmail ,userName ,setUserName} ) {

    const[mailList,setMailList] = useState([]);

    function handleLogout() {
        localStorage.removeItem("email");
        setEmail(""); 
        localStorage.removeItem("name");
        setUserName("");
    }

    function reloadMails(){
        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };
        
        fetch(`http://localhost:8080/custom-mail-api/get-all-mails?email=${email}`, requestOptions)
            .then((response) => response.json())
            .then((result) => setMailList(result))
            .catch((error) => console.error(error));
    }

    useEffect(()=>{
        reloadMails();
    },[])

    return (
        <div className="MainPage">
            <div className="Main-Top-Part">
                <h2>Welcome {userName}!</h2>
                <button onClick={handleLogout} className="Log-Out-Button">Logout</button>
            </div>
            <div className="Main-Table-Section">
                <div className="Table-Header">
                    <h2>My Mail</h2>
                    <button className="New-Mail-Button">+ New Mail</button>
                    <button onClick={reloadMails} className="Reload-Button">Reload Mails</button>
                </div>
                <div className="Mails-Section">
                    {mailList.map((mail)=>(
                        <MailListPropt 
                        MailHeader={mail.dtomailHeader} 
                        MailTopic={mail.dtomailTopic} 
                        MailFrom={mail.dtomailFrom} 
                        MailText={mail.dtomailDescription}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MainPage;
