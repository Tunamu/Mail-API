import "./NewMail.css";

function NewMail({setNewMessage}) {

return (
    <div className="NewMail">
        <div className="New-Mail-Part">
            Hello
            <button onClick={()=>setNewMessage(false)}>X</button>      
        </div> 
    </div>
    );
}

export default NewMail;
