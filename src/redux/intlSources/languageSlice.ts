/* eslint-disable @typescript-eslint/no-explicit-any */
const initialState = {
   locale: 'en'
}

const languageReducer = (state = initialState, action:any) => {
    switch (action.type) {
        case 'CHANGE_LANGUAGE':
            return {
                ...state,
                locale: action.payload
            };
    
        default:
            return state;
    }
}

export default languageReducer;