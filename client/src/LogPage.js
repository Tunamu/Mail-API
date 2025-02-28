import {useState } from "react";
import "./LogPage.css";
import LogInPage from "./LogInPage";
import SignUpPage from "./SignUpPage";

function LogPage({ setEmail }) {
    const [isSignIn, setIsSignIn] = useState(false);

    return (
    <div className="LogPage">
        <button className="switchButton" onClick={() => setIsSignIn(!isSignIn)}>
            <div className={`active-part ${isSignIn ? "move-right" : "move-left"}`}></div>
            <p className="login-btn">Login</p>
            <p className="signup-btn">SignUp</p>
        </button>
        {isSignIn ? <SignUpPage setEmail={setEmail} /> : <LogInPage setEmail={setEmail} />}
    </div>
    );

}

export default LogPage;
