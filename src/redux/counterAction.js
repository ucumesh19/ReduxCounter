import { INCREMENT, DECREMENT, TEST } from './actionTypes';


export const increment = (addNum) => ({
    type: INCREMENT,
    payload: addNum
});

export const decrement = (subNum) => ({
    type: DECREMENT,
    payload: subNum
});

export const test = (data) => ({
    type: TEST,
    payload: data
});