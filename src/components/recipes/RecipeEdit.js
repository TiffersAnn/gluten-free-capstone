import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const RecipeEdit = () => {
    const [recipe, assignRecipe] = useState({
        name: "",
        ingredients: "",
        directions: ""
    })

    const {recipeId} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`http://localhost:8088/recipes/${recipeId}`)
            .then(response => response.json())
            .then((data)=> {
                assignRecipe(data)
            })
    }, [recipeId])

    const editButtonClick = (clickEvent) => {
        clickEvent.preventDefault()

        return fetch(`http://localhost:8088/recipes/${recipe.id}`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(recipe)
        })
        .then(response => response.json())
        .then(() => {
            navigate("/")
        })
    }
    return (
        <form className="recipeForm">
            <h2 className="recipeForm__title">Edit Recipe</h2>
            <fieldset>
                <div className ="form">
                    <label htmlFor="name">Recipe Name:</label>
                        <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Name of recipe"
                        value={recipe.name}
                        onChange={
                            (evt)=> {
                                const copy = {...recipe}
                                copy.name = evt.target.value
                                assignRecipe(copy)
                            }
                        } />
                </div>                
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="ingredients">Ingredients:</label>
                    <input
                    required autoFocus
                    type="text"
                    className="form-control"
                    placeholder="List of ingredients with quantities"
                    value={recipe.ingredients}
                    onChange={
                        (evt)=> {
                            const copy = {...recipe}
                            copy.ingredients = evt.target.value
                            assignRecipe(copy)
                        }
                    } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="directions">Directions:</label>
                    <input
                    required autoFocus
                    type="text"
                    className="form-control"
                    placeholder="List directions in order by #s"
                    value={recipe.directions}
                    onChange={
                        (evt)=> {
                            const copy = {...recipe}
                            copy.directions = evt.target.value
                            assignRecipe(copy)
                        }
                    } />
                </div>
            </fieldset>
            <button
                onClick={(clickEvent)=> editButtonClick(clickEvent)}
                className="btn btn-primary">
                Save Edits
            </button>
        </form>
    )
}