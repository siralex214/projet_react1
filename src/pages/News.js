import React, {useEffect, useState} from 'react';
import Navigation from "../components/Navigation";
import Logo from "../components/logo";
import axios from "axios";
import Article from "../components/Article";


const News = () => {
    const [data, setData] = useState([]);
    const [sortedData, setSortedData] = useState([])
    const [playOnce, setPlayOnce] = useState(true)

    useEffect(() => {
        if (playOnce == true) {
            axios
                .get(
                    "http://localhost:3010/articles"
                )
                .then((res) => {
                    setData(res.data)
                    setPlayOnce(false)
                })
            // console.log(data)
        }


    }, [data, playOnce])


    return (

        <div className="news-container">
            <Navigation/>
            <Logo/>
            <h1>News</h1>

            <form>
                <input type="text" placeholder="nom"/>
                <textarea placeholder="Message"></textarea>
                <input type="submit" value="envoyer"/>
            </form>
            <ul>
                {data.map((article)=>(
                    <Article key={article.id} article={article}/>
                ))}
            </ul>
        </div>
    );
};

export default News;