// import logo from './logo.svg';
import './App.css';
import React, { useState } from "react"
import Alert from './components/Alert.js'
import About from './components/About';
import Navbar from './components/Navbar.js'
import TextForm from './components/TextForm.js'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Switch
} from 'react-router-dom';


function App() {


  const [mode, setMode] = useState('light')

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#212520';
      document.getElementById('nav').style.borderBottom = '1px solid white'
      showAlert('Dark Mode has been enabled...', 'success')

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.getElementById('nav').style.borderBottom = '1px solid #212520';
      showAlert('Light Mode has been enabled...', 'success')

    }
  }
  /*--------------------------------------------------------------------*/
  const [theme, setTheme] = useState('default')

  const showtheme = (theme) => {
    if (theme === 'Primary') {
      setTheme('primary');
      document.body.style.backgroundColor = '#0d6efd';
    }
    else if (theme === 'Success') {
      setTheme('Success');
      document.body.style.backgroundColor = '#0d6efd';
    }
    else if (theme === 'Energetic') {
      setTheme('Danger');
      document.body.style.backgroundColor = '#0d6efd';
    }
    else if (theme === 'Default') {
      setTheme('Default');
      document.body.style.backgroundColor = '#212520';
      document.getElementById('nav').style.borderBottom = '1px solid white'
      showAlert('Dark Mode has been enabled...', 'success')
    }
  }
  /*--------------------------------------------------------------------*/
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);

  }
  /*-------------------------------------------------------------------*/
  return (
    <>
      <Router>
        <div className="container-fluid mx-0 px-0 py-0 my-0">
          <Navbar title="TextUtils" home='Home' about="About Us" contact="Contact Us" mode={mode} toggleMode={toggleMode} theme={theme} showtheme={showtheme} />
          <Alert alert={alert} />
          <h3 className="text-center mt-1 alert alert-warning py-2 mt-3 mx-3">Welcome To TextUtils</h3>
          <Routes>
            <Route path='/' element={<TextForm showAlert={showAlert} showtheme={showtheme} theme={theme} heading='Enter the text to analyze below' mode={mode} />}></Route>
            <Route path='/about' element={<About mode={mode} />}></Route>

          </Routes>

        </div>
      </Router>
    </>
  );
}

export default App;
