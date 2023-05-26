import {createSlice} from "@reduxjs/toolkit"
import {intitialCountry} from "../../assets/initialCountry"

export const displayCountrySlice = createSlice({
    name: "displayCountry",
    initialState: {
        value: intitialCountry
    },
    reducers: {
        setDisplayCountry: (state, action) => {
            state.value = action.payload
        },
        deleteDisplayCountry: (state) => {
            state.value = null
        }
    }
})

export const {setDisplayCountry, deleteDisplayCountry} = displayCountrySlice.actions
export const selectDisplay = state => state.displayedCountry.value
export default displayCountrySlice.reducer