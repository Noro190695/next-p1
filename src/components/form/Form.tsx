import React, { FC } from 'react';
import formStyle from './form.module.scss';

const Form: FC = () => {
    return (
        <form className={formStyle.form}>
            <p className={formStyle.form__title}>Получение информации о штрафе по УИН</p>
            <div className='row-c'>
                <input type="text" autoComplete='on' placeholder='Введите УИН'/>
                <button>Найти</button>
            </div>
        </form>
    )
}


export default Form;