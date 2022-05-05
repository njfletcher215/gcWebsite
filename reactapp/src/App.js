import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from './components/pages/Home';
import AboutMe from "./components/pages/AboutMe";
import Print from "./components/pages/Print";
import Digital from "./components/pages/Digital";
import Identity from "./components/pages/Identity";
import PageNotFound from "./components/pages/PageNotFound";
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
            <Route path="Resume" element={<><Resume /><Footer page_name="Resume"/></>} />
            <Route path="AboutMe" element={<><AboutMe /><Footer page_name="About Me"/></>} />
            <Route path="Print" element={<><Print /><Footer page_name="Print"/></>} />
            <Route path="Digital" element={<><Digital /><Footer page_name="Digital"/></>} />
            <Route path="Identity" element={<><Identity /><Footer page_name="Identity"/></>} />
            <Route path="*" element={<><PageNotFound /><Footer page_name="Page Not Found"/></>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
