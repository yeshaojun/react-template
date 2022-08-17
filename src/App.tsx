import React from "react";
import logo from "./logo.svg";
import { ErrorBoundary } from "react-error-boundary"
import { FullPageErrorFallback } from "./components/lib"
import { Button } from "antd"

function App() {
  return (
    <ErrorBoundary fallbackRender={FullPageErrorFallback} onReset={() => {
      
    }}>
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button type="primary">test</Button>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
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
    </ErrorBoundary>

  );
}

export default App;
