import { useState, useEffect } from "react";
import "./App.css";
import { throttle } from "./utils/throttle";
import { Header } from "./header";
import { TopContainerDesktop } from "./topContainerDesktop";
import { TopContainerTablet } from "./topContainerTablet";
import { TopContainerMobile } from "./topContainerMobile";
import Form from "./form";

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
        </div>
    );
}

export default App;
