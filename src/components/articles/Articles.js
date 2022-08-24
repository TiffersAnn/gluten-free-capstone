

export const Articles = ({articleObject}) => {

    return <section className ="article" key={`article--${articleObject.id}`}>
        
        {
           <div className="articles">     
             <a href={articleObject.content} target="_blank" > {articleObject.title}</a>
            </div>
        }
    
    </section>
}
