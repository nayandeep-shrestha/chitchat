import {configureStore} from "@reduxjs/toolkit"
import SettingsReducer from './reducers/settings.slicer'
import ColorReducer from './reducers/color.slicer'

const rootStore = configureStore({
    reducer:{
        settings: SettingsReducer,
        colors: ColorReducer
    }
})

export default rootStore