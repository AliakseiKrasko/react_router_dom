import React from 'react';
import {useParams} from 'react-router-dom';
import {adidasArr} from './ADIDAS';
import {pumaArr} from './PUMA';

export const Model: React.FC = () => {
    const params = useParams();
    const modelId = Number(params.id) - 1;
    return (
        <div style={{textAlign: 'center'}}>
            <h2>{adidasArr[modelId].model}</h2>
            <h3>{adidasArr[modelId].collection}</h3>
            <h4>{adidasArr[modelId].price}</h4>
            <img src={adidasArr[modelId].picture} alt="adidas"/>


            <h2>{pumaArr[modelId].model}</h2>
            <h3>{pumaArr[modelId].collection}</h3>
            <h4>{pumaArr[modelId].price}</h4>
            <img src={pumaArr[modelId].picture} alt="adidas"/>
        </div>


    );
};