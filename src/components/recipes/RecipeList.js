import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Recipes } from "./Recipes";
import "./Recipes.css"

export const RecipeList = ({recipes, getRecipes}) => { 
    
    const [fileredRecipes, setFiltered] = useState([])
    const navigate = useNavigate()

    const localGlutenfreeUser = localStorage.getItem("glutenfree_user")
    const glutenfreeUserObject = JSON.parse(localGlutenfreeUser)

    

    useEffect(
        () => {
            const myRecipes = recipes.filter(recipe => recipe.userId === glutenfreeUserObject.id)
            setFiltered(myRecipes)
        },
        [recipes]
    )

    return <>
        {
            // <button onClick={() => navigate("/recipes/create")}>New Recipe</button>
        }
        <article className="recipes">
            {
                fileredRecipes.map(
                    (recipe) => <Recipes key={recipe.id}
                        getRecipes={getRecipes}
                        currentUser={glutenfreeUserObject}
                        recipeObject={recipe} />
                )
            }
        </article>
    </>
}