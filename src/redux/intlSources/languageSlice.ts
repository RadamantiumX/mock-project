import { createSlice } from "@reduxjs/toolkit";
import { LANG } from "../../components/const/lang";
import { changeLanguage } from "../actions/langActions";

const initialState = LANG

export const languageSlice = createSlice({
    name: "lang",
    initialState,
    reducers: {
        changeLanguage
    }
})
