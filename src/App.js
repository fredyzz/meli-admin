import Navigation from "./components/Navigation/index.js";

import "./App.css";

function App({ children }) {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation>{children}</Navigation>
      </header>
    </div>
  );
}

export default App;
