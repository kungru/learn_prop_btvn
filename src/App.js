import { Routes, Route } from "react-router-dom";
import Navigation from './Navigation';
import About from './About';
import HomePage from "./HomePage";
import SamplePost from "./SamplePost";
import Contact from "./Contact";
function App() {
  return (
    <div className="App">
      <Navigation />
       <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/post" element={<SamplePost/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      
    </div>
    
  );
}

export default App;
