import { useState, useEffect } from "react";
import "./App.css";
import { throttle } from "./utils/throttle";
import { Header } from "./components/header";
import { TopContainerDesktop } from "./components/topContainerDesktop";
import { TopContainerTablet } from "./components/topContainerTablet";
import { TopContainerMobile } from "./components/topContainerMobile";
import { IconsSection } from "./components/iconsSection";
import { ClientsContainer } from "./components/clientsContainer";
import { Footer } from "./components/footer";
import { SubFooter } from "./components/subFooter";

function App() {
    const [windowSize, setWindowSize] = useState(window.innerWidth);

    const resizer = () => {
        window.addEventListener("resize", () => {
            setWindowSize(window.innerWidth);
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
            <Footer />
            <SubFooter />
        </div>
    );
}

export default App;
