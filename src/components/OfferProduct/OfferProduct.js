import React from 'react';
import './OfferProduct.css';
const OfferProduct = ( props ) => {
    const offerSectionStyle = {
        background: 'rgb(242,68,68)',
        background: 'radial-gradient(circle, rgba(242,68,68,1) 0%, rgba(16,185,129,1) 71%)',
    }
    console.log( props.product )
    const { idMeal, strMeal, strArea, strCategory, strInstructions, strMealThumb } = props.product;
    return (
        <div>
 
            {/* Offer Section  */}
            <section style={offerSectionStyle}>
                <h1 className="text-4xl font-semibold text-white py-3 pt-10 capitalize">Offer Product only today</h1>
                <div className="product py-20 text-white container mx-auto md:grid grid-cols-3 py-7">
                    <div>
                        <img className="w-60 mx-auto h-60 rounded-full md:rounded-none" src={ strMealThumb } alt="" />
                    </div>
                    <div className="text-center mt-6 md:mt-0 lg:text-left col-span-2 flex h-full justify-center flex-col">
                        <h2 className="text-2xl">Coupon { idMeal }</h2>
                        <h2 className="text-2xl">Food name : { strMeal }</h2>
                        <h2 className="text-2xl">Made : { strArea }</h2>
                        <h2 className="text-2xl">Meal Category : { strCategory }</h2>
                        <p className="text-xl">{ strInstructions.substring(0,100)}</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OfferProduct;