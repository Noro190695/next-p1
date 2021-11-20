import { Action } from "redux";
import { IData } from "../../interfaces/search";
interface IState {
    data: IData
}
const initealState: IState = {
    data: {}
}
const reducer = (state = initealState, action: Action) => {

}

export default reducer;