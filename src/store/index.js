// import {createStore} from 'redux'
import { configureStore, createSlice } from '@reduxjs/toolkit'


const initState = {counter: 0, showCounter: true}

const counterSlice = createSlice({
    name: 'counter',
    initialState: initState,
    reducers: {
        increment(state) {
            state.counter = state.counter + 1 // Dont need to worry about losing the other state prperties eg. showCounter
        }, 
        decrement(state) {
            state.counter = state.counter - 1
        },
        increase(state, action) {
            state.counter = state.counter + action.payload
        },
        toggleCounter(state) {
           state.showCounter = !state.showCounter
        }
    }
})


const store = configureStore({
    reducer: counterSlice.reducer
})

store.subscribe(() => {
    console.log(store.getState())
})

export const counterActions = counterSlice.actions
export default store


//! counterSlice is doing the SAME thing as this
// const counterReducer = (state = initState, action) => {
//     switch(action.type) {
//         case 'INCREMENT':
//             return {
//                 counter: state.counter + 1,
//                 showCounter: state.showCounter
//             }
//         case 'DECREMENT':
//             return {
//                 counter: state.counter - 1,
//                 showCounter: state.showCounter
//             }
//         case 'INCREASE': 
//             return {
//                 counter: state.counter + action.payload,
//                 showCounter: state.showCounter
//             }
//         case 'TOGGLE':
//             return {
//                 counter: state.counter,
//                 showCounter: !state.showCounter
//             }
//         default:
//             return state
//     }
// }
