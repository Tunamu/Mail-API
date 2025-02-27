import {useState } from "react";
import "./LogPage.css";
import LogInPage from "./LogInPage";
import SignUpPage from "./SignUpPage";

function LogPage() {
    const [isSignIn, setIsSignIn] = useState(false);

    return (
    <div className="LogPage">
        <button className="switchButton" onClick={() => setIsSignIn(!isSignIn)}>
            <div className={`active-part ${isSignIn ? "move-right" : "move-left"}`}></div>
            <p className="login-btn">Login</p>
            <p className="signup-btn">SignUp</p>
        </button>

        {/* Koşullu render ile sayfa değiştir */}
        {isSignIn ? <SignUpPage /> : <LogInPage />}
    </div>     
    );
}

export default LogPage;
