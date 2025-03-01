import "./MailListPropt.css";

function MailListPropt({MailHeader, MailTopic,MailFrom,MailText, MailDate, isMyMails,MailTo}) {
    const fromOrToField = (!isMyMails)?<p className="Mail-From">- From: {MailFrom}</p>:<p className="Mail-From">- To: {MailTo}</p>

    return (
        <button className="MailListPropt">
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
    );
}

export default MailListPropt;
