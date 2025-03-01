import "./NewMail.css";

function NewMail({setNewMessage}) {

return (
    <div className="NewMail">
        <div className="New-Mail-Part">
            <div className="Top-Line">
                <input className="New-Mail-Header" placeholder="Header"/>
                <button className="Exit-Button" onClick={()=>setNewMessage(false)}>X</button>      
            </div>
            <input className="New-Mail-Receiver-Mail-Adress" placeholder="Email Adress"/>
            <input className="New-Mail-Topic" placeholder="Topic"/>
            <textarea className="New-Mail-Text" placeholder="write here..."/>
            <button className="Mail-Send-Button">Send</button>
        </div> 
    </div>
    );
}

export default NewMail;
