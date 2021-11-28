import React from 'react';
import Recipe from './recipe';
import './recipes.css';



const Recipes = ({recipes}) => {
    
    return (
    <div className="container recipes">
        {  recipes.map(item=> (
            <Recipe key={item.recipe.label} 
            title={item.recipe.label}
                calories={Math.floor(item.recipe.calories)}
                image={item.recipe.image}
                ingredients={item.recipe.ingredients}/>
             )           
            )
         }
    </div>
           
      );
}
 
export default Recipes;