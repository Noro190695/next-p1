import { IData } from '../../interfaces/search';
import { types } from './fine.types';
import { fetchData } from '../../components/api/search';
import {  Dispatch } from 'redux';
export const getDataAction = (n: string) =>  {
    
    return async (dispatch: Dispatch) => {
        dispatch(enableLoading())
        try{
            const data = await fetchData(n);
            dispatch(getData(data))
        }catch (e) {
            dispatch
        }finally {
            setTimeout(() => {
                dispatch(disableLoading())
            }, 1000)
        }
        
    }
}

export const getData = (data: IData) => {

    return {
        type: types.GET_DATA,
        payload: data
    }
}

export const noteFine = (message: string) => {

    return {
        type: types.NOTE_FINE,
        payload: message
    }
}

export const enableLoading = () => {

    return {
        type: types.LOADING_ENABLE,
        payload: ''
    }
}
export const disableLoading = () => {

    return {
        type: types.LOADING_DISABLE,
        payload: ''
    }
}

export const firstData = (data: IData) => {
    return {
        type: types.FIRST_DATA,
        payload: data
    }
}