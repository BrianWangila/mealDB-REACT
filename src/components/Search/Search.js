import React, {useState, useEffect} from "react";


const SEARCH_MEAL = "https://www.themealdb.com/api/json/v1/1/search.php?s=m"

function Search (){

  const [searchItem, setSearchItem] = useState("")
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
    const actualSearch = SEARCH_MEAL + searchItem

    fetch(actualSearch)
    .then((resp) => resp.json())
    .then((mealData) => {
      setSearchItem("")
      setResults(mealData.meals == null ? 0 : mealData.meals.length)

    })
  }
  useEffect (searchInfo, [counter])

  return (
    <div className="container">
      
      <form onSubmit={handleSearchSubmit}>
        <div>
          <label htmlFor="search" className="form-label">SEARCH MEAL</label>
          <input type="text" className="form-control" id="search" name="search" value={searchItem} onChange={handleSearch} />
        </div>
      </form>
      <h3 className="mt-4">SEARCH RESULTS ({results})</h3>
      <div className="row">

      </div>

    </div>
  )
}
export default Search