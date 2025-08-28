import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Clinics from "./pages/Clinics.jsx";
import Community from "./pages/Community.jsx";
import Specialist from "./pages/Specialist.jsx";
import Navbar from "./components/Navbar.jsx";
import Contact from "./components/Contact.jsx";

export default function App() {
    return (
        <Router>
            <Navbar/>
            <div className="pt-16">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<AboutUs/>}/>
                    <Route path="/clinics" element={<Clinics/>}/>
                    <Route path="/community" element={<Community/>}/>
                    <Route path="/specialists" element={<Specialist/>}/>
                </Routes>
            </div>

            <Contact/>
            <Footer/>
        </Router>
    );
}
