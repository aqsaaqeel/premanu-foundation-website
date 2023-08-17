import { HeroSection } from "../../components/hero/HeroSection";
import "../../App.css"
import { Cards } from "../../components/cards/Cards";
// import { PlainCardItem } from "../../components/plaincarditem/PlainCardItem";
import { PlainCards } from "../../components/plaincards/PlainCards";
export const HomePage = () =>{
    return(
        <div>
            <HeroSection />
            <Cards />
            <PlainCards />
        </div>
    )
}