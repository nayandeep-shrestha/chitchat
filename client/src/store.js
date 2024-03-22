import {configureStore} from "@reduxjs/toolkit"
import SettingsReducer from './reducers/settings.slicer'
import ColorReducer from './reducers/color.slicer'
import UserReducer from './reducers/user.slicer'

const rootStore = configureStore({
    reducer:{
        settings: SettingsReducer,
        colors: ColorReducer,
        users: UserReducer,
    }
})

export default rootStore