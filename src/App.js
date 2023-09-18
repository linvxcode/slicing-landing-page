import "./App.css";
import FirstPage from "./Fistt Page/FirstPage";
import SecondPage from "./Second Page/SecondPage";
import Layout from "./Layout/Layout";
import ThirdPage from "./Third Page/ThirdPage";
import AboutPage from "./About Page/AboutPage";
import Nav from "./Navbar/Navbar";

function App() {
  return (
    <div className="App ">
      <div className="relative z-[999]">
        <Nav />
      </div>
      <div className="absolute  top-0">
        <FirstPage />
      </div>
      <div className="absolute top-0 w-[100%]">
        <Layout />
      </div>
      <div className="mt-[470px]">
        <SecondPage />
      </div>
      <div>
        <ThirdPage />
      </div>
      <div>
        <AboutPage />
      </div>
    </div>
  );
}

export default App;
