import "./MailFullScreen.css";
import "./NewMail.css"

function MailFullScreen({setBiggerMail, biggerMailHeader,biggerMailAdress,biggerMailDate,biggerMailTopic,biggerMailText}) {

    return (
        <div className="NewMail MailFullScreen">
            <div className="Bigger-Mail-Part">
                <div className="Top-Line">
                    <div className="New-Mail-Header Bigger-Mail-Header">{biggerMailHeader}</div>
                <button className="Exit-Button" onClick={()=>setBiggerMail(false)}>X</button>      
                </div>
                <div className="Bigger-Mail-Alt-Propt">{biggerMailAdress}</div>
                <div className="Bigger-Mail-Alt-Propt">- Date: {biggerMailDate}</div>
                <div className="Bigger-Mail-Topic">- Topic: {biggerMailTopic}</div>
                <div className="Bigger-Mail-Text" >{biggerMailText}</div>
            </div>
        </div>
        );
}

export default MailFullScreen;
