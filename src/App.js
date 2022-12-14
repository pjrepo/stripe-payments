import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Hero from "./Hero";
import Submenu from "./Submenu";

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Sidebar />
      <Hero />
      <Submenu />
    </React.Fragment>
  );
};

export default App;
