import { Articles } from "./Articles";
import "./Articles.css"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


export const ArticleList = () => {

    const [articles, setArticles] = useState([])
    const navigate = useNavigate()
    const localGlutenfreeUser = localStorage.getItem("glutenfree_user")
    const glutenfreeUserObject = JSON.parse(localGlutenfreeUser)

    const getArticles = () => {

        fetch(`http://localhost:8088/articles`)
            .then(response => response.json())
            .then((articleArray) => {
                setArticles(articleArray)
            })

    }
    useEffect(
        () => {
            fetch(`http://localhost:8088/articles`)
                .then(response => response.json())
                .then((articleArray) => {
                    setArticles(articleArray)
                })
        }, []
    )


    return <>
        {
            <h2 className="articleHeader">Articles to help you reach your Gluten-Free Lifestyle with ease</h2>
        }
        {
            articles.map(
                (article) => <Articles key={article.id}
                    getArticles={getArticles}
                    currentUser={glutenfreeUserObject}
                    articleObject={article} />
            )
        }
    
    </>

}