import { HeroSection } from "../../components/hero/HeroSection";
import "../../App.css"
import { Cards } from "../../components/cards/Cards";
// import { PlainCardItem } from "../../components/plaincarditem/PlainCardItem";
import { PlainCards } from "../../components/plaincards/PlainCards";
import { About } from "../about/About";
import { ProjectSection } from "../../components/projects-setion/ProjectSection";
export const HomePage = () =>{
    return(
        <div>
            <HeroSection />
            <About /> 
            <Cards />
            <PlainCards />
            <ProjectSection />
        </div>
    )
}