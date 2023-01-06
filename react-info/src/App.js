import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';

function App() {
  
    const [dark , setDark] = React.useState(false);

  return (
    <div className="container">
    <Navbar darkMode={dark} toggleDarkMode={()=>setDark(prev=>!prev)} />
    <Main darkMode={dark}/>
</div>
  );
}

export default App;
