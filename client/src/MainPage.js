import MailListPropt from "./MailListPropt";
import "./MainPage.css";

function MainPage( { setEmail ,userName ,setUserName} ) {

    function handleLogout() {
        localStorage.removeItem("email");
        setEmail(""); 
        localStorage.removeItem("name");
        setUserName("");
    }

    return (
        <div className="MainPage">
            <div className="Main-Top-Part">
                <h2>Welcome {userName}!</h2>
                <button onClick={handleLogout} className="Log-Out-Button">Logout</button>
            </div>
            <div className="Main-Table-Section">
                <div className="Table-Header">
                    <h2>My Mail</h2>
                    <button className="New-Mail-Button">+ New Mail</button>
                </div>
                <div className="Mails-Section">
                    <MailListPropt/>
                    <MailListPropt/>
                    <MailListPropt/>
                    <MailListPropt/>
                    <MailListPropt/>
                    <MailListPropt/>
                    <MailListPropt/>
                    <MailListPropt/>
                    <MailListPropt/>
                    <MailListPropt/>
                    <MailListPropt/>
                    <MailListPropt/>
                </div>
            </div>
        </div>
    );
}

export default MainPage;
