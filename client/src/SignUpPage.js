import { useState } from 'react';
import './SignUp.css'

function SignUpPage({setEmail ,setUserName}) {
  const [inputName, setInputName] = useState("");
  const [inputSurname, setInputSurname] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function SignUpFunc(){
    let IsAnyOther = false;

    if (!inputName ||  !inputSurname || !inputEmail || !password || !confirmPassword) {
      setErrorMessage("One of the field or fields are empty.");
      return;
    }

    if(inputEmail.includes("@")){
      setErrorMessage("Email can not have @ symbol!");
      return;
    }

    if(password!=confirmPassword){
      setErrorMessage("Password and Confirm Password are not match. Try Again");
      return;
    }

    const hasNumber = /\d/;  // regex for checing numbers
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;  // regex for checing special characters

    if(password.length<8 || password.length>50){
      setErrorMessage("Password lenght must be between 8 and 50 characters.");
      return;
    } 
    if(!hasNumber.test(password)){
      setErrorMessage("Password must have least 1 number.");
      return;
    } 
    if(!hasSpecialChar.test(password)){
      setErrorMessage("Password must not have special character.");
      return;
    }

    const fullEmail = inputEmail.toLowerCase()+'@yippee.com';

    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };

    console.log(fullEmail);
    
    fetch(`http://localhost:8080/custom-mail-api/is-any-user-with-this-email?email=${fullEmail}`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data === true) {
          setErrorMessage("Email is already in use.");
          IsAnyOther = true;
        } 
      })
      .catch((error) => {
        console.error("Login error:", error);
        setErrorMessage("Server error 1. Please contact admin.");
      });

      if(!IsAnyOther){
        const requestOptions = {
          method: "POST",
          redirect: "follow"
        };
        
        fetch(`http://localhost:8080/custom-mail-api/save-user?name=${inputName}&surname=${inputSurname}&email=${fullEmail}&password=${password}`, requestOptions)
          .then((response) => response.json())
          .then((data)=>{
            if(data===true){
              localStorage.setItem("email", fullEmail); 
              setEmail(fullEmail);    
              localStorage.setItem("name", inputName);
              setUserName(inputName);
            }
          })
          .catch((error) => {
            console.error("Login error:", error);
            setErrorMessage("Server error 2. Please contact admin.");
          });
          
      }

  }

  const signupTriggerFunc = (event) => {
    if (event.key === 'Enter') {
      SignUpFunc();
    }
  };

  return (
    <div className="LogPage">
      <h2>SignUp</h2>
      {errorMessage && <p>{errorMessage}</p>}
      <input type="name" onChange={(e) => setInputName(e.target.value)} placeholder="Name" onKeyDown={signupTriggerFunc}/>
      <input type="surname" onChange={(e) => setInputSurname(e.target.value)} placeholder="Surname" onKeyDown={signupTriggerFunc}/>
      <div className='Email-Create-Part'>
        <input type="email" onChange={(e) => setInputEmail(e.target.value)} placeholder="Email" className='Sign-Email' onKeyDown={signupTriggerFunc}/>
        <p className='Email-Completer'>@yippee.com</p>
      </div>
      <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password"onKeyDown={signupTriggerFunc} />
      <input type="password" onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" onKeyDown={signupTriggerFunc}/>
      <button className="Submit-Buttons" onClick={SignUpFunc}>SignUp</button>
    </div>
  );
}

export default SignUpPage;
