import { INCREMENT, DECREMENT, TEST } from './actionTypes';

const initialState = {
    counter: 0,
    userData: null
};

export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        // case INCREMENT:
        //     return { ...state, counter: state.counter + 1 }
        // case DECREMENT:
        //     return { ...state, counter: state.counter - 1 }

        case INCREMENT:
            return { ...state, counter: state.counter + action.payload }

        case DECREMENT:
            return { ...state, counter: state.counter - action.payload }
        case TEST:
            return { ...state, userData: action.payload }

        default:
            return state;
    }


}