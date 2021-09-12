import React from "react"
import style from "./product.css"

const Products = ({title, calories, image, ingredients}) =>{
    return (
        <div className= {style.box}>
       
        <h2 className= {style.title}>{ title}</h2>
      <ul> {ingredients.map((ingnt)=> (
          <li className= {style.text}> {ingnt.text}</li>
      )) }</ul>
      <h4 className={style.kcal}> Calories :- {calories}</h4>
        <img src= {image} alt={title} className= {style.image}/>
        
        
        </div>
    )
}
export default Products