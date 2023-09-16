import { HeroSection } from "../../components/hero/HeroSection";
import "../../App.css"
import { Cards } from "../../components/cards/Cards";
// import { PlainCardItem } from "../../components/plaincarditem/PlainCardItem";
import { PlainCards } from "../../components/plaincards/PlainCards";
import { About } from "../../components/about-homepage/About";
import { Projects } from "../project/Projects";
import { Partners } from "../partners/Partners";
import Interns from "../interns/Interns";
import { InternPictures } from "../interns/InternPictures";
import { Team } from "../../components/team/Team";
export const HomePage = () =>{
    return(
        <div>
            <HeroSection />
            <About /> 
            <Cards />
            <PlainCards />
            <Projects />
            <Partners />
            <Interns />
            <InternPictures />
            <Team />
        </div>
    )
}