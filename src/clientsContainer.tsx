export const ClientsContainer = () => {
    return (
        <div className="clientsContainer">
            <div className="verticalContainer">
                <div className="clientImage"></div>
                <div className="horizontalContainer">
                    <div className="leftArrow desktop"></div>
                    <div className="textContainer">
                        <div className="text">
                            “Finding a suitable outsourcing service provider
                            through Snubes was very easy and our personal
                            consultant helped us every step of the way. After a
                            short time we had good offers on the table. An
                            on-site visit confirmed the positive impression and
                            we have now found a matching partner. Thank you for
                            your great support, which has helped us a lot in the
                            selection process.”
                        </div>
                    </div>
                    <div className="rightArrow desktop"></div>
                </div>
                <div className="author">
                    Jan Brenneke, <span>VP Operation</span>
                </div>
                <div className="points desktop"></div>
                <div className="horizontalContainer mobile">
                    <div className="leftArrow"></div>
                    <div className="points"></div>
                    <div className="rightArrow"></div>
                </div>

                <div className="brandsContainer">
                    <div className="allianz"></div>
                    <div className="shell"></div>
                    <div className="user"></div>
                    <div className="laser"></div>
                    <div className="tal"></div>
                </div>
            </div>
        </div>
    );
};
