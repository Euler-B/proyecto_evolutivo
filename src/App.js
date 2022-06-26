import logo from './logo.svg';
import './App.css';
import GreetingsF from './components/pure/greetingsF';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <GreetingsF name="Eduardo"></GreetingsF>
      </header>
    </div>
  );
}

export default App;
