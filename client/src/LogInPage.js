import { useState } from "react";

function LogInPage({ setEmail }) {
  const [inputEmail, setInputEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function handleLogin() {
    if (!inputEmail || !password) {
      setErrorMessage("Lütfen email ve şifre girin.");
      return;
    }

    // API isteğini oluştur
    fetch(`http://localhost:8080/custom-mail-api/login-auth?email=${inputEmail}&password=${password}`)
      .then((response) => response.json()) // JSON olarak yanıtı işle
      .then((data) => {
        if (data === true) {
          localStorage.setItem("email", inputEmail); // localStorage'a kaydet
          setEmail(inputEmail); // App.js içindeki state'i güncelle
        } else {
          setErrorMessage("Email veya şifre hatalı.");
        }
      })
      .catch((error) => {
        console.error("Login error:", error);
        setErrorMessage("Giriş yapılamadı. Lütfen tekrar deneyin.");
      });
  }

  return (
    <div>
      <h2>Login Page</h2>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <input type="email" onChange={(e) => setInputEmail(e.target.value)} placeholder="Email" />
      <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LogInPage;
