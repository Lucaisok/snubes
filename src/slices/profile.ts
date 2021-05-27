import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    company: "",
    name: "",
    phone: "",
    email: "",
};

type TPayload = {
    company: string;
    name: string;
    phone: string;
    email: string;
};

const profileSlice = createSlice({
    name: "profile",
    initialState: initialState,
    reducers: {
        updateProfile: (state, { payload }: PayloadAction<TPayload>) => {
            state.company = payload.company;
            state.name = payload.name;
            state.phone = payload.phone;
            state.email = payload.email;
        },
    },
});

export const profileReducer = profileSlice.reducer;
export const { updateProfile } = profileSlice.actions;
