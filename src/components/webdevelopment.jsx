import React from 'react'
import reactjs from '../Assets/library.png'
import nodejs from '../Assets/nodejs2.png'
import php from '../Assets/php2.png'
import laravel from '../Assets/laravel1.png'
import wordPress from '../Assets/wordpress-logo.png'
import shopify from '../Assets/shofify.png'
import angular from '../Assets/angular.png'
import wix from '../Assets/wix.png'
import webflow from '../Assets/webflow.png'
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom'

const webdevelopment = () => {

    const cardtab = [
        {
            name: "react js development",
            src: reactjs,
            title: 'Build Modern Web Applications with React.js',
            dis: "We specialize in crafting dynamic, responsive, and high-performance web applications using React.js. Our solutions are tailored to enhance user experience and ensure seamless scalability."
        },
        {
            name: "Node.js Development",
            src: nodejs,
            title: 'Efficient Backend Solutions with Node.js',
            dis: "Leverage the power of Node.js for building fast, scalable, and efficient server-side applications. Our team delivers robust back-end solutions that support real-time data and high traffic."
        },
        {
            name: "PHP Development",
            src: php,
            title: 'Versatile Web Solutions with PHP',
            dis: "Our PHP development services offer versatile and reliable web solutions. From dynamic websites to complex web applications, we provide efficient, secure, and scalable PHP development."
        },
        {
            name: "Laravel Development",
            src: laravel,
            title: 'Elegant and Efficient Laravel Solutions',
            dis: "Utilize the elegance and efficiency of Laravel for your web applications. We deliver robust, scalable, and maintainable solutions using this popular PHP framework, tailored to your business needs."
        },
        {
            name: "WordPress Development",
            src: wordPress,
            title: 'Customized WordPress Websites',
            dis: "Create a strong online presence with our WordPress development services. We design and develop custom WordPress websites that are user-friendly, SEO-optimized, and easy to manage."
        },
        {
            name: "Shopify Development",
            src: shopify,
            title: 'Ecommerce Excellence with Shopify',
            dis: "Transform your ecommerce business with our Shopify development services. We create stunning, user-friendly online stores that offer seamless shopping experiences and are optimized for conversions."
        },
        {
            name: "Angular Development",
            src: angular,
            title: 'Powerful Single-Page Applications with Angular',
            dis: "Our Angular development services focus on building powerful, feature-rich single-page applications. We ensure your web applications are fast, responsive, and user-friendly"
        },
        {
            name: "Wix Development",
            src: wix,
            title: 'Easy and Elegant Websites with Wix',
            dis: "Create beautiful, functional websites effortlessly with our Wix development services. We provide custom design and development to match your brand's unique style and requirements."
        },
        {
            name: "Webflow Development",
            src: webflow,
            title: 'Advanced Web Design with Webflow',
            dis: "Unleash your creativity with our Webflow development services. We build visually stunning and highly functional websites that are fully responsive and optimized for performance."
        },
    ]

    return (
        <>
            <section className='service_page'>
                <div className="container">
                    <div className="row justify-content-center">
                        {cardtab.map((c, s) =>
                            <div className="col-xl-3 col-lg-4 col-md-6  d-flex align-items-stretch mb-5" key={s}>
                                <div className="position-relative  mg-10 mx-md-3 col-12">
                                    <div className="card border-0 mb-0">
                                        <div className="card-body text-center text-lg-start p-4 border-0 ">
                                            <div className="card_body_sub">
                                                <div className="card_icon rounded-1 d-flex align-items-center justify-content-center justify-content-lg-start mb-3 ">
                                                    <img src={c.src} alt="" className='fs-2  img-fluid col-2 col-md-3 col-lg-2' />
                                                </div>
                                                <h5 className="mb-1 fw-bold  text-capitalize mb-2" >{c.name}</h5>
                                                <h6 className='col-lg-9'>{c.title}</h6>
                                                <p className="mb-1 fs-14">{c.dis}</p>
                                            </div>
                                            <div className="social d-flex mt-4  justify-content-end">
                                                <Link><FaArrowRight className="arrow" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>)}
                    </div>
                </div>
            </section>
        </>
    )
}

export default webdevelopment
