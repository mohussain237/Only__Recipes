import React from "react"

const Products = ({title, calories, image, ingredients}) =>{
    return (
        <div>
       
        <h1>{ title}</h1>
        <ul>
        { ingredients.map ((ingr)=> (
            <li> {ingr.ingredients.text}</li>

        ))}
        </ul>
        <img src= {image} alt={title}/>
        <p> KCal: {calories}</p>
        
        
        </div>
    )
}
export default Products