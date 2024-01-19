import React, { useState } from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import DemoUseEffect from './components/useEffectPractice';

 

function App() {

  const [theme, setTheme] = useState(true)

  function onclick() {
     
     setTheme(theme => !theme)
  }
  
  return (
    <div className="App">
    {/* <Header onClick = {onclick} isDarkMode = {theme}/>
    <Content isDarkMode = {theme} />
    <Footer/> */}
    <DemoUseEffect/>
 
     
  </div>
  )
}

export default App;
