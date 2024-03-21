import {createSlice} from '@reduxjs/toolkit'

const ColorSlicer = createSlice({
    name:'colors',
    initialState:{
        selectedColor: '#f1ece5',
    },
    reducers:{
        setColor: (state,action) =>{
            state.selectedColor = action.payload
        },
    }
})

export const {setColor} = ColorSlicer.actions
export default ColorSlicer.reducer