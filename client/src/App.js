import { useEffect, useState } from "react";
import "./App.css";
import LogPage from "./LogPage";
import MainPage from "./MainPage";
import logoImage from './img/logo.png'

function App() {
  const [email, setEmail] = useState(localStorage.getItem("email") || "");

  useEffect(() => {
    const handleStorageChange = () => {
      setEmail(localStorage.getItem("email") || ""); 
    };

    window.addEventListener("storage", handleStorageChange); 

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <div className="App">
      <div className="Top-Part">
        <img src={logoImage} className="Logo-Photo"/>
        <p className="Top-Text">yippee.com - a basic mail application.</p>
      </div>
      {email ? <MainPage setEmail={setEmail} /> : <LogPage setEmail={setEmail} />}
    </div>
  );
}

export default App;

