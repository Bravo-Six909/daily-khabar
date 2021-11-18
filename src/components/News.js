import { useState, useEffect } from "react";
import NewsCard from "./NewsCard";
import "./News.css";


const News = ({ categories }) => {

    const [newsItem, setNewsItem] = useState([]);

    useEffect(() => {
        fetch(`https://newscatcher.p.rapidapi.com/v1/search_free?q=${categories}&lang=en&media=True`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "newscatcher.p.rapidapi.com",
                "x-rapidapi-key": "4b827ef1aamsh0da637f6804c35bp1dd115jsn2511a29bc1ab"
            }
        })
            .then(response => response.json()).then(datas => setNewsItem(datas.articles))
            .catch(err => {
                console.error(err);
            });

    }, []);

    let category = categories;
    if(category === "top"){
        category = "general";
    }


    return (
        <div>
            <h3 className="news-head">Welcome to Daily-Khabar</h3>
            <h1 className="news-heading">Here are some of the top headlines on {category}</h1>
            {console.log(newsItem)}
            <div className="cardContainer">
                {!newsItem ? <img className="loading" src="https://miro.medium.com/max/700/1*CsJ05WEGfunYMLGfsT2sXA.gif" alt="Loading" /> :
                    newsItem.map((item, i) => {
                        return (
                            <NewsCard className="items" key={i} style={item} img={item.media_content[1]} title={item.title} body={item.summary} time={item.published_date} author={item.author} url={item.link} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default News
