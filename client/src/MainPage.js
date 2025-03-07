import { useEffect, useState } from "react";
import MailListPropt from "./MailListPropt";
import "./MainPage.css";
import NewMail from "./NewMail";

function MainPage( { email ,setEmail ,userName ,setUserName} ) {

    const[mailList,setMailList] = useState([]);
    const[isMyMails , setIsMyMails] = useState(false);
    const[newMessage , setNewMessage] = useState(false);
    const[infoMessage,setInfoMessage] = useState(""); 
    const [isInfoMessageVisible, setIsInfoMessageVisible] = useState(false);

    function handleLogout() {
        localStorage.removeItem("email");
        setEmail(""); 
        localStorage.removeItem("name");
        setUserName("");
    }

    function reloadMails(){

        const requestOptions = {
            method: "GET",
            redirect: "follow",
        };

        const url = isMyMails
            ? `http://localhost:8080/custom-mail-api/get-all-sending-mails?email=${email}`
            : `http://localhost:8080/custom-mail-api/get-all-receiving-mails?email=${email}`;

        fetch(url, requestOptions)
            .then((response) => response.json())
            .then((result) => setMailList(result))
            .catch((error) => console.error(error));
        
        styleAdder();
    }

    function styleAdder(){
        //for deleting all the active styles in the page
        const activeTexts = document.getElementsByClassName("Active-Text-In-Main-Page");
        Array.from(activeTexts).forEach((item)=>{
            item.classList.remove("Active-Text-In-Main-Page")
        })

        const activeText = isMyMails ? document.getElementById("Sending") : document.getElementById("Receiving");
        activeText.classList.add("Active-Text-In-Main-Page");
    }

    useEffect(()=>{
        reloadMails();

        const interval = setInterval(() => {
            reloadMails();
        }, 15000);

        return () => clearInterval(interval); // Clear interval on component unmount
    }, [isMyMails]); // This will trigger the effect whenever 'isMyMails' changes

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

        useEffect(() => {
            if (infoMessage) {
                setIsInfoMessageVisible(true); 
    
                const timeout = setTimeout(() => {
                    setIsInfoMessageVisible(false); 
    
                    setTimeout(() => {
                        setInfoMessage(""); 
                    }, 500); 
                }, 2500);
    
                return () => clearTimeout(timeout);
            }
        }, [infoMessage]);

    return (
        <div className="MainPage">
            {newMessage?<NewMail setNewMessage={setNewMessage} mailSenderAdress={email} setInfoMessage={setInfoMessage}/>:<p style={{display:"none"}}></p>}
            {infoMessage && (
                <div className={`Info-Message ${isInfoMessageVisible ? "show" : "hide"}`}>{infoMessage}</div>
            )}
            <div className="Main-Top-Part">
                <h2>Welcome {userName}!</h2>
                <button onClick={handleLogout} className="Log-Out-Button">Logout</button>
            </div>
            <div className="Main-Table-Section">
                <div className="Table-Header">
                    <button id="Receiving" className="Text-Buttons" onClick={()=>setIsMyMails(false)}>My Mail</button>
                    <button id="Sending" className="Text-Buttons" onClick={()=>setIsMyMails(true)}>Sended</button>
                    <button className="New-Mail-Button" onClick={()=>setNewMessage(true)}>+ New Mail</button>
                    <button onClick={reloadMails} className="Reload-Button">Reload Mails</button>
                </div>
                <div className="Mails-Section">
                    {mailList.length==[0]?<p className="No-Mail-Section">No Mail Yet.</p>:<p style={{display:"none"}}></p>}
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
