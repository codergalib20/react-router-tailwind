import React, { useEffect, useState } from 'react';
import Foods from '../Foods/Foods';

const Restaurants = () => {
    const [display, setDisplay] = useState([])
    const [ fieldText, setField ] = useState( '' );
    const [searchText, setSearchText] = useState('')
    const changeInputText = event => {
        const newInputField = event.target.value;
        setSearchText( newInputField )
        const matchProducts = meals.filter( meal => meal.strMeal.toLowerCase().includes( newInputField.toLowerCase() ) )
        {
            setDisplay( matchProducts );
        }
    }
    const [ meals, setMeals ] = useState( [] );
    useEffect( () => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${fieldText}`
        fetch( url )
            .then( res => res.json() )
            .then( data => {
                setMeals( data.meals )
                setDisplay(data.meals)
            } )
    }, [] )
    return (
        <div >
            <section className="bg-green-500 py-6">
                <div className="container mx-auto px-3 grid grid-cols-2">
                    <input onChange={ changeInputText } className="placeholder-red-700 border border-red-700 py-1 px-4 md:rounded-full w-full outline-none" type="text" placeholder="Search your food" />
                    <h3 className="text-right text-xl uppercase text-white">Type : { searchText.length } letter... { searchText==='' ? 0 : searchText.split(' ').length }</h3>
                </div>
            </section>
            <section className="container px-3 mx-auto">
                    <h2 className="text-2xl py-3 font-normal text-red-600">{ display.length === 0 ? 'Please search a related product name' : `Showing Result is : ${display.length}`}</h2>
            </section>
            <section className="grid px-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-5 gap-4 container mx-auto">
                {
                    display.map( meal => <Foods key={meal.key} meal={ meal }></Foods>)
                }
            </section>
        </div>
    );
};

export default Restaurants;