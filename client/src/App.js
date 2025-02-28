import { useEffect, useState } from "react";
import "./App.css";
import LogPage from "./LogPage";
import MainPage from "./MainPage";

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
      {email ? <MainPage setEmail={setEmail} /> : <LogPage setEmail={setEmail} />}
    </div>
  );
}

export default App;

