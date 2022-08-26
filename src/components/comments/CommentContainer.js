import { CommentList } from "./CommentList";
import { Comments } from "./Comments";
import { useState, useEffect, useRef } from "react";
import "./Comments.css"
import normal from "../../images/normal.jpg"

// const INITIAL_HEIGHT= 46


export const CommentContainer = () => {
    const [comments, setComments] = useState([])
    // const[isExpanded, setIsExpanded]= useState(false)
    // const [commentValue, setCommentValue] = useState("")
    // const textRef = useRef(null)
    // const outerHeight = useRef(INITIAL_HEIGHT)
    // const containerRef = useRef(null)

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

                
        //   const onExpand = () => {
        //       if (!isExpanded) {
        //     outerHeight.current = containerRef.current.scrollHeight;
        //     setIsExpanded(true);
        //   }
        //   const onChange = (e) => {
        //     setCommentValue(e.target.value);
        //     }
        //     const onClose = () => {
        //         setCommentValue("");
        //         setIsExpanded(false);
        //       };

        //   }
      
       
      

    return <>
    <article className="commentPage">
    <div className="commentSection">

    <CommentList />
    {/* <Comments /> */}
    </div>

    
    </article>
    
    </>
}