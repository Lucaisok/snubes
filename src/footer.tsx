export const Footer = () => {
    return (
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
    );
};
