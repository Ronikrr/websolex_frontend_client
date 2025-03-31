import React from "react";
import webflow from "../Assets/webflow.png";
import { Link } from "react-router-dom";

const Careersection = () => {
  const careerHeading = [{ heading: "Our Vacancies" }];

  
  return (
    <>
      <section className="haringsection">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {careerHeading.map((headingMen) => (
                <div className="col-12 mb-5 text-center">
                  <h1 className="fw-bold">{headingMen.heading}</h1>
                </div>
              ))}
              <div className="col-12 d-flex flex-wrap">
                <div className="col-4">
                  <div className="haring_sub_box p-3 rounded-3 mx-2 mb-5">
                    <img loading='lazy' src={webflow} alt="" className="mb-3" />
                    <h3 className="mb-2">Identify the hiring need</h3>
                    <p>
                      We're searching for qualified people to join our group.
                      Should be gifted in cooperation, critical thinking, and
                      programming advancement. Requires broad comprehension of
                      programming dialects and structures. The best candidates
                      are adaptable, imaginative, and focused on creating
                      prevalent arrangements. Go along with us for a dynamic and
                      invigorating air that you might add to state-of-the-art
                      projects.
                    </p>
                    <div className="career_button mt-4 mb-3">
                      <Link className="text-decoration-none text-light rounded-3">
                        Apply Now
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="haring_sub_box p-3 rounded-3 mx-2 mb-5">
                    <img loading='lazy' src={webflow} alt="" className="mb-3" />
                    <h3 className="mb-2">Identify the hiring need</h3>
                    <p>
                      We're searching for qualified people to join our group.
                      Should be gifted in cooperation, critical thinking, and
                      programming advancement. Requires broad comprehension of
                      programming dialects and structures. The best candidates
                      are adaptable, imaginative, and focused on creating
                      prevalent arrangements. Go along with us for a dynamic and
                      invigorating air that you might add to state-of-the-art
                      projects.
                    </p>
                    <div className="career_button mt-4 mb-3">
                      <Link className="text-decoration-none text-light rounded-3">
                        Apply Now
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="haring_sub_box p-3 rounded-3 mx-2 mb-5">
                    <img loading='lazy' src={webflow} alt="" className="mb-3" />
                    <h3 className="mb-2">Identify the hiring need</h3>
                    <p>
                      We're searching for qualified people to join our group.
                      Should be gifted in cooperation, critical thinking, and
                      programming advancement. Requires broad comprehension of
                      programming dialects and structures. The best candidates
                      are adaptable, imaginative, and focused on creating
                      prevalent arrangements. Go along with us for a dynamic and
                      invigorating air that you might add to state-of-the-art
                      projects.
                    </p>
                    <div className="career_button mt-4 mb-3">
                      <Link className="text-decoration-none text-light rounded-3">
                        Apply Now
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="haring_sub_box p-3 rounded-3 mx-2">
                    <img loading='lazy' src={webflow} alt="" className="mb-3" />
                    <h3 className="mb-2">Identify the hiring need</h3>
                    <p>
                      We're searching for qualified people to join our group.
                      Should be gifted in cooperation, critical thinking, and
                      programming advancement. Requires broad comprehension of
                      programming dialects and structures. The best candidates
                      are adaptable, imaginative, and focused on creating
                      prevalent arrangements. Go along with us for a dynamic and
                      invigorating air that you might add to state-of-the-art
                      projects.
                    </p>
                    <div className="career_button mt-4 mb-3">
                      <Link className="text-decoration-none text-light rounded-3">
                        Apply Now
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="haring_sub_box p-3 rounded-3 mx-2">
                    <img loading='lazy' src={webflow} alt="" className="mb-3" />
                    <h3 className="mb-2">Identify the hiring need</h3>
                    <p>
                      We're searching for qualified people to join our group.
                      Should be gifted in cooperation, critical thinking, and
                      programming advancement. Requires broad comprehension of
                      programming dialects and structures. The best candidates
                      are adaptable, imaginative, and focused on creating
                      prevalent arrangements. Go along with us for a dynamic and
                      invigorating air that you might add to state-of-the-art
                      projects.
                    </p>
                    <div className="career_button mt-4 mb-3">
                      <Link className="text-decoration-none text-light rounded-3">
                        Apply Now
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="haring_sub_box p-3 rounded-3 mx-2">
                    <img loading='lazy' src={webflow} alt="" className="mb-3" />
                    <h3 className="mb-2">Identify the hiring need</h3>
                    <p>
                      We're searching for qualified people to join our group.
                      Should be gifted in cooperation, critical thinking, and
                      programming advancement. Requires broad comprehension of
                      programming dialects and structures. The best candidates
                      are adaptable, imaginative, and focused on creating
                      prevalent arrangements. Go along with us for a dynamic and
                      invigorating air that you might add to state-of-the-art
                      projects.
                    </p>
                    <div className="career_button mt-4 mb-3">
                      <Link className="text-decoration-none text-light rounded-3">
                        Apply Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Careersection;
