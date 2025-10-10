import {useState} from "react";
import TestOverlay from "../components/Home/TestOverlay.jsx";
import {Analytics} from "@vercel/analytics/react";
import {HeroSection} from "./home/HeroSection.jsx";
import {SpecialistSections} from "./home/SpecialistSections.jsx";
import CoolNumbers from "./home/CoolNumbers.jsx";
import TestSection from "./home/TestSection.jsx";
import OurSpecialists from "./home/OurSpecialists.jsx";
import Contacts from "./home/Contacts.jsx";
import FAQ from "./home/FAQ.jsx";
import SpecialistsAndMission from "./home/SpecialistsAndMission.jsx";
import HowWork from "./home/HowWork.jsx";
import FindSpecialist from "./home/FindSpecialist.jsx";

export default function Home() {
    const [showOverlay, setShowOverlay] = useState(false);

    return (
        <div className="w-full">
            <Analytics/>
            {showOverlay && <TestOverlay onClose={() => setShowOverlay(false)}/>}
            <HeroSection setOverlay={setShowOverlay} />
            <CoolNumbers />
            <SpecialistsAndMission/>
            <OurSpecialists />
            <HowWork/>
            <TestSection />
            <FindSpecialist/>
            <SpecialistSections hasFilter={true}/>
            <Contacts />
            <FAQ />
        </div>
    );
}
