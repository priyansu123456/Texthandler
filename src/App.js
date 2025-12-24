import "./App.css";
import {useState } from "react";
// import About from "./pages/About";
import Nav from "./pages/Nav";
import TextForm from "./pages/TextForm";
import Alert from "./pages/alert";




function App(){
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(() =>{
    setAlert (null);
    
  }, 3000);

  }
  
  const toggleMode=()=>{
    if(mode==='light'){
      setMode ('dark');
      document.body.style.backgroundColor='#0f1011ff';
      showAlert("Dark mode has been enabled","Success");
    }
      else{
        setMode ('light');
        document.body.style.backgroundColor='#c7d7e3ff';
        showAlert("Dark mode has been disabled","Success");
      }
  }
  
      return (
      <>
      <Nav title="TEXTHANDLER" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">
      <Alert alert={alert}/>

      <TextForm heading={"Tell me about your experience"} mode={mode}/>
      {/* <About/> */}
      </div>
    </>
  );
}

export default App;
