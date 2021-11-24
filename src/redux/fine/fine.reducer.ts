import { Action } from 'redux';
import { IData } from '../../interfaces/search';
import { types } from './fine.types';
export interface IState {
	data: IData;
	loading: boolean;
	message: string;
}
interface IAction {
	type: string;
	payload: any;
}
const initealState: IState = {
	data: {},
	loading: false,
	message: ''
};
const reducer = (state = initealState, action: IAction) => {
	switch (action.type) {
		case types.GET_DATA:
			return { ...state, data: action.payload };
		case types.NOTE_FINE:
			return { ...state, data: {}, message: action.payload };
		case types.LOADING_ENABLE:
			return { ...state, loading: true };
		case types.LOADING_DISABLE:
			return { ...state, loading: false };
		case types.FIRST_DATA:
			return { ...state, data: action.payload };
		default:
			return state;
	}
};

export default reducer;
