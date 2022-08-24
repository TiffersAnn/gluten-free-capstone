import { useState } from "react";

export const RecipeForm = ({getRecipes}) => {
    const [recipe, update] = useState({
        name: "",
        ingredients: "",
        directions: "",
        userId: 0
    })
    
    const localGlutenfreeUser = localStorage.getItem("glutenfree_user")
    const glutenfreeUserObject = JSON.parse(localGlutenfreeUser)

    const saveButtonClick = (event) => {
        event.preventDefault()
        const recipeToSendToAPI = {
            userId: glutenfreeUserObject.id,
            name: recipe.name,
            ingredients: recipe.ingredients,
            directions: recipe.directions
        }
        return fetch(`http://localhost:8088/recipes`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(recipeToSendToAPI)
        })
            .then(response => response.json())
            .then(()=> 
                getRecipes()
            )
            .then (()=> {
                update({
                    name: "",
                    ingredients: "",
                    directions: "",
                    userId: 0
                })
            })
                       
    }
    return(
        <form className="recipeForm">
            {/* <h2 className="recipeForm__title"></h2> */}
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
                                update(copy)
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
                            update(copy)
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
                            update(copy)
                        }
                    } />
                </div>
            </fieldset>
            <button
                onClick={(clickEvent)=> saveButtonClick(clickEvent)}
                className="btn btn-primary">
                Submit Recipe
            </button>
        </form>
    )
    
}