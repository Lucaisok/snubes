import Form from "./form";
import { StatsContainer } from "./statsContainer";

export const TopContainerDesktop = () => {
    return (
        <div className="desktopTopContainer">
            <div className="topOverlay">
                <div className="formContainer">
                    <Form />
                </div>
                <StatsContainer />
            </div>
        </div>
    );
};
