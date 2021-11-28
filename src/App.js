import React,{useEffect,useState} from 'react';

import Recipes from './component/recipes';
import Header from './header';


const App = () => {
  const APP_ID="4c321612";
  
  const [recipes,setRecipe]=useState([]);
  const [search,setSearch]=useState('');
  const [query,setQuery]= useState('chicken');

  const APP_KEY="9c6ee8db49b043d21369c057bea312fa";
  const url= `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;



  useEffect(()=>{
   getRecipes(); 
  },[query]);

  const getRecipes= async ()=>{
    const response=await fetch(url);
    const data= await response.json();
      console.log(data.hits);
     setRecipe(data.hits);
  }

 const getSearch=event=>{
    event.preventDefault();
    setQuery(search);
    // console.log(search);
 }

 const updateSearch=e=>{
  //  console.log(e.target.value);
   setSearch(e.target.value);
 }



  return ( 
    <div>
        <Header update={updateSearch} get={getSearch}/>

         <Recipes recipes={recipes}/>
  
    </div>
    );
}
 
export default App;


