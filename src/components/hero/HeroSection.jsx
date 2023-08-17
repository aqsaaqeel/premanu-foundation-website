import {Button} from  "../button/Button.jsx"
import "./HeroSection.css";
import "../../App.css"
export const HeroSection = () =>{
    return(
        <div className="hero-container">
            <video src="/videos/video-2.mp4" autoPlay loop muted />
            <h1>PREMANU FOUNDATION</h1>
            <p>Where needs are answered</p>
            <div className="hero-btns">
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
                    GET STARTED
                </Button>
                <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
                    DONATE <i className="fa-solid fa-handshake-angle" />
                </Button>
            </div>
        </div>
    )
}