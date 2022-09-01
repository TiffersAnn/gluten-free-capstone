import { useState,useEffect } from "react"
import { Comments } from "./Comments"
import "./Comments.css"

import tilesGF from "../../images/tilesGF.jpg"

export const CommentList = () => {
    const [comments, setComments] = useState([])
    
    useEffect (()=>{
        fetch (`http://localhost:8088/comments?_expand=user`)
        .then(response => response.json())
        .then(commentsArray => setComments(commentsArray))
    },
    []
    )
return<>
<h2>Comments</h2>
<div className="commentHeader">
    <h4>Suggest substitutions, or tips</h4>
    <h4>Share experiences with gluten-free foods</h4>
</div>
<div className="container">
    <article className="messages">
    <div className="container pt-3">
        <div className="scroller">
        {
        comments.map(
            (message) => {
                return <section className="message" key={`${message.id}`}>
                    <div>{message?.user?.userId}{message.content}
                    <span className="whitespace">
                        {message?.user?.fullName}</span>
                        {/* <Link to={`/chats/${chat.id}/edit`}>Edit</Link> */}
                        
                        </div>
                </section>
            }
        )
        }
        </div>
    </div>
    
    <Comments reFresh={setComments} />
    </article>
    <div classname ="gfArt">
        <img className="tiles" src={tilesGF} alt="tiles" width="376" height="256" />
    </div>
    

</div>

</>
}