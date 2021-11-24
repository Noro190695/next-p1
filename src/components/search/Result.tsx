import React, { FC } from 'react';
import { SearchNoteLogo } from '../../icons/SearchNoteLogo';
import resultStyle from './search.module.scss';
import { RootState } from '../../redux/store';
import { IState } from '../../redux/fine/fine.reducer';
import { useSelector } from 'react-redux';


const Result: FC = () => {
    const {data} = useSelector<RootState, IState>((state) => state.fine);
    console.log(data);
   
    
    return(
        <div className={resultStyle.result}>
            <p className={resultStyle.result__title}>Постановление #{data.number}</p>
            <ul>
                <li>
                    <p className={resultStyle.key}>Свидетельство о регистрации:</p>
                    <p className={resultStyle.value}>{data.doc_number}</p>
                </li>
                <li>
                    <p className={resultStyle.key}>Дата постановления:</p>
                    <p className={resultStyle.value}>{data.bill_at}</p>
                </li>
                <li>
                    <p className={resultStyle.key}>Нарушение:</p>
                    <p className={resultStyle.value}>{data.koap_code}</p>
                </li>
                <li>
                    <p className={resultStyle.key}>Получатель платежа:</p>
                    <p className={resultStyle.value}>{data.payee_username}</p>
                </li>
                <li>
                    <p className={resultStyle.key}>ИНН:</p>
                    <p className={resultStyle.value}>{data.payee_inn}</p>
                </li>
                <li>
                    <p className={resultStyle.key}>КПП:</p>
                    <p className={resultStyle.value}>{data.payee_kpp}</p>
                </li>
                <li>
                    <p className={resultStyle.key}>Расчетный счет:</p>
                    <p className={resultStyle.value}>{data.payee_bank_account}</p>
                </li>
                <li>
                    <p className={resultStyle.key}>Банк получателя:</p>
                    <p className={resultStyle.value}>{data.payee_bank_name}</p>
                </li>
                <li>
                    <p className={resultStyle.key}>БИК:</p>
                    <p className={resultStyle.value}>{data.payee_bank_bik}</p>
                </li>
                <li>
                    <p className={resultStyle.key}>ОКТМО(ОКАТО):</p>
                    <p className={resultStyle.value}>{data.payee_oktmo}</p>
                </li>
                <li>
                    <p className={resultStyle.key}>КБК:</p>
                    <p className={resultStyle.value}>{data.kbk}</p>
                </li>
                <li>
                    <p className={resultStyle.key}>Сумма штафа:</p>
                    <p className={resultStyle.value}>{data.amount}</p>
                </li>

                <li>
                    <p className={resultStyle.key}>К оплате:</p>
                    <p className={resultStyle.value}>{data.amount_to_pay}</p>
                </li>
            </ul>
        </div>
    );
}

export default Result;