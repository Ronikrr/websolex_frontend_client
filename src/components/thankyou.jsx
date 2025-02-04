// import React from 'react';
import React, { useEffect } from 'react';
import './thankyou.css'; 
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';


const styles = {
    title: {
        fontSize: '30px',
        fontWeight: 200,
        lineHeight: '40px',
        marginBottom: '45px',
        paddingTop: '50px',
        position: 'relative',
        width: '100%',
    },
    checkmark: {
        fontSize: '50px',
        color: 'green',
        height: '100px',
        width: '100px',
        lineHeight: '100px',
        border: '2px solid green',
        borderRadius: '50%',
        display: 'inline-block',
        textAlign: 'center',
        margin: '0 auto',
        position: 'relative',
        padding: '20px',
        marginBottom: '20px',
    },
    message: {
        textAlign: 'center',
        margin: '30px 0',
        padding: '90px 0px',
        boxSizing: 'border-box',
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
        flexDirection: "column"
    },
    footer: {
        textAlign: 'center',
        margin: '12px 0',
    },
    footerLink: {
        color: '#fff',
        textDecoration: 'none',
        backgroundColor: '#54a2d9',
        padding: "10px 20px",
        borderRadius: "5px",
        fontSize: "20px",
    },
    footerLinkHover: {
        textDecoration: 'underline',
    },
    pera: {
        width: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
    }
};


const ThankYou = () => {

    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/'); // Redirect to home page after 3 seconds
        }, 3000);

        return () => clearTimeout(timer); // Clean up the timeout on unmount
    }, [navigate]);
    return (
        <div className='thankyou_page py-100'>
            <div style={styles.message}>
                <FontAwesomeIcon style={styles.checkmark} icon={faCheck} size="2x" color="green" />
                <h1 style={styles.title}>THANK YOU!</h1>
                <p style={styles.pera} >
                    Thanks a bunch for filling that out. It means a lot to us, just like you do! We really appreciate you giving us a moment of your time today. Thanks for being you.
                </p>
            </div>
        </div>
    );
};

export default ThankYou;



