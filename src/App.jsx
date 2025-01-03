import Contact from "./Components/Contact";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";

function App() {
  return (
    <div className="h-full flex justify-center bg-[#181818] text-[#e2e2e2] font-mooli">
      <div className="w-9/12 justify-center">
        <Navbar />
        <div className="bg-[#272727] rounded-2xl px-10 pb-5">
          <Hero />
        </div>

        <div className="h-1 rounded-lg bg-stone-900 my-20"></div>
        <div className="bg-[#272727] rounded-2xl py-10 px-10 pb-5">
          <Skills />
        </div>

        <div className="h-1 rounded-lg bg-stone-900 my-20"></div>
        <div className="bg-[#272727] rounded-2xl py-10 px-10 pb-5">
          <Projects />
        </div>
        <div className="h-1 rounded-lg bg-stone-900 my-20"></div>
        <div className="bg-[#272727] rounded-2xl px-10 ">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
