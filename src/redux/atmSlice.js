import {createSlice } from "@reduxjs/toolkit"

const atmSlice = createSlice({
    name: "ATM",
    initialState: {
        atm: 1000,
        showATM: false,
    },
    reducers: {
        incrementByValue: (state, action) => {
            state.atm += action.payload;
        },
        decrementByValue: (state, action) => {
            state.atm -= action.payload;
        },
        toggleATM: (state, action) => {
            state.showATM = !state.showATM
        }
    }
})

export const {incrementByValue, decrementByValue, toggleATM} = atmSlice.actions;

export default atmSlice.reducer;