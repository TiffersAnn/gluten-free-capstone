import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Comments.css"
import React from "react"


export const Comments = ({reFresh}) => {
    /*
        TODO: Add the correct default properties to the
        initial state object
    */
    const [comment, setComment] = useState({
        userId: 0,
        content:""
    })
    /*
        TODO: Use the useNavigation() hook so you can redirect
        the user to the ticket list
    */
   const navigate = useNavigate()

    const localGlutenfreeUser = localStorage.getItem("glutenfree_user")
    const glutenfreeUserObject = JSON.parse(localGlutenfreeUser)

    const handleSaveButtonClick = (event) => {
        event.preventDefault()
        // TODO: Create the object to be saved to the API
        const commentToSendToApi = {
            userId: glutenfreeUserObject.id,
            content: comment.content,
            
        }

        // TODO: Perform the fetch() to POST the object to the API
        return fetch (`http://localhost:8088/comments`,{
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(commentToSendToApi)
        })
                .then(response => response.json())
                .then(()=>{
        fetch (`http://localhost:8088/comments?_expand=user`)
            .then(response => response.json())
            .then(commentsArray => reFresh(commentsArray))
        })
    }

    return (
        <>
        <div className="mainComments">
        <form className="chatForm">
            <fieldset>
                <section className="form-group">
                    <textarea
                        required autoFocus
                        type="textarea"
                        className="commentInput"
                        placeholder="New comment"
                        value={comment.content}
                        onChange={
                            (evt) => {
                                const copy = {...comment}
                                copy.content = evt.target.value
                                setComment(copy)
                            }
                                              
                        
                        } 
                        rows={5}
                        cols={45} />
                        </section>
            <button
            onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
            className="sendButton">
                Send
            </button>
                
            </fieldset>
        </form>
        
        
        </div>
        </>
    )
    
}