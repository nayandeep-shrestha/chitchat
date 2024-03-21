import {createSlice} from '@reduxjs/toolkit'

const SettingsSlicer = createSlice({
    name:'settings',
    initialState:{
        view: false,
        prView:false,
        chatcolor:false,
    },
    reducers:{
        sView: (state, action) => {
            state.view = action.payload
        },
        pView: (state, action) => {
            state.prView = action.payload
        },
        chatColor: (state, action) => {
            state.chatcolor= action.payload
        },
    }
})

export const {sView, pView, chatColor} = SettingsSlicer.actions
export default SettingsSlicer.reducer