import { reducer } from 'redux'

const errorReducer = (state = [], action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIEVE_ERRORS:
            return action.errors
        case CLEAR_ERRORS:
            return []
        default:
            return state
    }
}

export default errorReducer