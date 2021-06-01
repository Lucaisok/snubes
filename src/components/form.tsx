import { useState, FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../slices/profile";
import { TStore } from "../store";
import { validateEmail, validateCompany } from "../utils/validators";

const Form: FC = () => {
    const [comp, setComp] = useState("");
    const [nam, setNam] = useState("");
    const [phon, setPhon] = useState("");
    const [ema, setEma] = useState("");
    const [visible, setVisible] = useState(true);
    const [error, setError] = useState(false);
    const [isd, setIsd] = useState();
    const [empty, setEmpty] = useState(false);

    const dispatch = useDispatch();
    const { email, company, name, phone } = useSelector(
        (state: TStore) => state.profileReducer
    );

    const handleCompany = (e: React.ChangeEvent<HTMLInputElement>) => {
        setComp(e.target.value);
    };

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNam(e.target.value);
    };

    const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhon(e.target.value);
    };

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEma(e.target.value);
    };

    const handleProfileChange = () => {
        const valid = validateEmail(ema);
        if (
            ema.length !== 0 &&
            comp.length !== 0 &&
            nam.length !== 0 &&
            phon.length !== 0
        ) {
            if (valid) {
                dispatch(
                    updateProfile({
                        company: comp,
                        name: nam,
                        phone: phon,
                        email: ema,
                    })
                );
                setVisible(false);
                if (error) {
                    setError(false);
                }
            } else {
                setError(true);
            }
        } else {
            setEmpty(true);
        }
    };

    useEffect(() => {
        const localize = async () => {
            const response = await fetch(
                `https://geolocation-db.com/json/e4f42070-ad2d-11eb-adf1-cf51da9b3410`
            );
            const data = await response.json();
            const ip = data.IPv4;
            const res = await fetch(`https://ipapi.co/${ip}/json/`);
            const dat = await res.json();
            setIsd(dat.country_calling_code);
        };
        localize();
    }, []);

    return (
        <div className="form">
            {visible && (
                <div className="inputsContainer">
                    <div className="inputsContainerTitleContainer">
                        <div className="inputsContainerTitle">
                            Find inbound call centers for your company
                        </div>
                    </div>
                    <div className="subtitleContainer">
                        <div className="subtitle">
                            Use our AI and Big Data driven call center sourcing
                            solution
                        </div>
                    </div>

                    <div className="labelAndField">
                        <label htmlFor="company">Company</label>
                        <input
                            className={empty ? "red" : undefined}
                            type="text"
                            name="company"
                            placeholder="Company"
                            required
                            maxLength={80}
                            onKeyPress={(e) => validateCompany(e)}
                            onChange={(e) => handleCompany(e)}
                        />
                    </div>
                    <div className="labelAndField">
                        <label htmlFor="name">Name</label>
                        <input
                            className={empty ? "red" : undefined}
                            type="text"
                            name="name"
                            placeholder="Name"
                            required
                            maxLength={50}
                            onChange={(e) => handleName(e)}
                        />
                    </div>
                    <div className="labelAndField">
                        <label htmlFor="phone">Phone</label>
                        <input
                            className={empty ? "red" : undefined}
                            type="number"
                            name="phone"
                            placeholder={isd}
                            required
                            onChange={(e) => handlePhone(e)}
                        />
                    </div>
                    {error && <p>Email not valid</p>}
                    <div className="labelAndField">
                        <label htmlFor="email">Email</label>
                        <input
                            className={empty ? "red" : undefined}
                            type="text"
                            name="email"
                            placeholder="Email"
                            required
                            onChange={(e) => handleEmail(e)}
                        />
                    </div>
                    <button className="button" onClick={handleProfileChange}>
                        Get informed
                    </button>
                </div>
            )}
            {!visible && (
                <div className="inputsContainer">
                    <div className="inputsContainerTitleContainer">
                        <div className="inputsContainerTitle thank">
                            Thank you for your request!
                        </div>
                    </div>
                    <div className="subtitleAlternative">
                        <div className="subtitle">
                            You’ve taken the first step. Our experts will get in
                            touch with you soon.
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="generalContainer">
                        <div className="insideContainer">
                            <p className="reference">Company</p>
                            <p className="reference">Name</p>
                            <p className="reference">Phone</p>
                            <p className="reference">Email</p>
                        </div>
                        <div className="insideContainer">
                            <p className="data">{company}</p>
                            <p className="data">{name}</p>
                            <p className="data">
                                {isd} {phone}
                            </p>
                            <p className="data">{email}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Form;
