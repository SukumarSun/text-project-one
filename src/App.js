import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Textutils from "./components/Textutils";
import Alert from "./components/Alert";
import About from "./components/About"
import {Routes, Route, BrowserRouter} from "react-router-dom"

function App() {
  
  const [mystyle, setMyStyle] = useState({
    color: "white",
    backgroundColor: "grey",
  });
  const [mode, setMode] = useState("light");

  const [alert, setAlert]=useState(null)

  const [redmode,setRedmode]=useState("off")


  const changeRed=()=>{
    if(redmode==="on"){
      setRedmode("off")
      setMyStyle({
        color: "white",
        backgroundColor: "grey",
      });
      showAlert("Red mode is off","success")
      document.title="Dark mode"
    }
  
    else{
      setRedmode("on")
      setMyStyle({
        color: "yellow",
        backgroundColor: '#e05a5a',
      });
      showAlert("Red mode on","success")
      document.title="Redmode"
    }
  }

  const showAlert=(msg,type)=>{
      setAlert({
        msg,type
      })
      setTimeout(()=>{
        setAlert(null)
      },2000)
  } 

  const toggle=()=>{
      if(mode==="light"){
        setMode("dark")
        setMyStyle({
          color: "black",
          backgroundColor: "white",
        });
        showAlert("Dark mode on","success")
        document.title= "LightMode"
      }
      else{
        setMode("light")
        setMyStyle({ 
          color: "white", 
          backgroundColor: "grey" 
        });
        showAlert("Light mode on","success")
        document.title="DarkMode"
       
      }
  }

  return (
    <div style={mystyle}>
      <BrowserRouter>
        <Navbar toggle={toggle} mode={mode} redmode={redmode} changeRed={changeRed}/>
        <Alert alert={alert} />
        <Routes>
          <Route exact index element={<Textutils  showAlert={showAlert} redmode={redmode}/>} /> 
          <Route exact path="/about" element={<About />} />
        </Routes>
       
       
      </BrowserRouter>
      
    </div>
  );
}

export default App;
