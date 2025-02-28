import "./MailListPropt.css";

function MailListPropt({MailHeader, MailTopic,MailFrom,MailText}) {

    return (
        <button className="MailListPropt">
            <div className="Header-And-Else">
                <p className="Mail-Name">{MailHeader}</p>
                <div className="Topic-And-From">
                    <p className="Mail-Topic">{MailTopic}</p>
                    <p className="Mail-From">- From: {MailFrom}</p>
                </div>
            </div>
            <p className="Mail-Text">
                {MailText}
            </p>
        </button>
    );
}

export default MailListPropt;
