import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import "./App.css";
import { HomePage } from "./pages/homepage/HomePage";
import { Blogs } from "./pages/blog/Blogs";
import { Projects } from "./pages/project/Projects";
// import { Services } from "./pages/services/Services";
import { Volunteer } from "./pages/volunteer/Volunteer";
import { Partnership } from "./pages/partnership/Partnership";
import { About } from "./pages/about/About";
import { Footer } from "./components/footer/Footer";
import {GetInvolved} from "./pages/get-involved/GetInvolved";
import { Education } from "./pages/what-we-do/education/Education";
import { EarlyChildhood } from "./pages/what-we-do/early-childhood/EarlyChildhood";
import { HealthAndNutrition } from "./pages/what-we-do/health-and-nutrition/HealthAndNutrition";
import { Humanitarian } from "./pages/what-we-do/humanitarian/Humanitarian";
import { Livelihood } from "./pages/what-we-do/livelihood/Livelihood";
import { ChildProtection } from "./pages/what-we-do/child-protection/ChildProtection";
import { WhatWeDo } from "./pages/what-we-do/WhatWeDo";
import { Play2Learn } from "./pages/project/play2learn/Play2Learn";
import { SchoolAndCommunity } from "./pages/project/school&community/SchoolAndCommunity";
function App() {
  return (
    <div className="App">
      <Navbar />
    {/* <HomePage/> */}
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/blogs" exact element={<Blogs/> } />
        <Route path="/what-we-do" exact element={<WhatWeDo/> } />
        <Route path="/projects" exact element={<Projects/> } />
        <Route path="/volunteer" exact element={<Volunteer/> } />
        <Route path="/partnership" exact element={<Partnership/> } />
        <Route path="/about" exact element={<About />} />
        <Route path="/getinvolved" exact element ={<GetInvolved/>} />
        <Route path="/education" exact element ={<Education/>} />
        <Route path="/early-childhood" exact element ={<EarlyChildhood/>} />
        <Route path="/health-and-nutrition" exact element ={<HealthAndNutrition/>} />
        <Route path="/humanitarian" exact element ={<Humanitarian/>} />
        <Route path="/livelihood" exact element ={<Livelihood/>} />
        <Route path="/child-protection" exact element={<ChildProtection />} />
        <Route path="/play2learn" exact element = {<Play2Learn />}/>
        <Route path="/school-and-community" exact element = {<SchoolAndCommunity />}/>

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
