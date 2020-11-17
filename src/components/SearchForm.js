import React from "react";

export default function SearchForm({ setSearch }) {

  const searchValue = React.useRef("")
  React.useEffect(() => {
    searchValue.current.focus()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const searchCocktail = () => {
    setSearch(searchValue.current.value)
  }

  return <section className="section">
    <h2 className="section-title">Search Cocktails</h2>
    <form className="form search-form" onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="name">Search for your favourite cocktail </label>
        <input type="text" name="name" id="name" onChange={searchCocktail} ref={searchValue} />
      </div>
    </form>
  </section>;
}
