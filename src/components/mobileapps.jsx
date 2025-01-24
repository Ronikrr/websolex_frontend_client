import React from 'react';
import ios from '../Assets/ios.png'
import android from '../Assets/android (1).png'
import flutter from '../Assets/flutter2.png'
import { FaArrowRight } from 'react-icons/fa'; 

function mobileapps() {

    const cardtab = [
        {
            name: "iOS Development",
            src: ios,
            title: 'Exceptional iOS App Development',
            dis: "We specialize in creating high-quality iOS apps that offer seamless performance and a great user experience. Our team crafts custom iOS solutions that are visually appealing, intuitive, and optimized for the latest Apple devices."
        },
        {
            name: "Android Development",
            src: android,
            title: 'Innovative Android App Solutions',
            dis: "Our Android development service delivers innovative and reliable apps tailored to your business needs. We build feature-rich, secure, and user-friendly Android applications that run smoothly on a wide range of devices."
        },
        {
            name: "Flutter Development",
            src: flutter,
            title: 'Cross-Platform Excellence with Flutter',
            dis: "Leverage the power of Flutter to create high-performance apps for both iOS and Android. Our Flutter development service ensures a consistent and native-like experience across platforms, with beautiful UI and robust functionality."
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

export default mobileapps
