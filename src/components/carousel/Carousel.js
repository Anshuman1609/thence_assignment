import React, { useEffect, useState } from 'react';
import "./carousel.css";

const Carousel = () => {
    const headings = [
        "Enhance fortune 50 company’s insights teams research capabilities",
        "Second sentence to slide away",
        "Enhance fortune 50 company’s third sentence to slide away",
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex === headings.length - 1 ? 0 : prevIndex + 1));
        }, 5000);

        return () => clearInterval(intervalId);
    }, [headings.length]);

    const handleClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className='container'>
            <div className="fortune">
                <span className="f">
                    {headings[currentIndex]}
                </span>
                <div className="dots">
                    {
                        headings.map((heading, index) => (
                            <span
                                key={index}
                                className={index === currentIndex ? 'dot active' : 'dot'}
                                onClick={() => handleClick(index)}
                            ></span>
                        ))}
                </div>
            </div>
            <button className="explore">
                Explore More →
            </button>
        </div>
    )
}

export default Carousel