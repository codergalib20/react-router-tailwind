import React from 'react';
import { Link } from "react-router-dom";



const Foods = ( props ) => {
    const {idMeal,strMeal, strArea, strCategory, strInstructions, strMealThumb } = props.meal;
    return (
        <div className="transition-all mb-5 sm:mb-0 duration-300 ease-in-out shadow-lg hover:shadow-xl border-t-8 border-green-300 rounded-t-xl">
            <div className="p-5">
                <Link to={ `/food/${ idMeal }` }>
                   <div className="overflow-hidden">
                    <img className=" transform scale-100 transition-all duration-300 ease-linear hover:scale-125" src={ strMealThumb } alt="" />
                    </div>
                    <h2 className="border-t my-2 border-green-500 text-2xl text-green-500 font-medium capitalize">{ strMeal }</h2>
                    <h2 className="text-xl text-red-500 font-medium uppercase">{ strArea }</h2>
                    <h3 className="text-lg">{ strCategory }</h3>
                    <p className="text-justify">{ strInstructions.substring( 0, 200 ) }</p>
                </Link>
            </div>
        </div>
    );
};

export default Foods;