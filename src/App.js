import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Contact from "./Content/Contact/Contact";
import Creation from "./Content/Creation/Creation";
import Deliveroo from "./Content/SitePage/Deliveroo";
import Home from "./Content/Home/Home";
import Marmiton from "./Content/SitePage/Marmiton";
import Netflix from "./Content/SitePage/Netflix";
import Tripadvisor from "./Content/SitePage/Tripadvisor";
import Vinted from "./Content/SitePage/Vinted";

import Header from "./Components/Header/Header";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHouse,
  faArrowLeft,
  faLocationDot,
  faPhone,
  faCar,
  faLocationArrow,
  faMapLocation,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faHouse,
  faArrowLeft,
  faLocationDot,
  faPhone,
  faCar,
  faLocationArrow,
  faMapLocation,
  faEyeSlash
);

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/creation" element={<Creation />} />
          <Route path="/creation/vinted" element={<Vinted />} />
          <Route path="/creation/deliveroo" element={<Deliveroo />} />
          <Route path="/creation/tripadvisor" element={<Tripadvisor />} />
          <Route path="/creation/netflix" element={<Netflix />} />
          <Route path="/creation/marmiton" element={<Marmiton />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
