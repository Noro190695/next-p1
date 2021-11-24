import React, { ChangeEvent, FC, FormEvent, useState, useEffect } from 'react';
import formStyle from './form.module.scss';
import { useDispatch } from 'react-redux';
import { getDataAction } from '../../redux/fine/fine.action';
import { useRouter } from 'next/router'
interface IForm {
    id?: string
}
const Form: FC<IForm> = ({ id }) => {
    const [ value, setValue ] = useState(id || '');
    const dispatch = useDispatch();
    const router = useRouter();
    const checkFine = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(getDataAction(value));
        router.push('/fines/' + value)
    }
    const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    return (
        <form className={formStyle.form} onSubmit={checkFine}>
            <p className={formStyle.form__title}>Получение информации о штрафе по УИН</p>
            <div className='row-c'>
                <input type="number" defaultValue={value} autoComplete='on' placeholder='Введите УИН' onChange={changeValue}/>
                <button >Найти</button>
            </div>
        </form>
    )
}


export default Form;