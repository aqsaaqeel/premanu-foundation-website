import { HeroSection } from "../../components/hero/HeroSection";
import "../../App.css"
import { Cards } from "../../components/cards/Cards";
// import { PlainCardItem } from "../../components/plaincarditem/PlainCardItem";
import { PlainCards } from "../../components/plaincards/PlainCards";
import { About } from "../about/About";
import { Projects } from "../project/Projects";
import { Partners } from "../partners/Partners";
export const HomePage = () =>{
    return(
        <div>
            <HeroSection />
            <About /> 
            <Cards />
            <PlainCards />
            <Projects />
            <Partners />
        </div>
    )
}