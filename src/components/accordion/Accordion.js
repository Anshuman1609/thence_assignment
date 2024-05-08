import "./accordion.css";
import React, { useState } from 'react'

const Accordion = () => {

    const [isOpen, setIsOpen] = useState(2);

    const data = [
        {
            title: "Do you offer freelancers?",
            content: "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.",

        },
        {
            title: "What’s the guarantee that I will be satisfied with the hired talent?",
            content: "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.",

        },
        {
            title: "Can I hire multiple talents at once?",
            content: "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.",
        },
        {
            title: "Why should I not go to an agency directly?",
            content: "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.",
        },
        {
            title: "Who can help me pick a right skillset and duration for me ? ",
            content: "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.",
        },
    ];

    const toggleAccordion = (index) => {
        if (index === isOpen) {
            setIsOpen(null);
        }
        else {
            setIsOpen(index);
        }
    };


    return (
        <div className="accordion-container">
            {data.map((item, index) => (
                <div key={index} className={`accordion-item ${index === isOpen ? 'open' : ""} ${index === 0 ? "accordion-border" : ""}`}>
                    <div className="accordion-header" onClick={() => toggleAccordion(index)}>
                        <div className="accordion-title">
                            {item.title}
                        </div>
                        <div className="accordion-toggle">
                            {index === isOpen ? '-' : '+'}
                        </div>
                    </div>
                    {index === isOpen && (
                        <div className="accordion-content">
                            {item.content}
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}

export default Accordion