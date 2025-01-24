import React from 'react';
import uiux from '../Assets/ui ux.png'
import website from '../Assets/website.png'
import application from '../Assets/application.png'
import { FaArrowRight } from 'react-icons/fa'; 

function design() {
    const cardtab = [
        {
            name: "Website Design",
            src: website,
            title: 'Stunning and Functional Websites',
            dis: "We create visually stunning and user-friendly websites tailored to your brand and business needs. Our designs focus on aesthetics, functionality, and seamless user experience, ensuring your online presence stands out."
        },
        {
            name: "Application Design",
            src: application,
            title: 'Innovative App Designs',
            dis: "Our application design service delivers intuitive and engaging designs for mobile and web applications. We prioritize user experience and usability, creating apps that are both beautiful and easy to navigate."
        },
        {
            name: "UI/UX Design",
            src: uiux,
            title: 'Exceptional UI/UX Design',
            dis: "Enhance your digital products with our expert UI/UX design services. We design interfaces that are not only visually appealing but also intuitive and user-centric, ensuring a seamless and enjoyable experience for your users."
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
                                        <img src={c.src} alt="" className='fs-2  img-fluid col-2 col-md-3 col-lg-2' />
                                    </div>
                                    <h5 className="mb-1 fw-bold  text-capitalize mb-2" >{c.name}</h5>
                                    <h6 className='col-xxl-12'>{c.title}</h6>
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

export default design
