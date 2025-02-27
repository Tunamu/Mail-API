import {useEffect, useState} from 'react';

function LogInPage() {
  const[email, setEmail ] = useState("");
  const[password , setPassword] = useState("");
  const[resultValue, setResultValue] = useState(false);
  const [upper , setUpper ] = useState("");


  useEffect(()=>{
    if(resultValue){
      localStorage.setItem("email",email);
    }
  },[resultValue]);

  function loginAuthFunc(email,password){
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };
    
    fetch(`http://localhost:8080/custom-mail-api/login-auth?email=${email}&password=${password}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if(result){
          setUpper("");
        }else{
          setUpper("Email or password is incorrect");
        }
        setResultValue(result);
      })
      .catch((error) => console.error(error));

  }

  return (
    <div className="App">
      <p>{upper}</p>
      LOGIN PAGE
      <input onChange={(element)=>setEmail(element.target.value)} placeholder="E-mail adress"/>
      <input onChange={(element)=> setPassword(element.target.value)} placeholder="Password"/>
      <button onClick={()=>loginAuthFunc(email,password)}>Login</button>
    </div>
  );
}

export default LogInPage;
