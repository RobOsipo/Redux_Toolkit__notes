// import {createStore} from 'redux'
import { configureStore, createSlice } from '@reduxjs/toolkit'


const initCounterState = {counter: 0, showCounter: true}

const counterSlice = createSlice({
    name: 'counter',
    initialState: initCounterState,
    reducers: {
        increment(state) {
            state.counter = state.counter + 1 // Dont need to worry about losing the other state properties eg. state.showCounter
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

const initAuthState = { isAuthenticated: false }

const authSlice = createSlice({
    name: 'auth',
    initialState: initAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true
        },
        logout(state) {
            state.isAuthenticated = false
        }
    }
})

// If I has just one slice I could just do something like reducer: counterSlice.reducer
const store = configureStore({
    reducer: {counter: counterSlice.reducer, auth: authSlice.reducer } // ! ONLY ONE ROOT REDUCER (the key) EVER GOES HERE
})
console.log(store.getState())
store.subscribe(() => {
    console.log(store.getState())
})

export const counterActions = counterSlice.actions
export const authActions = authSlice.actions
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
