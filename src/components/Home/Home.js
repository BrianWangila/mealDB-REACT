import React, {useEffect, useState} from "react";
import MealCard from "../MealCard/MealCard";

const BREAKFAST_MEALS = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast"

function Home(){

  const [meals, setMeals] = useState([])

  //function to load items from the internet
  const mealFetcher = () => {
    fetch(BREAKFAST_MEALS)
      .then((resp) => resp.json())
      .then((mealData) => {
        meals = mealData.meals
      })
  }
  useEffect(mealFetcher, [])

  let mealCards = meals.map((meal) => { <MealCard mealName={meal.strMeal} mealThumbnail={meal.strMealThumbnail} mealId={meal.strIdMeal} />})

  return(
    <div className="container">
      <h2>Home</h2>
      <div className="row">
       {mealCards}
      </div>
    </div>
  )
}


export default Home

