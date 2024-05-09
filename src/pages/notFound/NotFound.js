import React from 'react';
import { Link } from 'react-router-dom';
import "./notFound.css";

const NotFound = () => {
    return (
        <div className='not-found'>
            <Link to="/" >
                <button style={{ fontSize: "150px", fontWeight: "400", backgroundColor: "lightblue", fontFamily: "Covered By Your Grace", cursor: "pointer" }} classname="notFound">Back to HomePage</button>
            </Link>
        </div>
    )
}

export default NotFound