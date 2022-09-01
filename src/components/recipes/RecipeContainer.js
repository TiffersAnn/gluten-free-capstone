import { RecipeList } from "./RecipeList"
import { RecipeForm } from "./RecipeForm"
import { useState, useEffect } from "react"
import "./Recipes.css"
import { RecipeFilter } from "./RecipeFilter"


export const RecipeContainer = () => {
    const [recipes, setRecipes] = useState([])
    const [showRecipes, setShowRecipies] = useState([])
    const [filtered, setFiltered] = useState(0)

    const getRecipes = () => {
        fetch(`http://localhost:8088/recipes`)
            .then(response => response.json())
            .then((recipeArray) => {
                setRecipes(recipeArray)
            })
    }

    useEffect(
        () => {
            fetch(`http://localhost:8088/recipes`)
                .then(response => response.json())
                .then((recipeArray) => {
                    setRecipes(recipeArray)
                })
        }, []
    )

    useEffect(
        () => {
            if(!filtered){
                setShowRecipies(recipes)
            }
            else{

                const filteredRecipes = recipes.filter(x=> x.typeId == filtered)
                setShowRecipies(filteredRecipes)
            }
        }, [filtered, recipes]
    )

    return (
        <>
        <section className="mainContainer">
            <div>
            
                <h2 className="recipeTitle">Recipes</h2>
                <RecipeFilter setFiltered={setFiltered} />
            
            
                    <RecipeList recipes={showRecipes} getRecipes={getRecipes} />
                    </div>
            
            <div>
                <h2>Add New Recipes</h2>
                    <RecipeForm getRecipes={getRecipes}/>
            </div>
            
        </section>
        </>
    )
}


