import { useState, FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "./slices/profile";
import { TStore } from "./store";
import { validateEmail, validateCompany } from "./utils/validators";
import secret from "./secrets.json";

const Form: FC = () => {
    const [comp, setComp] = useState("");
    const [nam, setNam] = useState("");
    const [phon, setPhon] = useState("");
    const [ema, setEma] = useState("");
    const [visible, setVisible] = useState(true);
    const [error, setError] = useState(false);
    const [isd, setIsd] = useState();

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
    };

    useEffect(() => {
        const localize = async () => {
            const response = await fetch(
                `https://geolocation-db.com/json/${secret}`
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
                            type="number"
                            name="phone"
                            placeholder={isd}
                            required
                            onChange={(e) => handlePhone(e)}
                        />
                    </div>
                    <div className="labelAndField">
                        <label htmlFor="email">Email</label>
                        <input
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
                <div>
                    <h2>Company: {company}</h2>
                    <h2>Name: {name}</h2>
                    <h2>
                        Phone: {isd} {phone}
                    </h2>
                    <h2>Email: {email}</h2>
                </div>
            )}
            {error && <p>Email not valid</p>}
        </div>
    );
};

export default Form;
