import {useEffect, useState} from 'react'
import './App.css';
import LogInPage from './LogInPage';
import SignInPage from './SignInPage';

function App() {
  const[isSignIn,setIsSignIn] = useState(false);
  const[pageLoader,setPageLoader] = useState(<LogInPage/>)

  useEffect(()=>{
    if(isSignIn){
      setPageLoader(<SignInPage/>);
    }else{
      setPageLoader(<LogInPage/>);
    }
  },[isSignIn])
  

  return (
    <div className="App">
      <button onClick={()=>setIsSignIn(!isSignIn)}>Change</button>
      {pageLoader}
    </div>
  );
}

export default App;
