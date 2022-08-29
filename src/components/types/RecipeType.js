import { useState, useEffect } from "react"


export const RecipeType = ({update, recipe}) => {
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
        <option key={type.id} value={type.id}>{type.typeName}</option>
        )
     

    return (
    <>
        
            <fieldset class="categories">
            <label for="categories">Type:</label><br></br>
                {
                <select 
                onChange={
                    (evt)=> {
                        const copy = {...recipe}
                        copy.typeId = evt.target.value
                        update(copy)}}
                        > 
                    
                    {typeItem}    
                
                        
                </select>
                
                }
                
            </fieldset>
       
   
   </> 
    )
}