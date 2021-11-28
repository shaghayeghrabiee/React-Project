import React from 'react';
// import './recipe.css';
import style from './recipe.module.css';
import picStyle from'./recipe.module.css';


const Recipe = ({title,calories,image,ingredients}) => {
    return ( 
        
                <div className={style.recipe}>
                    <div >
                        <img className={picStyle.recipe}  src={image} />
                        <div >
                            <h5>{title}</h5>
                            <p ><strong>calories:</strong> {calories}</p>
                            <h3>Ingredients:</h3>
                        <ol>
                            {ingredients.map(ingredient=>(
                                <li>{ingredient.text}</li>
                            ))}
                        </ol>
                        </div>
                     </div>
                </div>
   
      
     );
}
 
export default Recipe;