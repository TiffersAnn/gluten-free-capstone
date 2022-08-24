import { Outlet, Route, Routes } from "react-router-dom";
import { RecipeEdit } from "../recipes/RecipeEdit";
import { RecipeForm } from "../recipes/RecipeForm";
import { RecipeDetails } from "../recipes/RecipeDetails";
import Card from 'react-bootstrap/Card';
import { RecipeContainer } from "../recipes/RecipeContainer";
import { ArticleList } from "../articles/ArticleList";


export const ApplicationViews = () => {
    return <Routes>
        <Route path="/" element={
            <>
                <RecipeContainer />
            <Card>
                <Card.Header className="cardHeader">Gluten-Free Lifestyle</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
          <p>
            {' '}
            “The gluten free diet taught me to cook. Now cooking is my hobby and a part of my routine to stay fit and healthy.”{' '}
          </p>
            <footer className="blockquote-footer">
            --Mary Lou Smith
            </footer>
                    </blockquote>
                </Card.Body>
                <Card.Body>
                    <blockQuote className ="quote">
                        <p>
                            {' '}
                            
                            “When someone doesn’t understand your disease, tell them to be thankful they don’t need to know.”{' '}
                        </p>
                        <footer className ="blockquote-footer">
                            --Lucille Nelson
                        </footer>
                    </blockQuote>
                </Card.Body>
            </Card>
  




                <Outlet />
            </>
        } />
        <Route path="recipes/create" element={<RecipeForm />} />
        <Route path="articles/" element={<ArticleList />} />
        <Route path="recipes/:recipeId/edit" element={<RecipeEdit />} />
        <Route path ="recipes/:recipeId" element={<RecipeDetails />} />
        
    </Routes> 
}
