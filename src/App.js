import React from "react";
import Routes from "./routes/Routes";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <main className="main">
        <Routes />
      </main>
    </div>
  );
}

export default App;
