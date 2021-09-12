import React from "react"
import style from "./product.css"
const Products = ({title, calories, image, ingredients}) =>{
    return (
        <div className= {style.box}>
       
        <h2 className= {style.title}>{ title}</h2>
      <ul> {ingredients.map((ingnt)=> (
          <li className= {style.text}> {ingnt.text}</li>
      )) }</ul>
        <img src= {image} alt={title} className= {style.image}/>
        <h4 className={style.kcal}> Calories :- {calories}</h4>
        
        
        </div>
    )
}
export default Products