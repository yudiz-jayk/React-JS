import React, { useState } from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

 

function App() {

  const [theme, setTheme] = useState(true)

  function onclick() {
     
     setTheme(theme => !theme)
  }
  
  return (
    <div className="App">
    <Header onClick = {onclick} isDarkMode = {theme}/>
    <Content isDarkMode = {theme} />
    <Footer/>
 
     
  </div>
  )
}

export default App;
