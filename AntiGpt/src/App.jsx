import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "../src/pages/Home";
import Works from "../src/pages/Product";
import Contact from "../src/pages/Contact";
import About from "../src/pages/About";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element ={<Home/>}/>
        <Route path="/Works" element ={<Works/>}/>
        <Route path="/Contact" element ={<Contact/>}/>
        <Route path="/About" element ={<About/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
  )
};

export default App;
