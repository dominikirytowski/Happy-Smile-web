import React from "react";
import {Link} from "react-router-dom";
import "./CardItem.css";


function CardItem(props){
    return(
        <>
            <li className="card-item">
                <Link className="card-item-link" to={props.path}>
                    <figure className="card-item-pic-wrap">
                        <img src={props.src} alt="" className="card-item-img"/>
                    </figure>
                    <div className="card-item-info">
                        <h5 className="card-item-text">
                            {props.label}
                        </h5>
                        {props.text}
                    </div>
                </Link>
            </li>
        </>
    )
}

export default CardItem

