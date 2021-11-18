import "./NewsCard.css";
import noImage from "../image/notFound.jpg";

function NewsCard(props) {

  return (
    <>
      
        <div className="card mb-3 text-align-start newsCardContainer" style={{ maxWidth: "540px", textAlign: "left" }}>
          <div className="row g-0">
            <div className="col-md-4 img_div" style={{ display: "flex", alignItems: "center" }}>
              <img  src={!props.img ? noImage : props.img} className="img-fluid rounded-start" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title head" style={{ color: "orange" }}>{props.title}</h5>
                <p className="card-text color-#008080">{props.body}</p>
                <p className="card-text" style={{textAlign: "end"}}><small className="text-muted">{!props.author ? "unknown" : props.author}</small></p>
                <p className="card-text" style={{textAlign: "end"}}><small className="text-muted">{props.time}</small></p>
                <div className="buttons">
                  <a href={props.url} target="_blank" rel="noreferrer"><button>Read More</button></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      

    </>
  )
}

export default NewsCard

