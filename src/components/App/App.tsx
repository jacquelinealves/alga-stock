import logo from "./logo.svg";
import "./App.css";
import TestComponent from "../TestComponent";
// import ClassComponent from "../ClassComponents";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TestComponent name="Jac" />
        {/* <ClassComponent name="Jacque" /> */}

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
