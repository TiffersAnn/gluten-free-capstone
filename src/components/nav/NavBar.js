import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"
import allergyButton from "../../images/allergyButton.jpg" 


export const NavBar = () => {
    const navigate = useNavigate()

    return (
        <>
        <section className="navTop">
        <div className="navTitle">
            <img src={allergyButton} alt="GF" width="100" height="100" />        
            <h1 className="title">Gluten Free Cooking</h1>

        </div>
        <div className="navbar">
            
        
                <Link className="navbar__link" to="/">Home</Link>
            
                <Link className="navbar__link" to="/articles">Articles</Link>
                <Link className="navbar__link" to="/comments">Comments</Link>
                <Link className="navbar__link" to="" onClick={() => {
                    //sessionStorage.removeItem("activeUser")
                    localStorage.removeItem("glutenfree_user")
                    navigate("/", { replace: true })
                }}>Logout</Link>
            
        </div>
        </section>
    
    </>
    )
}