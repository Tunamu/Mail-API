import {useEffect, useState} from 'react'
import './App.css';
import LogInPage from './LogInPage';
import SignUpPage from './SignUpPage';

function App() {
  const[isSignIn,setIsSignIn] = useState(false);
  const[pageLoader,setPageLoader] = useState(<LogInPage/>)

  useEffect(()=>{
    var activePart = document.getElementsByClassName("active-part");
    Array.from(activePart).forEach(Element => {
      Element.classList.remove("active-part");
    })

    if(isSignIn){
      var signupButton = document.getElementsByClassName("signup-btn"); 
      Array.from(signupButton).forEach(Element => {
        Element.classList.add("active-part");
      })
      setPageLoader(<SignUpPage/>);
    }else{
      var loginButton = document.getElementsByClassName("login-btn"); 
      Array.from(loginButton).forEach(Element => {
        Element.classList.add("active-part");
      })
      setPageLoader(<LogInPage/>);
    }
  },[isSignIn])
  

  return (
    <div className="App">
      <button onClick={()=>setIsSignIn(!isSignIn)} className='switchButton'><p className='login-btn active-part'>Login</p><p className='signup-btn'>SignUp</p></button>
      {pageLoader}
    </div>
  );
}

export default App;
