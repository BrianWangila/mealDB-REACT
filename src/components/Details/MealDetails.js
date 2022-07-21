import React, {useState} from "react";
import {useParams} from "react-router-dom"

const SEARCH_MEAL = "http://www.themealdb.com/api/json/v1/1/lookup.php?i=52772"

export default function MealDetails(){
  
  const [image, setImage] = useState("")
  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("")
  const [instructions, setInstructions] = useState("")

  let {mealId} = useParams()
  const actualSearch = SEARCH_MEAL + mealId

    //function to load items from the internet
    const mealFetcher = () => {
      fetch(actualSearch)
        .then((resp) => resp.json())
        .then((mealData) => {
          const meal = mealData.meals[0]


        })
    }
    useEffect(mealFetcher, [])

  return(
    <div>
      <center>
        <img src={image} style={{height: 200 + "px", width: 200+"px"}}/>
        <h4>{title}</h4>
        <h6 className="badge bg-success">{category}</h6>
        <p>{instructions}</p>
      </center>
    </div>
  )
}