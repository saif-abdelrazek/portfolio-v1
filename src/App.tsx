import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { ClipLoader } from "react-spinners";
import Navbar from "./components/Navbar";
const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Experience = lazy(() => import("./components/Experience"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));

const Undefined = lazy(() => import("./components/404"));
function App() {
  return (
    <div className="relative overflow-x-hidden overflow-y-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 min-h-screen w-screen ">
        
        <div className=" absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className="container mx-auto px-8 ">
        <Navbar />
        <Suspense fallback={<ClipLoader color="#ffffff" size={40} />}>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Undefined />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
