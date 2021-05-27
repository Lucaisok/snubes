import { useState, FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "./slices/profile";
import { TStore } from "./store";

const Form: FC = () => {
    const [comp, setComp] = useState("");
    const [nam, setNam] = useState("");
    const [phon, setPhon] = useState("");
    const [ema, setEma] = useState("");
    const dispatch = useDispatch();
    const { email, company, name, phone } = useSelector(
        (state: TStore) => state.profileReducer
    );

    const handleCompany = (e: any) => {
        setComp(e.target.value);
    };

    const handleName = (e: any) => {
        setNam(e.target.value);
    };

    const handlePhone = (e: any) => {
        setPhon(e.target.value);
    };

    const handleEmail = (e: any) => {
        setEma(e.target.value);
    };

    const handleProfileChange = () => {
        dispatch(
            updateProfile({
                company: comp,
                name: nam,
                phone: phon,
                email: ema,
            })
        );
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Company"
                onChange={(e) => handleCompany(e)}
            />
            <input
                type="text"
                placeholder="Name"
                onChange={(e) => handleName(e)}
            />
            <input
                type="text"
                placeholder="Phone"
                onChange={(e) => handlePhone(e)}
            />
            <input
                type="text"
                placeholder="Email"
                onChange={(e) => handleEmail(e)}
            />
            <button onClick={handleProfileChange}>Get informed</button>
            <h2>Company: {company}</h2>
            <h2>Name: {name}</h2>
            <h2>Phone: {phone}</h2>
            <h2>Email: {email}</h2>
        </div>
    );
};

export default Form;
