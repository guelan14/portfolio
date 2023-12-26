//import { NavBar, Base, Footer, ContadorApp } from "./components/";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Studies } from "./pages/Studies";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Studies />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
