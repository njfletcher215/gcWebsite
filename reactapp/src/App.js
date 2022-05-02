import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/pages/Home';
import AboutMe from "./components/pages/AboutMe";
import BookletsAndMagazines from "./components/pages/BookletsAndMagazines";
import LogosAndWeb from "./components/pages/LogosAndWeb";
import PageNotFound from "./components/pages/PageNotFound";
import Posters from "./components/pages/Posters";
import Resume from "./components/pages/Resume";
import Nav from "./components/pages/Nav";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="AboutMe" element={<AboutMe />} />
          <Route path="BookletsAndMagazines" element={<BookletsAndMagazines />} />
          <Route path="LogosAndWeb" element={<LogosAndWeb />} />
          <Route path="Posters" element={<Posters />} />
          <Route path="Resume" element={<Resume />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
