import React, { FC } from 'react';
import loadingStyle from './loading.module.scss';
import ReactLoading, { LoadingProps} from 'react-loading';
import { type } from 'os';

const Loading: FC<LoadingProps>= ({
    type = 'spinningBubbles', 
    color = '#c1c1c1',
    delay = 0,
    height = 100,
    width = 100
    }) => {

    return (
        <div className={loadingStyle.loading}>
              <ReactLoading type={type} color={color} delay={delay} height={height} width={width}/>
              <p>Загрузка</p>
        </div>
    )
}

export default Loading;