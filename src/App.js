import Prime from "./Prime";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Headers/Header";
import TopHeader from "./components/Headers/TopHeader";
import Footer from "./components/Footers/Footer";
import About from "./pages/About";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Blog from "./components/homePage/Blog";

function App() {
  return (
    <div>
      <TopHeader />
      <Header />
      <Routes>
        <Route path="/" element={<Prime />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
