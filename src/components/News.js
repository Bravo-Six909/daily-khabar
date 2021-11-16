import { useState, useEffect } from "react";
import NewsCard from "./NewsCard";
import "./News.css";


const News = ({categories}) => {

    const [newsItem, setNewsItem] = useState([]);

    useEffect(() => {
        const fetchapi = async () => {
            const res = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${categories}&apiKey=${process.env.REACT_APP_API_KEY}`);
            const resjson = await res.json();
            setNewsItem(resjson.articles);
        }

        fetchapi();

    }, []);


    return (
        <div>
            <h3 className="news-head">Welcome to Daily- Khabar</h3>
            <h1 className="news-heading">Here are some of the top headlines on {categories}</h1>
            <div className="cardContainer">
                {!newsItem ? <img src="https://miro.medium.com/max/700/1*CsJ05WEGfunYMLGfsT2sXA.gif" alt="Loading" /> :
                    newsItem.map((item, i) => {
                        return (
                            <NewsCard className="items" key={i} style={item} img={item.urlToImage} title={item.title} body={item.description} time={item.publishedAt} author={item.author} url={item.url}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default News
