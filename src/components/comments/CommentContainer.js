import { CommentList } from "./CommentList";
import { useState, useEffect, useRef } from "react";
import "./Comments.css"


export const CommentContainer = () => {
    const [comments, setComments] = useState([])
    
    const getComments = () => {
        fetch(`http://localhost:8088/comments`)
            .then(response => response.json())
            .then((commentArray) => {
                setComments(commentArray)
            })
    }

    useEffect(
        () => {
            fetch(`http://localhost:8088/comments`)
                .then(response => response.json())
                .then((commentArray) => {
                    setComments(commentArray)
                })
        }, []
    )

                
   
       
      

    return <>
    <article className="commentPage">
        <div className="commentSection">

    <CommentList />
    
        </div>

    </article>
    
    </>
}