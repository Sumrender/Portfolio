import "./App.css";
import About from "./components/about/About";
import Experiences from "./components/experiences/Experiences";
import Intro from "./components/intro/Intro";
import LeftSidebar from "./components/sidebar/LeftSidebar";
import Projects from "./components/projects/Projects";
import RightSideBar from "./components/sidebar/RightSidebar";

function App() {
  return (
    <div className="container">
      {/* Create a static link sidebar */}
      <LeftSidebar />
      <div className="container-width">
        <Intro />
        <About />
        <Projects />
        <Experiences />
      </div>
      {/* Create a moving tech section */}
      {/* <RightSideBar /> */}
    </div>
  );
}

export default App;
