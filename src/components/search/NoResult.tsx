import React, { FC } from 'react';
import { SearchNoteLogo } from '../../icons/SearchNoteLogo';
import resultStyle from './search.module.scss';

interface INoResult {
	num: string;
}

const NoResult: FC<INoResult> = ({ num }) => (
	<div className={resultStyle.no__result}>
		<SearchNoteLogo />
		<p>Штраф {num} не найден</p>
	</div>
);

export default NoResult;
