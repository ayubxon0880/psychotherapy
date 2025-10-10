import SpecialistsTop6 from "./specialist/SpecialistsTop6.jsx";
import {Contribution} from "./specialist/Contribution.jsx";
import {TopSpecialistCard} from "./specialist/TopSpecialistCard.jsx";

export default function Specialists() {
    return (
        <>
            <TopSpecialistCard/>
            <SpecialistsTop6/>
            <Contribution/>
        </>
    );
}
