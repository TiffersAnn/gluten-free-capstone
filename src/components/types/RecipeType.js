import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"



export const RecipeType = () => {
    const localGlutenfreeUser = localStorage.getItem("glutenfree_user")
    const glutenfreeUserObject = JSON.parse(localGlutenfreeUser) 

    const [types, setTypes] = useState([])

    useEffect(() => {
        fetch(`http://localhost:8088/types`)
            .then(response => response.json())
            .then((typeArray)=> {
                setTypes(typeArray)

            })       
           
    },[])

    const typeItem = types.map(type =>
        <option key={type.id}>{type.typeName}</option>
        )
     

    return (
    <>
        <form class="categories">
            <fieldset>
            <label for="categories">Type:</label><br></br>
                {
                <select> 
                
                    {typeItem}    
                
                    
                </select>
                }
                
            </fieldset>
        </form>
   
   </> 
    )
}