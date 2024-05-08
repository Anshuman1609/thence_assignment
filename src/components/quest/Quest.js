import Accordion from "../accordion/Accordion";
import "./quest.css";
import React from 'react';
import union from "../../images/union.png";

const Quest = () => {
    return (
        <div className="quest">
            <div className="qContainer">
                <div className="ask questions">
                    <span className="mind">
                        What’s on your mind
                    </span>
                    <span className="askq">
                        Ask Questions
                    </span>
                    <img src={union} alt="union" className="union" />
                </div>
                <div className="my-accord">
                    <Accordion />
                </div>
            </div>
        </div>
    )
}

export default Quest