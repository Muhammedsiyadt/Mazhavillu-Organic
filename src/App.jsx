import React from "react";
import "./App.css";
import Header from './views/Nav/Header'

import Router from "./routes";
import Home from "./views/home/Home";

function App() {
  return (
    <>
      {/* <React.Suspense>
      <Header/>
      <Router />
    </React.Suspense> */}

      <Header />
      <Home/>
    </>

  );
}

export default App;
