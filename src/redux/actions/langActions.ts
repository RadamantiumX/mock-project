/* eslint-disable @typescript-eslint/no-explicit-any */
export const changeLanguage = (lang:any) => {
    return {
        type: 'CHANGE_LANGUAGE',
        payload: lang
    }
}