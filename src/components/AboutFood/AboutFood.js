import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
const AboutFood = () => {
    const { foodDetail } = useParams();
    const [ about, setAbout ] = useState( {} )
    useEffect( () => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${ foodDetail }`;
        fetch( url )
            .then( res => res.json() )
            .then( data => setAbout( data.meals[0] ) );
    }, [] );
    console.log( about );
    const { idMeal, strArea, strCategory, strInstructions, strMeal, strMealThumb, strYoutube } = about;
    const { strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9 } = about;
    console.log(strYoutube);
    return (
        <div>
            <div className="container px-3 text-left mx-auto mt-5">
                 <Link className="text-2xl transition-all duration-200 ease-in-out hover:text-red-600" to="/foods"><i class="fas fa-arrow-left"></i></Link>
            </div>
            <div className="container py-10 border-t px-3 pt-5 border-green-600 mx-auto mt-5 md:grid grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="">
                    <img className="mt-3" src={ strMealThumb } alt="" />
                </div>
                <div className="text-left  lg:col-span-2">
                    <h3 className="text-2xl mb-1">Name : { strMeal}</h3>
                    <h3 className="text-2xl mb-1">Made : {strArea }</h3>
                    <h3 className="text-2xl mb-1">Food Id : { idMeal}</h3>
                    <h3 className="text-2xl mb-1">Food Category : { strCategory }</h3>
                    <a className="cursor-pointer text-xl text-red-600" target="_blank" href={ `${ strYoutube }` }> <i class="fab fa-youtube"></i> Watch video</a>
                    <p className="text-justify mt-2">{strInstructions }</p>
                </div>
            </div>
        </div>
    );
};

export default AboutFood;


