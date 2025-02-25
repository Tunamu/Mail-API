import { useState } from "react";
import "./App.css";
import LogInPage from "./LogInPage";
import SignUpPage from "./SignUpPage";

function App() {
  const [isSignIn, setIsSignIn] = useState(false);

  return (
    <div className="App">
      {/* Tek bir buton alanına tıklayınca geçiş yap */}
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

export default App;
