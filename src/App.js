import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import "./App.css";
import { HomePage } from "./pages/homepage/HomePage";
import { Blogs } from "./pages/blog/Blogs";
import { Products } from "./pages/products/Products";
import { Services } from "./pages/services/Services";
import { Volunteer } from "./pages/volunteer/Volunteer";
import { Partnership } from "./pages/partnership/Partnership";
import { About } from "./pages/about/About";
import { Footer } from "./components/footer/Footer";
import {GetInvolved} from "./pages/get-involved/GetInvolved";
function App() {
  return (
    <div className="App">
      <Navbar />
    {/* <HomePage/> */}
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/blogs" exact element={<Blogs/> } />
        <Route path="/products" exact element={<Products/> } />
        <Route path="/services" exact element={<Services/> } />
        <Route path="/volunteer" exact element={<Volunteer/> } />
        <Route path="/partnership" exact element={<Partnership/> } />
        <Route path="/about" exact element={<About />} />
        <Route path="/getinvolved" exact element ={<GetInvolved />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
