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
            <div className="events-counter">
                {`Active events: ${acceptedTeams.length}`}
            </div>
            <div className="img-wrapper">
                <img
                    src={logo}
                    alt="teamcraft-logo"
                    className="img-wrapper__img"
                />
                <img src={lol} alt="lol-logo" className="img-wrapper__img" />
                <img src={tft} alt="tft-logo" className="img-wrapper__img" />
                <img src={cs2} alt="cs2-logo" className="img-wrapper__img" />
                <img
                    src={dota2}
                    alt="dota2-logo"
                    className="img-wrapper__img"
                />
            </div>
        </footer>
    );
}
