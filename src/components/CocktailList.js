import React from "react";
import Cocktail from './Cocktail';

export default function CocktailList({ cocktails, loading }) {
  if (loading) {
    return <h2 className="section-title">Loading...</h2>
  } if (cocktails.length < 1) {
    return <h2 className="section-title">
      No cocktail matched your search criteria
    </h2>
  }

  return <section className="section">
    <h2 className="section-title">Cocktails</h2>
    <div className="cocktails-center">
      {cocktails.map(cocktail => {
        return <Cocktail key={cocktail.id} cocktail={cocktail} />
      })}
    </div>
  </section>;
}
