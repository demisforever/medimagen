import logoMed from './med.svg';
import './App.css';

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
    <div className="App">
      <header className="App-header" >
        <img src={logoMed} className="App-logo" alt="logo" />

        <div className="metText">med</div>

        <div className="imagenText">imagen</div>
      </header>
      <div className="about">about</div>
    </div>
  );
}

export default App;
