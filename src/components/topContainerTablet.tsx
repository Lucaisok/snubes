import { StatsContainer } from "./statsContainer";
import Form from "./form";

export const TopContainerTablet = () => {
    return (
        <div>
            <Form />
            <div className="desktopTopContainer">
                <div className="topOverlay">
                    <StatsContainer />
                </div>
            </div>
        </div>
    );
};
