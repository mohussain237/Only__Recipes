import React, { useEffect, useState } from "react"
import axios from "axios";
import './App.css';

function App() {

  const APP_ID = "5f380e2b"
 const APP_KEY =  "d4be733546f6bdc4eda747d629e5cb08"
  const URL = ` https://api.edamam.com/search?q=biryani&app_id=${APP_ID}&app_key=${APP_KEY} `


  const [search , setSearch] = useState("")

 const getRecipes = async ()=>{
   const res = await fetch (` https://api.edamam.com/search?q=biryani&app_id=${APP_ID}&app_key=${APP_KEY}`)
   const data = await res.json()
   console.log(data);




  function handleChange(e){
    console.log(e.target.value);
    setSearch(e.target.value)
  }

  

  useEffect( ()=> {
    getRecipes()
  },[])

  return (
    <div>
     <form className= 'search-form'>
     <input className= 'search-input' type= 'text' value= {search} onChange= {handleChange}/>
     <button  className='search-button' type= 'submit'>Search </button>
        
     </form>
    </div>
  );
}

export default App;
