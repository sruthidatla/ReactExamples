import React from 'react';
import './App.css';
import ParentComponent from "./Components/ParentComponent";


function App() {
    console.log("rendering app")
  return (
    <div className="App">
<ParentComponent/>
    </div>
  );
}

export default App;
