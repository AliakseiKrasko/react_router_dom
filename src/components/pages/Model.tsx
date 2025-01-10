import React from 'react';
import { useParams } from 'react-router-dom';
import {adidasArr} from './ADIDAS';
import {pumaArr} from './PUMA';
import {nikeArr} from './NIKE';


type CrossItem = {
    id: number;
    model: string;
    collection: string;
    price: string;
    picture: string;
};

type CrossModels = {
    [key: string]: CrossItem[];
};

const crossModels: CrossModels = {
    adidas: adidasArr,
    puma: pumaArr,
    nike: nikeArr,
};


export const Model: React.FC = () => {

    const { brand, id } = useParams();

    if (!brand || !id || !crossModels[brand.toLowerCase()]) {
        return <h4>Некорректный запрос</h4>;
    }

    const currentArray = crossModels[brand.toLowerCase()];
    const currentModel = currentArray.find((el) => el.id === Number(id));





    return (

        <div style={{ textAlign: 'center' }}>
            {currentModel ? (
                <>
                    <h4>{currentModel.model}</h4>
                    <h5>{currentModel.collection}</h5>
                    <h6>{currentModel.price}</h6>
                    <img src={currentModel.picture} alt={currentModel.model} width={'450px'} height={'300px'} />
                </>
            ) : (
                <h2>Такого товара нет в наличии</h2>
            )}
        </div>
    );
};
