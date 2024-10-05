import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Home } from "./sections/home";
import { Services } from "./sections/services";
import { Numbers } from "./sections/Numbers";
import { Clientreview } from "./sections/Clientreview";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";

function App() {
  return (
    <>
      <Home></Home>
      <Services></Services>
      <Numbers></Numbers>
      <Clientreview></Clientreview>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
