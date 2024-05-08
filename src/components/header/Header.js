import "./header.css";
import React from 'react';
import funny from "../../images/funny.png";
import grock from "../../images/greenrocket.png";
import Carousel from "../carousel/Carousel";

const Header = () => {
    return (
        <div className="header">
            <div className="hContainer">
                <div className="upper">
                    <span className="grace">
                        Success stories
                    </span>
                    <h3 className="success">
                        Every success journey we’ve encountered.
                    </h3>
                </div>
                <div className="lower">
                    <div className="image-side">
                        <img className="funny" src={funny} alt="Funny" />
                        <div className="overlay o1">
                            <h1>40%</h1>
                            <p>Achieved reduction in project execution time by optimising team availability</p>
                        </div>
                        <div className="overlay o2">
                            <img src={grock} alt="grock" />
                            <div className="days">
                                <h3>10 Days</h3>
                                <p>Staff Deployment</p>
                            </div>
                        </div>
                        <div className="overlay o3">
                            <div className="mil">
                                <span>$0.5</span><span className="million">MILLION</span>
                            </div>
                            <div className="reduce">
                                Reduced client expenses by saving on hiring and employee costs.
                            </div>
                        </div>
                    </div>
                    <div className="carousel">
                        <Carousel /> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header