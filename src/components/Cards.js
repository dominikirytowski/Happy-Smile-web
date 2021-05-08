import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import Example from "../images/img-2.png";

function Cards(){
    return(
        <div className="cards">
            <h1>Some example text to be shown</h1>
            <div className="cards-container">
                <div className="cards-wrapper">
                    <ul className="cards-items">
                        <CardItem
                            src={Example}
                            text="Some example text to be shown"
                            label='Some Example'
                            path='/contact'
                        />
                        <CardItem
                            src={Example}
                            text="Some example text to be shown"
                            label='Some Example'
                            path='/contact'
                        />
                    </ul>
                    <ul className="cards-items">
                        <CardItem
                            src={Example}
                            text="Some example text to be shown"
                            label='Some Example'
                            path='/contact'
                        />
                        <CardItem
                            src={Example}
                            text="Some example text to be shown"
                            label='Some Example'
                            path='/contact'
                        />
                        <CardItem
                            src={Example}
                            text="Some example text to be shown"
                            label='Some Example'
                            path='/contact'
                        />
                        <CardItem
                            src={Example}
                            text="Some example text to be shown"
                            label='Some Example'
                            path='/contact'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
