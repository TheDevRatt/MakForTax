import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <>
      <body className="bg-root relative font-sans text-slate-12 antialiased selection:bg-[#00cc9937] selection:text-[#007763fd] dark:selection:bg-[#00fff61d] dark:selection:text-[#67ffded2]">
        <div>
          <Navbar />
        </div>
        <div>
          <Hero />
        </div>
      </body>
    </>
  );
}

export default App;
