import React from 'react';
import { useParams } from 'react-router-dom';
import { adidasArr } from './ADIDAS';
import { pumaArr } from './PUMA';
import {nikeArr} from './NIKE';

export const Model: React.FC = () => {
    const params = useParams();
    const modelId = Number(params.id);

    // Находим текущую модель
    const modelAdidas = adidasArr.find(el => el.id === modelId);
    const modelPuma = pumaArr.find(el => el.id === modelId);
    const modelNike = nikeArr.find(el => el.id === modelId);

    return (
        <div style={{ textAlign: 'center' }}>
            {modelAdidas ? (
                <>
                    <h2>{modelAdidas.model}</h2>
                    <h3>{modelAdidas.collection}</h3>
                    <h4>{modelAdidas.price}</h4>
                    <img src={modelAdidas.picture} alt={modelAdidas.model} />
                </>
            ) : modelPuma ?
                <>
                    <h2>{modelPuma.model}</h2>
                    <h3>{modelPuma.collection}</h3>
                    <h4>{modelPuma.price}</h4>
                    <img src={modelPuma.picture} alt={modelPuma.model} width={'800px'} height={'500px'} />
                </>
                : modelNike ?
                    <>
                        <h2>{modelNike.model}</h2>
                        <h3>{modelNike.collection}</h3>
                        <h4>{modelNike.price}</h4>
                        <img src={modelNike.picture} alt={modelNike.model} width={'800px'} />
                    </>
                : (
                <h2>Такого товара нет в наличии</h2>
            )}
        </div>
    );
};
