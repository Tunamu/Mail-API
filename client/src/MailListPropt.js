import { useState } from "react";
import "./MailListPropt.css";
import MailFullScreen from "./MailFullScreen";

function MailListPropt({MailHeader, MailTopic,MailFrom,MailText, MailDate, isMyMails,MailTo}) {
    const[biggerMail,setBiggerMail] = useState(false);

    
    const fromOrToField = (!isMyMails)?<p className="Mail-From">- From: {MailFrom}</p>:<p className="Mail-From">- To: {MailTo}</p>

    function biggerMailRenderer(){
        setBiggerMail(true);
    }

    return (
        <div>
            {biggerMail?<MailFullScreen setBiggerMail={setBiggerMail} biggerMailHeader={MailHeader} biggerMailAdress={fromOrToField} biggerMailDate={MailDate} biggerMailTopic={MailTopic} biggerMailText={MailText}/>:<p style={{display:"none"}}></p>}
            <button className="MailListPropt" onClick={biggerMailRenderer}>
                <div className="Header-And-Else">
                    <p className="Mail-Name">{MailHeader}</p>
                    <div className="Topic-And-From">
                        <p className="Mail-Topic">{MailTopic}</p>
                        <p className="Mail-From">{fromOrToField}</p>
                        <p className="Mail-Date"> - At: {MailDate}</p>
                    </div>
                </div>
                <p className="Mail-Text">
                    {MailText}
                </p>
            </button>
        </div>
    );
}

export default MailListPropt;
