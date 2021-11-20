import { IData } from '../../interfaces/search';
import { types } from './fine.types';
import { fetchData } from '../../components/api/search';
import { ActionCreator, Dispatch } from 'redux';
export const getDataAction = (n: string) =>  {
    return async (dispatch: Dispatch) => {
        try{
            const data = await fetchData(n);
            dispatch(getData(data))
        }catch (e) {
            console.error('ERROR: ', e)
        }finally {

        }
        
    }
}

export const getData = (data: IData) => {

    return {
        type: types.GET_DATA,
        payload: data
    }
}