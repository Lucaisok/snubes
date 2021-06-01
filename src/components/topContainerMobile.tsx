import Form from "./form";
export const TopContainerMobile = () => {
    return (
        <div>
            <Form />
            <div className="desktopTopContainer">
                <div className="topOverlay">
                    <div className="statsContainer">
                        <p className="welcome">
                            Welcome to Europe’s largest call center database{" "}
                        </p>
                        <div className="horizontal">
                            <div className="vertical">
                                <p className="number">500+</p>
                                <p className="letters">Tenders</p>
                            </div>
                            <div className="vertical">
                                <p className="number">200+</p>
                                <p className="letters">Callcenter</p>
                            </div>
                        </div>
                        <div className="horizontal">
                            <div className="vertical">
                                <p className="number">375.000</p>
                                <p className="letters">Agents available</p>
                            </div>
                            <div className="vertical">
                                <p className="number">85%</p>
                                <p className="letters">Faster sourcing</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
