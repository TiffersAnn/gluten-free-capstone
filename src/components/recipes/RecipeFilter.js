import { useState, useEffect } from "react"


export const RecipeFilter = ({setFiltered}) => {
   
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
        
            
            <fieldset class="filter">
                <label for="filtered">Filter By:</label><br></br>
                
                    <select 
                    onChange={
                       
                        (evt)=> {
                         const copy = evt.target.value
                         
                         setFiltered(copy)   
                        }}        
                    >         
                    {typeItem}
                                
                            
                    
                       
                    </select>
                        
                    
                
            </fieldset>
                    
       
        
    )

}     