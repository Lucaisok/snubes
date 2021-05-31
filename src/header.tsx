export const Header = () => {
    return (
        <div className="header">
            <div className="logoContainer"></div>
            <div className="navbarContainer">
                <ul>
                    <li>About Us</li>
                    <li>How it works</li>
                    <li>Become a Partner</li>
                    <li
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        EUR <span className="arrow"></span>
                    </li>
                    <li
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        EN <span className="arrow"></span>
                    </li>
                    <li>Sign In</li>
                    <li>Get Access</li>
                </ul>
            </div>
            <div className="hamburgerContainer"></div>
        </div>
    );
};
