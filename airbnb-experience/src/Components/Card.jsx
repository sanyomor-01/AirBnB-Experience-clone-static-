import React from 'react';


export default function Card(props) {
    return (
        <div className="card">
            let badgeText
            if (props.openSpots === 0 ){
                badgeText = "SOLD OUT"
            }else (props.location === 'Online'){
                badgeText = 'ONLINE'
            }
           {props.openSpots ===0 && <div className="card-badge">{badgeText}</div>}
            <img src={`../../public/assets/${props.img}`} alt="katie pic" className='card--image'/>

            <div className="card--stats">
                <img src="../../public/assets/star.png" alt="rate star" />
                <span> {props.rating} </span>
                <span className="gray">{props.reviewCount} • </span>
                <span className="gray">{props.location} </span>
            </div>
            <p className='card--title'> {props.title} </p>
            <p className='card--pric'><span className="bold">From ${props.price}</span> / Person</p>

        </div>
    )
}