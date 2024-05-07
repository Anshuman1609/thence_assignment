import React from 'react';
import { Link } from 'react-router-dom';
import "./notFound.css";

const NotFound = () => {
    return (
        <>
            <Link to="/">
                <button >
                    Back to HomePage
                </button>
            </Link>
        </>
    )
}

export default NotFound