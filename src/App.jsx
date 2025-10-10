import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Clinics from "./pages/Clinics.jsx";
import Community from "./pages/Community.jsx";
import Navbar from "./components/Navbar.jsx";
import Contact from "./components/Contact.jsx";
import {TestsPage} from "./pages/test/TestsPage.jsx";
import TestDefinition from "./pages/test/TestDefinition.jsx";
import TestSolve from "./pages/test/TestSolve.jsx";
import Clinic from "./pages/clinics/Clinic.jsx";
import Specialists from "./pages/Specialists.jsx";
import Specialist from "./pages/Specialist.jsx";
import SessionForm from "./pages/SessionForm.jsx";
import {Tests} from "./pages/Tests.jsx";


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
                    <Route path="/session-form/:id" element={<SessionForm/>}/>
                    <Route path="/specialists" element={<Specialists/>}/>
                    <Route path="/specialists/specialist/:id" element={<Specialist/>}/>
                    <Route path="/tests" element={<Tests/>}/>
                    <Route path="/tests-all" element={<TestsPage/>}/>
                    <Route path="/test/:id" element={<TestDefinition/>}/>
                    <Route path="/clinics/clinic/:id" element={<Clinic/>}/>
                    <Route path="/test/solve/:id" element={<TestSolve/>}/>
                </Routes>
            </div>

            <Contact/>
            <Footer/>
        </Router>
    );
}
