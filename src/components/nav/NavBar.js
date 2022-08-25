import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"


export const NavBar = () => {
    const navigate = useNavigate()

    return (
        <>
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
    
    </>
    )
}