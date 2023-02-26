import React from "react";
import Homepage from "./Component/Homepage";
import PostNumber from "./Component/PostNumber";
import {Routes, Route} from 'react-router-dom';
import './App.css';


function App() {
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/postnumber" element={<PostNumber/>}/>
      </Routes>
    </div>

  );
}  

export default App;
