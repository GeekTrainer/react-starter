import './index.css'
import React, { useEffect, useState } from 'react';
import RecipeTitle from './RecipeTitle'
// TODO: Import IngredientList
import IngredientList from './IngredientList'

function App() {
    // TODO: Add recipe object
    const tempRecipe = {
        title: 'Mashed potatoes',
        feedback: {
            rating: 4.8,
            reviews: 20
        },
        ingredients: [
            { name: '3 potatoes, cut into 1/2" pieces', prepared: false },
            { name: '4 Tbsp butter', prepared: false },
            { name: '1/8 cup heavy cream', prepared: false },
            { name: 'Salt', prepared: true },
            { name: 'Pepper', prepared: true },
        ]
    };

    const [ recipe, setRecipe ] = useState(tempRecipe);

    const [ prepared, setPrepared ] = useState(false);

    function handleIngredientClick(index) {
        const updatedRecipe = { ... recipe };
        updatedRecipe.ingredients[index].prepared = !updatedRecipe.ingredients[index].prepared;
        setRecipe(updatedRecipe);
    }

    useEffect(() => {
        setPrepared(recipe.ingredients.every(i => i.prepared));
    }, [recipe]);

    return (
        <article>
            <h1>Recipe Manager</h1>
            <RecipeTitle title={recipe.title} feedback={recipe.feedback} />
            <IngredientList ingredients={recipe.ingredients} onClick={ handleIngredientClick } />
            { prepared ? <h2>Prep work done!</h2> : <h2>Just keep chopping</h2>}
        </article>
    )
}

export default App;
