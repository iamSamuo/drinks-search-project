import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
const {setSearchTerm} = useGlobalContext();
const searchValue = React.useRef('');


React.useEffect(() =>{
  searchValue.current.focus()
},[])

const searchCocktails = () =>{
 setSearchTerm(searchValue.current.value);
}
const handleSubmit = (e) =>{
 e.preventDefault();
}
  return (
    <section className='section search'>
      <form  className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">
            search tour favorite cocktail
          </label>
          <input 
          type="text" 
          id='name' 
          ref={searchValue} 
          onChange={searchCocktails} 
          />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
