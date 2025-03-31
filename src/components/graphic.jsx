import React from 'react';
import grafic from '../Assets/grafic.png'
import branding from '../Assets/branding.png'
import packging from '../Assets/package.png'
import logodesign from '../Assets/logo-design.png'
import { FaArrowRight } from 'react-icons/fa'; 

function graphic() {

    const cardtab = [
        {
            name: "Packaging Design",
            src: packging,
            title: 'Building Strong Brand Identities',
            dis: "Establish a powerful brand presence with our comprehensive branding identity service. From logo creation to visual style and messaging, we help define and communicate your brand's unique story and values."
        },
        {
            name: "Branding Identity",
            src: branding,
            title: 'Build Modern Web Applications with React.js',
            dis: "We specialize in crafting dynamic, responsive, and high-performance web applications using React.js. Our solutions are tailored to enhance user experience and ensure seamless scalability."
        },
        {
            name: "Logo Design",
            src: logodesign,
            title: 'Crafting Memorable Logos',
            dis: "Our logo design service creates unique and memorable logos that perfectly represent your brand's identity. We focus on simplicity, versatility, and timeless appeal to make your brand stand out."
        }, 
        {
            name: "Infographic Design",
            src: grafic,
            title: 'Visual Storytelling with Infographics',
            dis: "Transform complex information into engaging visuals with our infographic design service. We create clear, informative, and visually appealing infographics that effectively communicate your message."
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
                            <div className="card-body text-center text-lg-start p-4 border-0 ">
                                <div className="card_body_sub">
                                    <div className="card_icon rounded-1 d-flex align-items-center justify-content-center justify-content-lg-start mb-3 ">
                                        <img loading='lazy' src={c.src} alt="" className='fs-2  img-fluid col-2 col-md-3 col-lg-2' />
                                    </div>
                                    <h5 className="mb-1 fw-bold  text-capitalize mb-2" >{c.name}</h5>
                                    <h6 className='col-lg-9'>{c.title}</h6>
                                    <p className="mb-1 fs-14">{c.dis}</p>
                                </div>
                                <div className="social d-flex mt-4  justify-content-end">
                                    <a href="javascript:void(0);"><FaArrowRight className="arrow" /></a>
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

export default graphic
