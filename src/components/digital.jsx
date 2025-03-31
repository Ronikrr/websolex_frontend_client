import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import seo from '../Assets/seo.png'
import click_through from '../Assets/click-through-rate.png'
import marketing from '../Assets/marketing (1).png'
import bullhorn from '../Assets/bullhorn.png'
import digital_marketing from '../Assets/digital-marketing (1).png'
import { Link } from 'react-router-dom';

function digital() {
    const cardtab = [
        {
            name: "SEO",
            src: seo,
            title: 'Top SEO Services',
            dis: "Rank higher on search engines and attract more organic traffic with our expert SEO strategies tailored to your business."
        },
        {
            name: "Pay Per Click Advertising",
            src: click_through,
            title: 'PPC Optimization',
            dis: "Maximize your ROI with targeted PPC campaigns that deliver immediate and measurable results."
        },
        {
            name: "Social Media Marketing",
            src: bullhorn,
            title: 'Social Media Boost',
            dis: "Engage your audience and grow your brand with impactful social media strategies across all major platforms."
        },
        {
            name: "Email Marketing",
            src: digital_marketing,
            title: 'Effective Email Campaigns',
            dis: "Reach your customers directly with personalized email campaigns that convert leads into loyal clients."
        },
        {
            name: "WhatsApp Marketing",
            src: marketing,
            title: 'Targeted WhatsApp Ads',
            dis: "Connect with your audience instantly through WhatsApp, delivering messages that drive action and build relationships."
        },
    ]
    return (
        <section className='service_page '>
            <div className="container">
                <div className="row justify-content-center">
                    {cardtab.map((c, s) =>
                        <div className="col-xl-3 col-lg-4 col-md-6  d-flex align-items-stretch mb-5" key={s}>
                            <div className="position-relative  mg-10 mx-md-3 col-12">
                                <div className="card border-0 mb-0">
                                    <div className="card-body text-center text-lg-start d-grid gap-4 p-4 border-0 ">
                                        <div className="card_body_sub">
                                            <div className="card_icon rounded-1 d-flex align-items-center justify-content-center justify-content-lg-start mb-3 ">
                                                <img loading='lazy' src={c.src} alt="" className='fs-2  img-fluid col-2 col-md-3 col-lg-2' />
                                            </div>
                                            <h5 className="mb-1 fw-bold  text-capitalize mb-2" >{c.name}</h5>
                                            <h6 className='col-lg-9'>{c.title}</h6>
                                            <p className="mb-1 fs-14">{c.dis}</p>
                                        </div>
                                        <div className="social d-flex  justify-content-end align-items-end">
                                            <Link>
                                                <FaArrowRight className="arrow" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>)}
                </div>
            </div>
        </section>
    )
}

export default digital
