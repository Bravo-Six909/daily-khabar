import { useState, useEffect } from "react";
import NewsCard from "./NewsCard";
import "./News.css";


const News = ({categories}) => {

    const [newsItem, setNewsItem] = useState([]);

    useEffect(() => {
        const fetchapi = async () => {
            const res = await fetch(`/api/1/news?apikey=pub_2193a11a5a27c83a8c9502f291097ea53c12&language=en&country=in&category=${categories}`);
            const resjson = await res.json();
            setNewsItem(resjson.results);
        }

        fetchapi();

    }, []);


    return (
        <div>
            <h3 className="news-head">Welcome to Daily- Khabar</h3>
            <h1 className="news-heading">Here are some of the top headlines on {categories}</h1>
            <div className="cardContainer">
                {!newsItem ? <img className="loading" src="https://miro.medium.com/max/700/1*CsJ05WEGfunYMLGfsT2sXA.gif" alt="Loading" /> :
                    newsItem.map((item, i) => {
                        return (
                            <NewsCard className="items" key={i} style={item} img={item.image_url} title={item.title} body={item.description} time={item.pubDate} author={item.creator} url={item.link}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default News
