import { Routes, Route } from "react-router";
import ResponsiveAppBar from "./ResponsiveAppBar";
import Home from "./Home";
import Gallery from "./Gallery";
import About from "./About";

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
