/* eslint-disable @typescript-eslint/no-explicit-any */
import { LANG } from "../../components/const/lang";

const initialState = LANG

const messageReducer = (state = initialState, action:any) => {
    switch(action.type){
        default:
            return state;
    }
}

export default messageReducer