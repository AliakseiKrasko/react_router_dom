import React from 'react';
import adidasModel1 from './../../assets/AdiFOM_TRXN_Shoes_Black_IG7453_01_standard.webp';
import adidasModel2 from './../../assets/Superstar_XLG_Shoes_Black_IG9777_01_standard.webp';
import adidasModel3
    from './../../assets/PostMove_Mid_Cloudfoam_Super_Lifestyle_Basketball_Mid_Classic_Shoes_Black_GY7163_01_standard.webp'
import {Link} from 'react-router-dom';


export type AdidasItem = {
    id: number;
    model: string;
    collection: string;
    price: string;
    picture: string;
}
export const adidasArr: AdidasItem[] = [
    {
        id: 1,
        model: 'ADIDAS ADIFOM TRXN',
        collection: 'new collection1',
        price: '100200$',
        picture: adidasModel1,

    },
    {
        id: 2,
        model: 'ADIDAS ADIFOM SUPER',
        collection: 'new collection22',
        price: '200300$',
        picture: adidasModel2
    },
    {
        id: 3,
        model: 'ADIDAS SUPER SUPERSKI',
        collection: 'new collection333',
        price: '300400$',
        picture: adidasModel3
    }
]

export const ADIDAS = () => {
    return (
        <div>
            <h2 style={{textAlign: 'center'}}> ADIDAS</h2>
            <div style={{display: 'flex', gap: '20px', justifyContent: 'space-around'}}>
                {adidasArr.map((adidas) => (
                    <Link key={adidas.id} to={`/adidas/${adidas.id}`}>
                                <img width={'250px'}
                                     src={adidas.picture}
                                     alt={'ADIDAS'}
                                />

                    </Link>
                ))}
            </div>
            <p>
                Adidas is a German company specializing in the production of sports shoes, clothing and accessories. Its history begins in the 1920s in Herzogenaurach, Germany, where Adolf “Adi” Dassler began developing athletic shoes. In 1924, he and his brother Rudolf founded the Gebrüder Dassler Schuhfabrik (Dassler Brothers Shoe Factory).
                In 1947, after the relationship between the brothers broke down, Adolf founded Adidas and Rudolf founded Puma, beginning a long rivalry between the brands.
                The name “Adidas” is derived from an abbreviation of the founder's first and last name: “Adi” is a diminutive of Adolf, and “Das” is the first three letters of the surname Dassler.
                Since its founding, Adidas has introduced many innovations in the sports industry and has become one of the world's leading brands in this field.

            </p>
        </div>
    );
};

