import { useEffect, useState } from "react";
import "./App.css";
import LogPage from "./LogPage";
import MainPage from "./MainPage";

function App() {
  var emailFromUser = localStorage.getItem("email");
  const[isAnyEmail,setIsAnyEmail] = useState(false);

  useEffect(()=>{
    if(emailFromUser!=""){
      setIsAnyEmail(true);
    }
  },[emailFromUser])

  return (
    <div className="App">
        {isAnyEmail? <MainPage/> : <LogPage/>}
    </div>
  );
}

export default App;

