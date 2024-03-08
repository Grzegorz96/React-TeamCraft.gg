import React from "react";
import lol from "../../assets/images/lol.svg";
import tft from "../../assets/images/tft.svg";
import cs2 from "../../assets/images/cs2.svg";
import dota2 from "../../assets/images/dota2.svg";
import logo from "../../assets/images/logo3.png";
import { useMainData } from "../../context/MainProvider";

export default function FooterComponent() {
    const {
        mainState: { acceptedTeams },
    } = useMainData();

    return (
        <footer className="footer">
            <div className="footer__events-counter">
                {`Active events: ${acceptedTeams.length}`}
            </div>
            <div className="footer__img-wrapper">
                <img src={logo} alt="teamcraft-logo" />
                <img src={lol} alt="lol-logo" />
                <img src={tft} alt="tft-logo" />
                <img src={cs2} alt="cs2-logo" />
                <img src={dota2} alt="dota2-logo" />
            </div>
        </footer>
    );
}
