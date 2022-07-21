import React from "react";
import {Link} from "react-router-dom"

export default function MealCard({mealName, mealThumbnail, mealId}){
  return(
    
    <div className="card" style={{width: 18+"rem"}}>
      <img src={mealThumbnail} class="card-img-top" alt={mealName}/>
      <div className="card-body">
        <h5 className="card-title">{mealName}</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <Link to={`/meal/${mealId}`} class="btn btn-primary">Details</Link>
      </div>
    </div>
   
  )
}