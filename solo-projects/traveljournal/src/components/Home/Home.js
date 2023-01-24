import "./Home-styling.css";
function Home(props) {
    return(
        <div>
            <div className="cards">
            <div className="cards--image">
                <img src={require(`../../assets/images/${props.item.titleImg}`)} className="cards--image_picture" alt="Country Name Image"/>
            </div>
            <div className="cards--content">
                <div className="cards--content_location">
                    <p><span className="cards--content_location-name">📍 {props.item.location}</span> <span className="cards--content_location-link">View on Google Maps</span></p>
                </div>
                <p className="cards--content_place-name">{props.item.title}</p>
                <p className="cards--content_date">{props.item.date}</p>
                <p className="cards--content_information">{props.item.content}</p>
            </div>
        </div>
        </div>
    )
}

export default Home