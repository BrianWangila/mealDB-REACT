import React, {useState, useEffect} from "react";


const SEARCH_MEAL = "https://www.themealdb.com/api/json/v1/1/search.php?s=m"

function Search (){

  constr [searchItem, setSearchItem] = useState("")
  const [counter, setCounter] = useState(0)
  const [results, setResults] = useState(0)

  const handleSearch = (event) => {       //search input
    setSearchItem(event.target.value)
  }

  const handleSearchSubmit = (event) =>{    //submit search terms
    event.preventDefault()
    setCounter(counter + 1)
  }


  const searchInfo = () => {
    const actualSearch = SEARCH_MEAL + mealId

    fetch(actualSearch)
    .then((resp) => resp.json())
    .then((mealData) => {
      setResults(mealData)
      mealData.forEach((meal) => {
        const meal = mealData.meals[0]

      })

    })
  }
  useEffect (searchInfo, [counter])

  return (
    <div className="container">
      Search
      <form onSubmit={handleSubmit}>
        <div>
          <label className="form-label">SEARCH MEAL</label>
          <input type="text" className="form-control" id="search" name="search" value={searchItem} />
        </div>
      </form>
      <h3 className="nt-4">SEARCH RESULTS ({})</h3>
      <div className="row">

      </div>

    </div>
  )
}
export default Search