import {useState} from 'react';
import "./NewMail.css";

function NewMail({setNewMessage, mailSenderAdress}) {

    const[sendNewMailHeader,setSendNewMailHeader] = useState("");
    const[sendNewMailReceiverAdress ,setSendNewMailReceiverAdress] = useState("");
    const[sendNewMailTopic ,setSendNewMailTopic] = useState("");
    const[sendNewMailText ,setSendNewMailText] = useState("");

    function sendNewMail(){
        if(!sendNewMailHeader){
            console.log("Must need header");
            return;
        }
        if(!sendNewMailReceiverAdress){
            console.log("Must need e mail adress");
            return;
        }

        const requestOptionsForMailTester = {
            method: "GET",
            redirect: "follow"
        };
        
        fetch(`http://localhost:8080/custom-mail-api/is-any-user-with-this-email?email=${sendNewMailReceiverAdress}`, requestOptionsForMailTester)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                if (data === false) {
                    console.log("Must need a valid email adress");
                    return;
                } 
            })
            .catch((error) => {
                console.error("Server error:", error);
            });

        const requestOptionForSendMail = {
            method: "POST",
            redirect: "follow"
        };

        console.log("Valid mail propts!!!!!!");
        setNewMessage(false);
        
        //fetch(`http://localhost:8080/custom-mail-api/send-mail?senderMailAdress=${mailSenderAdress}&receiverMailAdress=${sendNewMailReceiverAdress}&mailHeader=${sendNewMailHeader}&mailTopic=${sendNewMailTopic}}&mailDescription=${sendNewMailText}`, requestOptionsForSendMail)
        //    .then((response) => response.text())
        //    .then((result) => console.log(result))
        //    .catch((error) => console.error(error));

        //burada ekran kapanacak ve gönderildi diyem mesaj düşecek

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
            <button className="Mail-Send-Button" onClick={sendNewMail}>Send</button>
        </div> 
    </div>
    );
}

export default NewMail;
