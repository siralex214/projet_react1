import React from 'react';

const Article = (props) => {
    const {article} = props;
    const dateParser = (date) => {
        let newDate = new Date(date).toLocaleDateString('fr-FR', {
            year: "numeric",
            day: "numeric",
            month: "long",
            hour: "numeric",
            minute: "numeric",
            second: "numeric"
        })
        return newDate
    }
    // console.log(article)

    return (
        <div className="article">
            <div className="card-header">
                <h3>{article.author}</h3>
                <em>Posté le {dateParser(article.date)}</em>
            </div>
            <p>{article.content}</p>
            <div className="btn-container">
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
    );
};

export default Article;