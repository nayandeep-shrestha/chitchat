import {createSlice} from '@reduxjs/toolkit'

const UserSlicer = createSlice({
    name: 'users',
    initialState:{
        userDetail: null,
    },
    reducers:{
        login:((state,action) => {
            state.userDetail = action.payload
        }),
        logout:((state, action)=> {
            state.userDetail = null
        })
    }
})

export const {login, logout} = UserSlicer.actions
export default UserSlicer.reducer