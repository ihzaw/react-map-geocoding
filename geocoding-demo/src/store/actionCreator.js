import { SET_DARK_MODE } from "./actionType"

export const setDarkMode = (payload) => {
    return (dispatch, getState) => {
        dispatch({
            type: SET_DARK_MODE,
            payload
        })
    }
}