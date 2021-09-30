import React, { useEffect, useState } from 'react';
import OfferProduct from '../OfferProduct/OfferProduct';

const Home = () => {
    const offerId = '53060'
    const [ product, setProduct ] = useState( [] )
    useEffect( () => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${offerId}`
        fetch( url )
            .then( res => res.json() )
            .then( data => setProduct( data.meals ) );
    }, [] )
    return (
        <div>
            <section className="py-32">
                <h1 className="color-image text-4xl md:text-6xl font-bold uppercase">Welcome to Galibs restaurant</h1>
                <h3>Not complete page</h3>
            </section>
            {
                product.map( productInfo => <OfferProduct key={productInfo} product={productInfo}></OfferProduct>)
            }
        </div>
    );
};

export default Home;