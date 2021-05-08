import React from "react";
import {Button} from "./Button";
import './Navbar.css';
import '../App.css';
import './MainSection.css'
import Example from './videos/example.mp4';

function MainSection(){
    return(
        <div className='main-container'>
            <video src={Example} autoPlay loop muted/>
            <h1>New Smile</h1>
            <p>Don't wait just contact us today!</p>
            <div className='main-btns'>
                <Button className='btns'
                        buttonStyle='btn-secondary'
                        buttonSize='btn-large'>
                    Details
                </Button>
                <Button className='btns'
                        buttonStyle='btn-primary'
                        buttonSize='btn-large'>
                    Watch how we work
                </Button>
            </div>
        </div>
    )
}

export default MainSection;
