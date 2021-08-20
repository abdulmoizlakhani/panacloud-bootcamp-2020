import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hi! It's Abdul Moiz Lakhani</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          It's a React App deployed on Surge using GitHub Actions :)
        </a>
      </header>
    </div>
  );
}

export default App;
