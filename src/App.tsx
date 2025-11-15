import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Suspense, lazy } from "react";
import { ClipLoader } from "react-spinners";
import Navbar from "./portfolio/sections/Navbar";
const Hero = lazy(() => import("./portfolio/sections/Hero"));
const About = lazy(() => import("./portfolio/sections/About"));
const Experience = lazy(() => import("./portfolio/sections/Experience"));
const Projects = lazy(() => import("./portfolio/sections/Projects"));
const Contact = lazy(() => import("./portfolio/sections/Contact"));

const Undefined = lazy(() => import("./components/404"));
function App() {
  return (
    <div className="relative overflow-x-hidden overflow-y-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 min-h-screen w-screen ">
        <div className=" absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      
      {/* Archive Notice Banner */}
      <div className="sticky top-0 z-50 bg-gradient-to-r from-amber-900/90 to-orange-900/90 backdrop-blur-sm border-b border-amber-700/50 shadow-lg">
        <div className="container mx-auto px-8 py-3">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-center">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
              <span className="text-sm font-medium text-amber-50">
                <strong>Archived Portfolio (v1)</strong> — This is a preserved snapshot of my early work.
              </span>
            </div>
            <a 
              href="https://saifabdelrazek.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-amber-600 hover:bg-amber-500 text-white text-sm font-semibold rounded-md transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              Visit Current Site
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
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
