

export default function Card(props){
    return(
        
        <div className="card">
            {props.openSpots === 0 &&<div classNam="card--badge">SOLD OUT</div>}
            <img src= {props.img} className="card--image" alt="" />
            <div className="card--stats">
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}