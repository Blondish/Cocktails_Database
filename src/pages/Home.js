import React from "react";
import CocktailList from './../components/CocktailList';
import SearchForm from './../components/SearchForm';

export default function Home() {

  const [cocktails, setCocktails] = React.useState([])
  const [loading, setLoading] = React.useState(false);
  const [search, setSearch] = React.useState('a')

  React.useEffect(() => {
    setLoading(true)
    async function getDrinks() {
      try {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`
        const response = await fetch(url);
        const data = await response.json();
        const { drinks } = data;

        if (drinks) {
          const newCocktails = drinks.map(item => {
            const { idDrink, strDrink, strAlcoholic, strGlass, strDrinkThumb } = item;
            return {
              id: idDrink,
              name: strDrink,
              image: strDrinkThumb,
              info: strAlcoholic,
              glass: strGlass
            }
          })
          setCocktails(newCocktails)
        } else {
          setCocktails([])
        }
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    }
    getDrinks()
  }, [search])

  return <main>
    <SearchForm setSearch={setSearch} />
    <CocktailList loading={loading} cocktails={cocktails} />
  </main>;
}


// React.useEffect(() => {
//   const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`
//   fetch(url)
//     .then(response => response.json())
//     .then(data => setCocktails(data.drinks))
// }, [search])
