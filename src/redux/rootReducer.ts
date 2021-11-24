import { combineReducers } from 'redux';
import reducer from './fine/fine.reducer';
interface IRoot {
    type: string
}

const rootReducer = combineReducers({
    fine: reducer
})

export default rootReducer;