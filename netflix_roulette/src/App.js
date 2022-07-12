import React from "react";
import { HomePage } from "./pages/Home";
import { MovieProvider } from "./utils/context/provider";

function App() {
  return (
    <div className="App">
      <MovieProvider>
        <HomePage />
      </MovieProvider>
    </div>
  );
}

export default App;
