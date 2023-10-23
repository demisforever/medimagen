import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logoRotorBlue from './assets/rotor-blue.svg';
import logoMedImagen from './assets/medImagen-grey.svg';
import Navbar from "./Components/Navbar/Navbar";
import Header from './container/Header/Header';
import Chef from './container/Chef/Chef';
import FindUs from './container/Findus/FindUs';
import Footer from './Components/Footer/Footer';
import './App.css';



//https://reactjsexample.com/a-fully-responsive-beautiful-and-simple-lending-for-restaurant/

function App() {

  // eventListener to rotate logo on scroll
  window.addEventListener(
    "scroll",
    () => {
      document.body.style.setProperty(
        "--scroll",
        window.scrollY / (document.body.offsetHeight - window.innerHeight)
      );
    },
    false
  );

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Header />
        {/*
        <h4>CENTRO DE TOMOGRAFÍA AXIAL COMPUTADA</h4>
        <header className="App-header">
          
          <img src={logoRotorBlue} className="App-logo" alt="logo" />
          <img src={logoMedImagen} className="med-imagen-logo" alt="logo" />
        </header>
*/}
        <Chef />
        <FindUs/>
        <Footer />
      </div>
    </Router>
  );

}

export default App;
