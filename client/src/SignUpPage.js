import { useState } from 'react';
import './SignUp.css'

function SignUpPage({setEmail}) {
  const [inputName, setInputName] = useState("");
  const [inputSurname, setInputSurname] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function SignUpFunc(){
    if(password!=confirmPassword){
      setErrorMessage("Password and Confirm Password are not match. Try Again");
      return;
    }
  }

  return (
    <div className="LogPage">
      <h2>SignUp</h2>
      {errorMessage && <p>{errorMessage}</p>}
      <input type="name" onChange={(e) => setInputName(e.target.value)} placeholder="Name" />
      <input type="surname" onChange={(e) => setInputSurname(e.target.value)} placeholder="Surname" />
      <input type="email" onChange={(e) => setInputEmail(e.target.value)} placeholder="Email" />
      <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <input type="password" onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" />
      <button className="Submit-Buttons" onClick={SignUpFunc}>SignUp</button>
    </div>
  );
}

export default SignUpPage;
