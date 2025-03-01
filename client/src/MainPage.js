import { useEffect, useState } from "react";
import MailListPropt from "./MailListPropt";
import "./MainPage.css";

function MainPage( { email ,setEmail ,userName ,setUserName} ) {

    const[mailList,setMailList] = useState([]);
    const[isMyMails , setIsMyMails] = useState(false);

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

        if(!isMyMails){
            
            fetch(`http://localhost:8080/custom-mail-api/get-all-receiving-mails?email=${email}`, requestOptions)
                .then((response) => response.json())
                .then((result) => setMailList(result))
                .catch((error) => console.error(error));

        }else{

            fetch("http://localhost:8080/custom-mail-api/get-all-sending-mails?email=tunamus@yippee.com", requestOptions)
                .then((response) => response.json())
                .then((result) => setMailList(result))
                .catch((error) => console.error(error));
        }

        styleAdder();
    }

    function styleAdder(){
        //for deleting all the active styles in the page
        const activeTexts = document.getElementsByClassName("Active-Text-In-Main-Page");
        Array.from(activeTexts).forEach((item)=>{
            item.classList.remove("Active-Text-In-Main-Page")
        })

        if(!isMyMails){
            const receivingText = document.getElementById("Receiving");
            receivingText.classList.add("Active-Text-In-Main-Page");
        }else{
            const sendingText = document.getElementById("Sending");
            sendingText.classList.add("Active-Text-In-Main-Page")
        }
    }

    useEffect(()=>{
        reloadMails();

        // setInterval ile her 30 saniyede bir API çağrısı yap
        const interval = setInterval(reloadMails, 15000);

        // Component unmount olduğunda interval'ı temizle
        return () => clearInterval(interval);

    },[])

    useEffect(()=>{
        reloadMails();
    },[isMyMails])

    const formatDate = (unformattedDate) => {

        const dateObj = new Date(unformattedDate.replace("CET", "GMT"));
    
        if (isNaN(dateObj.getTime())) return "Invalid Date"; 
    
        const options = { weekday: "short", month: "short", day: "2-digit" };
        const formattedDate = dateObj.toLocaleDateString("en-US", options);
        const formattedTime = dateObj.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
        });
    
        return `${formattedTime} - ${formattedDate}`;
    };

    return (
        <div className="MainPage">
            <div className="Main-Top-Part">
                <h2>Welcome {userName}!</h2>
                <button onClick={handleLogout} className="Log-Out-Button">Logout</button>
            </div>
            <div className="Main-Table-Section">
                <div className="Table-Header">
                    <button id="Receiving" className="Text-Buttons" onClick={()=>setIsMyMails(false)}>My Mail</button>
                    <button id="Sending" className="Text-Buttons" onClick={()=>setIsMyMails(true)}>Sended</button>
                    <button className="New-Mail-Button">+ New Mail</button>
                    <button onClick={reloadMails} className="Reload-Button">Reload Mails</button>
                </div>
                <div className="Mails-Section">
                    {mailList.map((mail)=>(
                        <MailListPropt 
                        isMyMails= {isMyMails}
                        MailHeader={mail.dtomailHeader} 
                        MailTopic={mail.dtomailTopic} 
                        MailFrom={mail.dtomailFrom} 
                        MailTo= {mail.dtomailTo}
                        MailDate = {formatDate(mail.dtomailDate)}
                        MailText={mail.dtomailDescription}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MainPage;
