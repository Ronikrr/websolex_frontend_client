import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaSearchPlus } from "react-icons/fa";
import { GoCheckCircleFill } from "react-icons/go";

const Jobwork = () => {
  const Process = [
    {
      id: 1,
      icon: FaUserPlus,
      tital: "Design & Development",
      description:
        "We begin with a detailed consultation to understand your business goals and technical requirements. Our team collaborates with you to create a tailored project plan, ensuring all aspects are aligned with your vision.",
      
    },
    {
      id: 2,
      icon: FaCloudUploadAlt,
      tital: "Testing & Quality Assurance",
      description:
        "Our expert designers and developers bring your project to life, focusing on creating a user-friendly and visually appealing interface. We ensure that the design is responsive and optimized for all devices, while the development adheres to the latest standards.",
      
    },
    {
      id: 3,
      icon: FaSearchPlus,
      tital: "Launch & Support",
      description:
        "Before launch, we conduct rigorous testing to identify and resolve any issues. Our quality assurance process ensures that the final product is bug-free, secure, and performs seamlessly across different platforms and browsers.",
      
    },
    {
      id: 4,
      icon: GoCheckCircleFill,
      tital: "WordPress Development",
      description:
        "We offer flexible and scalable WordPress development solutions. Whether you need a custom theme, plugin development, or a full-fledged e-commerce site, we ensure your WordPress site is optimized for performance, security, and ease of use.",
    },
  ];
  return (
    <>

      <section className="jobwork py-50">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-5 text-center">
              <h1 className="fw-bold wow animate__animated animate__fadeInDown">
                How Project Work
              </h1>
            </div>
            <div className="col-12 d-flex flex-wrap justify-content-center">
              {Process.map((user,index) => (
                <div
                  key={user.id}
                  className={`col-12 col-md-6 col-xl-3 hover d-flex justify-content-center flex-column text-center  position-relative mb-4 mb-lg-0 wow animate__animated animate__fadeInLeft ${ index === 0 ? "arrorw_1" : index === 1 ? "arrorw" : index === 2 ? "arrorw_1" : ""}`}
                >
                  <div className="d-flex justify-content-center mb-3">
                    <div className="jobicon d-flex justify-content-center align-items-center">
                      {<user.icon className="icons_job" />}
                    </div>
                  </div>
                  <div className="job_content">
                    <h4>{user.tital}</h4>
                    <p>{user.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Jobwork;
