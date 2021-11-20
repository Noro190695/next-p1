import React, { FC } from 'react';
import { SearchNoteLogo } from '../../icons/SearchNoteLogo';
import resultStyle from './search.module.scss';



const Result: FC = () => (
	<div className={resultStyle.result}>
		<p className={resultStyle.result__title}>Постановление #18810136191111001035</p>
        <ul>
            <li>
                <p className={resultStyle.key}>Свидетельство о регистрации:</p>
                <p className={resultStyle.value}>3620848239</p>
            </li>
            <li>
                <p className={resultStyle.key}>Дата постановления:</p>
                <p className={resultStyle.value}>2019-11-11</p>
            </li>
            <li>
                <p className={resultStyle.key}>Получатель платежа:</p>
                <p className={resultStyle.value}>УФК по Воронежской области (ГУ МВД России по Воронежской области, л/с 04311294650)  </p>
            </li>
            <li>
                <p className={resultStyle.key}>Дата постановления:</p>
                <p className={resultStyle.value}>2019-11-11</p>
            </li>
        </ul>
	</div>
);

export default Result;