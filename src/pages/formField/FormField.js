import React, { useEffect, useState } from 'react';
import "./formField.css";
import vector from "../../images/vector.png";
import { useNavigate } from 'react-router-dom';

const FormField = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [redirectTimer, setRedirectTimer] = useState(5);

    const navigate = useNavigate();

    useEffect(() => {
        let timer;
        if (isSubmitted) {
            timer = setInterval(() => {
                setRedirectTimer(prevTimer => prevTimer - 1);
            }, 1000);
        }

        return () => clearInterval(timer);
    }, [isSubmitted]);

    useEffect(() => {
        if (redirectTimer === 0) {
            navigate("/");
        }
    }, [redirectTimer, navigate]);


    const handleSubmit = (e) => {
        e.preventDefault();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setIsValidEmail(false);
            return;
        }

        setIsSubmitted(true);
    };

    return (
        <>
            <div className="formNav">
                <img src={vector} alt="Brunel" />
                <div className={`closing ${isSubmitted ? "hideclosing" : ""}`} onClick={(e) => navigate("/")}>&#10006;</div>
            </div>
            {!isSubmitted ? (
                <div className="formContainer">
                    <div className="uptext">
                        <span className='grace'>Registration Form</span>
                        <span className='success'>Start your success Journey here!</span>
                    </div>
                    <div className="lowform">
                        <div className="details">
                            <input
                                className='input i1'
                                type="text"
                                placeholder='Enter your name'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <input
                                className={`input i2 ${!isValidEmail && 'invalid'}`}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                placeholder='Enter your email'
                            />
                            {!isValidEmail && <div className="error"> <span style={{ color: "white", backgroundColor: "rgba(255, 8, 8, 1)", padding: "1px 7px", borderRadius: "15px", fontSize: "10px" }}>!</span>   Please enter a valid email address.</div>}
                        </div>
                        <button type="submit" disabled={!name || !email}
                            onClick={handleSubmit}
                            style={{ backgroundColor: (!name || !email) ? 'rgba(201, 201, 201, 1)' : 'rgba(28, 28, 28, 1)' }}
                        >Submit</button>
                    </div>
                </div>
            ) : (
                <div className="submitted-container">
                    <div className="submitted-text">
                        <div class="tick-container tick">✔</div>
                        <div className='grace'>Success Submitted</div>
                        <div className='success'>Congratulations!</div>
                        <div className='sucsub'>Your request has been successfully submitted to us. We will validate your information and reach out to your shortly with updates</div>
                    </div>
                    <div className='redirect'>Redirecting you to Homepage in <span>{redirectTimer} Seconds</span></div>
                </div>
            )}
        </>
    )
}

export default FormField;