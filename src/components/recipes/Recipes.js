import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const Recipes = ({recipeObject, getRecipes, currentUser}) => {
    const navigate = useNavigate()
    const deleteButton = () => {
        return <button onClick={() => {
            fetch (`http://localhost:8088/recipes/${recipeObject.id}`,{
                method: "DELETE"
            })
            .then(() => {
                getRecipes()
            })
        }}className="recipe__delete">Delete</button>
    }

    const editButton = () => {
        return <button onClick ={() => {
            navigate(`recipes/${recipeObject.id}/edit`)
        }}className="recipe__edit">Edit</button>
    }

    return <section className ="recipe" key={`recipe--${recipeObject.id}`}>
        <header>
            {
                currentUser.userId
                    ?`Recipe ${recipeObject.id}`
                    : <Link to={`/recipes/${recipeObject.id}`}>{recipeObject.name}</Link>
            }
            
        </header>
        <section>{recipeObject.categoryId}</section>
        <footer>
            {
                editButton()
            }
            {
                deleteButton()
            }
        </footer> 
    </section>
}