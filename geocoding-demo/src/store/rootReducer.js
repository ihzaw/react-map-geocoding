import { SET_DARK_MODE } from "./actionType"

const intialState = {
    darkMode: false
}

const rootReducer = (state = intialState, { type, payload }) => {
    switch (type) {
        case SET_DARK_MODE:
            return {
                ...state,
                darkMode: payload
            }    
        default:
            return state
    }
}

export default rootReducer