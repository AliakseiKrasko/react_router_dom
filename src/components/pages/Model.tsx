import React from 'react';
import { useParams } from 'react-router-dom';
import { adidasArr } from './ADIDAS';
import { pumaArr } from './PUMA';
import { nikeArr } from './NIKE';

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
    const { brand, id } = useParams<{ brand?: string; id?: string }>();

    // Проверка на наличие brand и id
    if (!brand || !id) {
        return <h4>Некорректный запрос: отсутствует brand или id</h4>;
    }

    // Проверка, что id является числом
    const parsedId = Number(id);
    if (isNaN(parsedId)) {
        return <h4>Некорректный ID: ID должен быть числом</h4>;
    }

    // Проверка, что brand существует в crossModels
    const lowerCaseBrand = brand.toLowerCase();
    if (!crossModels[lowerCaseBrand]) {
        return <h4>Некорректный бренд: {brand} не поддерживается</h4>;
    }

    // Поиск модели по ID
    const currentArray = crossModels[lowerCaseBrand];
    const currentModel = currentArray.find((el) => el.id === parsedId);

    // Если модель не найдена
    if (!currentModel) {
        return <h2>Товар с ID {parsedId} не найден в бренде {brand}</h2>;
    }

    // Отображение данных модели
    return <div style={{ textAlign: 'center' }}>
        <h4>{currentModel.model}</h4>
        <h5>{currentModel.collection}</h5>
        <h6>{currentModel.price}</h6>
        <img
            src={currentModel.picture}
            alt={currentModel.model}
            width={'450px'}
            height={'300px'}
        />
    </div>;
};