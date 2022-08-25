import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { RecipeCategory } from "./RecipeCategory"

export const RecipeDetails = () => {
    const {recipeId} = useParams()
    const [recipe, updateRecipe] = useState ({})

    useEffect(
        () => {
            fetch(`http://localhost:8088/recipes/${recipeId}`)
                .then(response => response.json())
                .then((data) => {
                    updateRecipe(data)

                })
        },
        [recipeId]
    )

    return <section className="recipeCard">
        <h2 className="recipe_header">{recipe.name}</h2>
        <h3>Ingredients:</h3>
        <div> {recipe.ingredients}</div><br></br>
        <h3>Directions:</h3>
        <div>{recipe.directions}</div>
        {/* <RecipeCategory /> */}
    </section>
    
}