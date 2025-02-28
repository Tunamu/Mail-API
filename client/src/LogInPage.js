import { useState } from "react";

function LogInPage({ setEmail, setUserName }) {
  const [inputEmail, setInputEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function handleLogin() {
    if (!inputEmail || !password) {
      setErrorMessage("Email or password is empty.");
      return;
    }


    fetch(`http://localhost:8080/custom-mail-api/login-auth?email=${(inputEmail.toLowerCase())}&password=${password}`)
      .then((response) => response.json()) 
      .then((data) => {
        if (data === true) {
          getUserName(inputEmail);
          localStorage.setItem("email", inputEmail); 
          setEmail(inputEmail); 
        } else {
          setErrorMessage("Email or password is wrong!");
        }
      })
      .catch((error) => {
        console.error("Login error:", error);
        setErrorMessage("Server error. Please contact admin.");
      });
  }

  function getUserName(email){
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };
      
    fetch(`http://localhost:8080/custom-mail-api/get-user-name?email=${email}`, requestOptions)
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        localStorage.setItem("name",data);
        setUserName(data);
      })
      .catch((error) => console.error(error));
  }

  const loginTriggerFunc = (event) => {
    if (event.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <div className="LogPage">
      <h2>Login</h2>
      {errorMessage && <p>{errorMessage}</p>}
      <input type="email" onChange={(e) => setInputEmail(e.target.value)} onKeyDown={loginTriggerFunc} placeholder="Email" />
      <input type="password" onChange={(e) => setPassword(e.target.value)} onKeyDown={loginTriggerFunc} placeholder="Password" />
      <button className="Submit-Buttons" onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LogInPage;
