import React from "react";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/About";
import Projects from "./components/Projects";
import "./App.css";

function App() {
  return (
    <main>
      <Header />
      <About />
      <Projects />
    </main>
  );
}

export default App;
