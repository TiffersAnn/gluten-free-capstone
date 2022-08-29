import { useState, useEffect } from "react"


export const RecipeFilter = ({setterFunction}) => {
    const localGlutenfreeUser = localStorage.getItem("glutenfree_user")
    const glutenfreeUserObject = JSON.parse(localGlutenfreeUser) 

    const [types, setFiltered] = useState([])

    useEffect(() => {
        fetch(`http://localhost:8088/types`)
            .then(response => response.json())
            .then((typeArray)=> {
                setFiltered(typeArray)

            })       
           
    },[])

    const typeItem = types.map(type =>
        <option key={type.id} value={type.id}>{type.typeName}</option>
    )

    return (
        <>
            
                <fieldset class="filter">
                <label for="filtered">Filter By:</label><br></br>
                    {
                    <select 
                    onChange={
                        (evt)=> {
                            const copy = {...types}
                            copy.typeId = evt.target.value
                            setterFunction(copy)}}> 
                        
                        {typeItem}    
                    
                        
                    </select>
                    
                    }
                
                </fieldset>
           
       
       </> 
    )

}     