import { useState, FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "./slices/profile";
import { TStore } from "./store";
import { validateEmail, validateCompany } from "./utils/validators";

const Form: FC = () => {
    const [comp, setComp] = useState("");
    const [nam, setNam] = useState("");
    const [phon, setPhon] = useState("");
    const [ema, setEma] = useState("");
    const [visible, setVisible] = useState(true);
    const [error, setError] = useState(false);
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

    return (
        <div>
            {visible && (
                <div>
                    <input
                        type="text"
                        placeholder="Company"
                        required
                        maxLength={80}
                        onKeyPress={(e) => validateCompany(e)}
                        onChange={(e) => handleCompany(e)}
                    />
                    <input
                        type="text"
                        placeholder="Name"
                        required
                        maxLength={50}
                        onChange={(e) => handleName(e)}
                    />
                    <input
                        type="number"
                        placeholder="Phone"
                        required
                        onChange={(e) => handlePhone(e)}
                    />
                    <input
                        type="text"
                        placeholder="Email"
                        required
                        onChange={(e) => handleEmail(e)}
                    />
                    <button onClick={handleProfileChange}>Get informed</button>
                </div>
            )}
            {!visible && (
                <div>
                    <h2>Company: {company}</h2>
                    <h2>Name: {name}</h2>
                    <h2>Phone: {phone}</h2>
                    <h2>Email: {email}</h2>
                </div>
            )}
            {error && <p>Email not valid</p>}
        </div>
    );
};

export default Form;
