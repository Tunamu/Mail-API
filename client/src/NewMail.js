import {useState} from 'react';
import "./NewMail.css";

function NewMail({setNewMessage, mailSenderAdress,setInfoMessage}) {

    const[sendNewMailHeader,setSendNewMailHeader] = useState("");
    const[sendNewMailReceiverAdress ,setSendNewMailReceiverAdress] = useState("");
    const[sendNewMailTopic ,setSendNewMailTopic] = useState("");
    const[sendNewMailText ,setSendNewMailText] = useState("");
    const[sendNewMailErrorMessage, setSendNewMailErrorMessage] = useState("");

    async function sendNewMail(){

        if(!sendNewMailReceiverAdress){
            setSendNewMailErrorMessage("A mail have to receiving e-mail adress!!");
            return;
        }

        if(!sendNewMailHeader){
            setSendNewMailErrorMessage("A mail have to header!!");
            return;
        }

        const requestOptionsForMailTester = {
            method: "GET",
            redirect: "follow"
        };
        
        try {

            const response = await fetch(
                `http://localhost:8080/custom-mail-api/is-any-user-with-this-email?email=${sendNewMailReceiverAdress}`,
                requestOptionsForMailTester
            );
            const data = await response.json();

            if (!data) {
                setInfoMessage("Mail Send!!");
                setNewMessage(false);
                return;
            }
        } catch (error) {
            console.error("Server error:", error);
            return;
        }


        const requestOptionForSendMail = {
            method: "POST",
            redirect: "follow"
        };
        
        try {
            const response = await fetch(
                `http://localhost:8080/custom-mail-api/send-mail?senderMailAdress=${mailSenderAdress}&receiverMailAdress=${sendNewMailReceiverAdress}&mailHeader=${sendNewMailHeader}&mailTopic=${sendNewMailTopic}&mailDescription=${sendNewMailText}`,
                requestOptionForSendMail
            );
            const result = await response.text();
            console.log(result);
        } catch (error) {
            console.error(error);
        }

        setNewMessage(false);
        setInfoMessage("Mail Send!!");

    }

    const sendTriggerFunc = (event) => {
        if (event.key === 'Enter') {
            sendNewMail();
        }
    };

return (
    <div className="NewMail">
        <div className="New-Mail-Part">
            <div className="Top-Line">
                <input className="New-Mail-Header" placeholder="Header" onKeyDown={sendTriggerFunc} onChange={(e)=> setSendNewMailHeader(e.target.value)}/>
                <button className="Exit-Button" onClick={()=>setNewMessage(false)}>X</button>      
            </div>
            <input className="New-Mail-Receiver-Mail-Adress" placeholder="Email Adress" onKeyDown={sendTriggerFunc} onChange={(e)=> setSendNewMailReceiverAdress(e.target.value)}/>
            <input className="New-Mail-Topic" placeholder="Topic" onKeyDown={sendTriggerFunc} onChange={(e)=> setSendNewMailTopic(e.target.value)}/>
            <textarea className="New-Mail-Text" placeholder="write here..." onKeyDown={sendTriggerFunc} onChange={(e)=> setSendNewMailText(e.target.value)}/>
            <p className='Send-Message-Error-Text' style={{display: sendNewMailErrorMessage?"block":"none"}}>{sendNewMailErrorMessage}</p>
            <button className="Mail-Send-Button" onClick={sendNewMail}>Send</button>
        </div> 
    </div>
    );
}

export default NewMail;
