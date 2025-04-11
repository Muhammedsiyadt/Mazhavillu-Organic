import React from "react";
import "./App.css";
import Header from './views/Nav/Header'

import Router from "./routes";

function App() {
  return (
      <>
    <React.Suspense>
      <Header/>
      <Router />
    </React.Suspense>
    </>
    
  );
}

export default App;
