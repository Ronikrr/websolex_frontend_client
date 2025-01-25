import React, { useEffect, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const FeedbackMessage = ({ type, message, onClear }) => {
    const [showMessage, setShowMessage] = useState(false);

    useEffect(() => {
        if (message) {
            setShowMessage(true);

            const timer = setTimeout(() => {
                setShowMessage(false);
                setTimeout(() => {
                    onClear();
                }, 500);
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [message, onClear]);

    const handleClose = () => {
        setShowMessage(false);
        setTimeout(() => {
            onClear();
        }, 5000);
    };

    if (!message) return null;

    return (
        <div
            className={`position-fixed bottom-0 end-0 mt-3 me-3 p-3 rounded shadow-lg text-white ${showMessage ? "opacity-100" : "opacity-0"
                } transition-opacity ${type === "success" ? "bg-success" : "bg-danger"}`}
            style={{ transition: "opacity 0.5s ease" }}
        >
            <div className="d-flex justify-content-between align-items-center">
                <span>{message}</span>
                <button
                    onClick={handleClose}
                    className="btn btn-sm text-white ms-3 p-0"
                    aria-label="Close"
                >
                    <i className="bi bi-x fs-5"></i>
                </button>
            </div>
        </div>
    );
};

export default FeedbackMessage;
