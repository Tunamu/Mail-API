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

    // API isteğini oluştur
    fetch(`http://localhost:8080/custom-mail-api/login-auth?email=${(inputEmail.toLowerCase())}&password=${password}`)
      .then((response) => response.json()) // JSON olarak yanıtı işle
      .then((data) => {
        if (data === true) {
          getUserName(inputEmail);
          localStorage.setItem("email", inputEmail); // localStorage'a kaydet
          setEmail(inputEmail); // App.js içindeki state'i güncelle
        } else {
          setErrorMessage("Email or password is wrong!");
        }
      })
      .catch((error) => {
        console.error("Login error:", error);
        setErrorMessage("Server error. Please contact admin.");
      });
  }

  function getUserName({email}){
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };
      
    fetch(`http://localhost:8080/custom-mail-api/get-user-name?email=${email}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        localStorage.setItem("name",result);
        setUserName(result);
      })
      .catch((error) => console.error(error));
  }

  return (
    <div className="LogPage">
      <h2>Login</h2>
      {errorMessage && <p>{errorMessage}</p>}
      <input type="email" onChange={(e) => setInputEmail(e.target.value)} placeholder="Email" />
      <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button className="Submit-Buttons" onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LogInPage;
