import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from './components/pages/Home';
import AboutMe from "./components/pages/AboutMe";
import BookletsAndMagazines from "./components/pages/BookletsAndMagazines";
import LogosAndWeb from "./components/pages/LogosAndWeb";
import PageNotFound from "./components/pages/PageNotFound";
import Posters from "./components/pages/Posters";
import Resume from "./components/pages/Resume";
import Nav from "./components/pages/Nav";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index element={<><Home /><Footer page_name="Home"/></>} />
            <Route path="AboutMe" element={<><AboutMe /><Footer page_name="About Me"/></>} />
            <Route path="BookletsAndMagazines" element={<><BookletsAndMagazines /><Footer page_name="Booklets and Magazines"/></>} />
            <Route path="LogosAndWeb" element={<><LogosAndWeb /><Footer page_name="Logos and Web"/></>} />
            <Route path="Posters" element={<><Posters /><Footer page_name="Posters"/></>} />
            <Route path="Resume" element={<><Resume /><Footer page_name="Resume"/></>} />
            <Route path="*" element={<><PageNotFound /><Footer page_name="Page Not Fount"/></>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
