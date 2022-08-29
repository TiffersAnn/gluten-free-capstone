import { RecipeList } from "./RecipeList"
import { RecipeForm } from "./RecipeForm"
import { useState, useEffect } from "react"
import allergyButton from "../../images/allergyButton.jpg"
import "./Recipes.css"
import { RecipeFilter } from "../types/RecipeFilter"


export const RecipeContainer = () => {
    const [recipes, setRecipes] = useState([])

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

    return (
        <>
        <section className="mainTitle">
        <img src={allergyButton} alt="GF" width="100" height="100" />        
        <h1 className="title">Gluten Free Cooking</h1>
        </section>
        <section className="mainContainer">
            <div className="news">
                <h2 className="recipeTitle">Recipes</h2>
                    <RecipeFilter setterFunction={setRecipes}/>
                    <RecipeList recipes={recipes} getRecipes={getRecipes} />
            </div>
            <div>
                <h2>Add New Recipes</h2>
                    <RecipeForm getRecipes={getRecipes}/>
            </div>
            
        </section>
        </>
    )
}


