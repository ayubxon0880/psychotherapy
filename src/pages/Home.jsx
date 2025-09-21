import {useState} from "react";
import TestOverlay from "../components/Home/TestOverlay.jsx";
import {Analytics} from "@vercel/analytics/react";
import {HeroSection} from "./home/HeroSection.jsx";
import {SpecialistSections} from "./home/SpecialistSections.jsx";
import {MapSection} from "./home/MapSection.jsx";
import CoolNumbers from "./home/CoolNumbers.jsx";

export default function Home() {
    const [showOverlay, setShowOverlay] = useState(false);

    return (
        <div className="w-full">
            <Analytics/>
            {showOverlay && <TestOverlay onClose={() => setShowOverlay(false)}/>}

            <HeroSection setOverlay={setShowOverlay} />

            <CoolNumbers />

            <SpecialistSections />

            <MapSection/>
        </div>
    );
}
