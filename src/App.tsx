import { useState, useEffect } from "react";
import "./App.css";
import { throttle } from "./utils/throttle";
import { Header } from "./header";
import { TopContainerDesktop } from "./topContainerDesktop";
import { TopContainerTablet } from "./topContainerTablet";
import { TopContainerMobile } from "./topContainerMobile";
import { IconsSection } from "./iconsSection";
import { ClientsContainer } from "./clientsContainer";

function App() {
    const [windowSize, setWindowSize] = useState(window.innerWidth);

    const resizer = () => {
        window.addEventListener("resize", () => {
            setWindowSize(window.innerWidth);
            console.log(windowSize);
            if (windowSize < 900 && windowSize > 576) {
                console.log("is Tablet");
            } else if (windowSize < 576) {
                console.log("is Mobile");
            } else {
                console.log("is Desktop");
            }
        });
    };

    useEffect(() => {
        window.addEventListener("resize", throttle(resizer, 200));
        return () => {
            window.removeEventListener("resize", throttle(resizer, 200));
        };
    });

    return (
        <div className="App">
            <Header />
            {windowSize > 900 && <TopContainerDesktop />}
            {windowSize <= 900 && windowSize > 576 && <TopContainerTablet />}
            {windowSize <= 576 && <TopContainerMobile />}
            <IconsSection />
            <div className="whyContainer"></div>
            <ClientsContainer />
            <div className="footer">
                <div className="graySquare"></div>
                <div className="column">
                    <p className="index">About us</p>
                    <p className="index">Become a Partner</p>
                    <p className="index">FAQ</p>
                </div>
                <div className="column">
                    <p className="index">Imprint</p>
                    <p className="index">Terms &#38; Conditions</p>
                    <p className="index">Privacy Policy</p>
                </div>
                <div className="column">
                    <p className="index">support@snubes.com</p>
                    <p className="index">+49 (0) 305 5645327</p>
                    <div className="row">
                        <div className="fb"></div>
                        <div className="twitter"></div>
                        <div className="linkedin"></div>
                    </div>
                </div>
            </div>
            <div className="subFooter">
                <div className="reserved">
                    © 2019 Snubes GmbH All Rights Reserved.
                </div>
            </div>
        </div>
    );
}

export default App;
