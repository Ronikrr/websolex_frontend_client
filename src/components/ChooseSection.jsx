import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const ChooseSection = () => {
    const reasons = [
        { id: 1, title: "High Quality Work", description: "We deliver exceptional quality in every project, ensuring your digital solutions are top-notch and effective." },
        { id: 2, title: "Dedicated 24/7 Support", description: "Our team is available around the clock to provide you with support and resolve any issues promptly and efficiently." },
        { id: 3, title: "Agile and Fast Working Style", description: "We adopt an agile methodology, allowing us to work quickly and adapt to changes, ensuring timely delivery of projects." },
        { id: 4, title: "High Level of Usability", description: "We prioritize user-friendly designs that offer seamless experiences, making your digital solutions easy to use and intuitive." },
        { id: 5, title: "Innovative Solutions", description: "We utilize the latest technologies and design trends to create innovative solutions that set you apart from the competition." },
        { id: 6, title: "Proven Track Record", description: "Our portfolio of successful projects and satisfied clients demonstrates our ability to deliver outstanding results consistently." }
    ];

    return (
        <section className="choose_section py-5" id='comp-lzcg1m5n '>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center mb-5">
                        <h1 className='fw-bold wow animate__animated animate__fadeInDown'>Why Choose Us</h1>
                    </div>
                    {reasons.map(reason => (
                        <div key={reason.id} className="col-12 col-md-6 col-xl-4 mb-4 wow animate__animated animate__fadeInRight ">
                            <div className="d-flex">
                                <div className="number_choose position-relative me-4">
                                    <p className="mb-0 fw-bold">{reason.id < 10 ? `0${reason.id}` : reason.id}</p>
                                </div>
                                <div className="choose_content">
                                    <h4 className="fw-bold">{reason.title}</h4>
                                    <p className='mb-0'>{reason.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ChooseSection;
