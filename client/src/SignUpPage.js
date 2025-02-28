import { useState } from 'react';
import './SignUp.css'

function SignUpPage({setEmail}) {
  const [inputEmail, setInputEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <div className="LogPage">
      <h2>SignUp</h2>
      {errorMessage && <p>{errorMessage}</p>}
      <input type="name" onChange={(e) => setInputEmail(e.target.value)} placeholder="Name" />
      <input type="surname" onChange={(e) => setInputEmail(e.target.value)} placeholder="Surname" />
      <input type="email" onChange={(e) => setInputEmail(e.target.value)} placeholder="Email" />
      <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Confirm Password" />
      <button className="Submit-Buttons" onClick={""}>SignUp</button>
    </div>
  );
}

export default SignUpPage;
