import { Outlet, Route, Routes } from "react-router-dom";
import { RecipeEdit } from "../recipes/RecipeEdit";
import { RecipeForm } from "../recipes/RecipeForm";
import { RecipeDetails } from "../recipes/RecipeDetails";
import Card from 'react-bootstrap/Card';
import { RecipeContainer } from "../recipes/RecipeContainer";
import { ArticleList } from "../articles/ArticleList";
import { CommentList } from "../comments/CommentList";
import { CommentContainer } from "../comments/CommentContainer";


export const ApplicationViews = () => {
    return <Routes>
        <Route path="/" element={
            <>
                <RecipeContainer />
            <Card>
                <Card.Header className="cardHeader">Gluten-Free Lifestyle</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote">
          <p>
            {' '}
            “The gluten free diet taught me to cook. Now cooking is my hobby and a part of my routine to stay fit and healthy.”{' '}
          </p>
            <div className="blockquote-footer">
            --Mary Lou Smith
            </div>
                    </blockquote>
                </Card.Body>
                <Card.Body>
                    <blockQuote className ="quote">
                        <p>
                            {' '}
                            
                            “When someone doesn’t understand your disease, tell them to be thankful they don’t need to know.”{' '}
                        </p>
                        <div className ="blockquote-footer">
                            --Lucille Nelson
                        </div>
                    </blockQuote>
                </Card.Body>
            </Card>
            <footer>
        <p>Author: Tiffany Baker</p>
        <p><a href="https://github.com/TiffersAnn">GitHub Link</a></p>
        <p><a href="mailto:tagesner@gmail.com">TAGesner@gmail.com</a></p><p>&copy;</p>
      </footer>




                <Outlet />
            </>
        } />
        <Route path="recipes/create" element={<RecipeForm />} />
        <Route path="articles/" element={<ArticleList />} />
        <Route path="recipes/:recipeId/edit" element={<RecipeEdit />} />
        <Route path ="recipes/:recipeId" element={<RecipeDetails />} />
        <Route path="comments/" element={<CommentList />} />
        <Route path="comments/" element={<CommentContainer />} />
        
    </Routes> 
}
