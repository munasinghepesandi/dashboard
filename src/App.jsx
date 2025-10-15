import React from "react";
import Nav from "./components/Nav";
import "./App.css";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import Class from "./components/Class";



function App() {
 return(
  <div>
    <Header/>
    <div className="w-full flex">
      <div className="w-1/5"><Nav/></div>
      <div className="w-4/5"><Dashboard/><Class/></div>
    </div>
    
    <Footer/>
    
  </div>
  
  
 )
  
}

export default App;
