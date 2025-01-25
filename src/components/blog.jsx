import React, { useEffect, useState } from 'react'
import blog_one from '../Assets/bolg_image.jpg';
import blog_two from '../Assets/How to Choose the Right IT Service Provider for Your Business.jpg';
import blog_3 from '../Assets/cyberscrutiy.jpeg';
import blog_4 from '../Assets/therole.jpeg';
import blog_5 from '../Assets/customsoftwe.jpeg';
import { MdArrowOutward } from "react-icons/md";
import { Link } from 'react-router-dom';
import FeedbackMessage from './feedback';



const Blog = () => {
    const [data, setdata] = useState([])
    const [feedback, setFeedback] = useState({ message: "", type: "" })
    const handleClear = () => {
        setFeedback({ message: "", type: "" })
    }
    useEffect(() => {
        const fetchadd = async () => {
            const res = await fetch(`https://websolex-admin.vercel.app/api/blogpage`,
                {
                    method: "GET"
                }
            )
            if (!res.ok) {
                const errorMessage = await res.text();
                setFeedback({
                    message: `Error fetching : ${errorMessage}`,
                    type: "error",
                })
            }
            const data = await res.json()
            setdata(data)

        }
        fetchadd()
    }, [])
    const handleTabClick = () => {
        window.scrollTo(0, 0);
    };



    return (
        <>
            {feedback.message && <FeedbackMessage message={feedback.message} type={feedback.type} onClear={handleClear} />}
            <section className='blog_section pb-100'>
                <div className="container">
                    <div className="row">
                        <h2 className='mb-5 text-center text-lg-start'>Recent Blog Post</h2>
                        <div className="col-12 d-flex justify-content-center flex-wrap">
                            {data.map((data, index) => (
                                <div className="col-md-6 col-xl-4 mb-5" key={data._id} >
                                    <div className="blog_sub p-2">
                                        <div className="blog_images mb-4">
                                            <img src={data.image} alt="" className='img-fluid box_image rounded-4' />
                                        </div>
                                        <div className="blog_content position-relative">
                                            <h5 className='fw-bold'>{data.content[0].title }</h5>
                                            <p>{data.content[0].description} </p>
                                        </div>
                                        <div className="blog_btn mt-4">
                                            <Link to={`/blog/${data._id}`} onClick={handleTabClick} className='text-decoration-none text-light rounded-2'>Read More <MdArrowOutward /></Link>
                                        </div>
                                    </div>
                                </div> 
                            ))}
                            <div className="col-md-6 col-xl-4 mb-5">
                                <div className="blog_sub p-2">
                                    <div className="blog_images mb-4">
                                        <img src={blog_one} alt="" className='img-fluid rounded-4' />
                                    </div>
                                    <div className="blog_content position-relative">
                                        <h5 className='fw-bold'>Top 5 IT Trends Transforming Businesses in 2024</h5>
                                        <p> Highlight emerging technologies like AI, blockchain, cloud computing, and cybersecurity trends that businesses need to adopt in 2024.
                                            A visually appealing infographic summarizing the key trends.</p>
                                    </div>
                                    <div className="blog_btn mt-4">
                                        <Link to="/blog/businesspage" onClick={handleTabClick} className='text-decoration-none text-light rounded-2'>Read More <MdArrowOutward /></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-4 mb-5">
                                <div className="blog_sub p-2">
                                    <div className="blog_images mb-4">
                                        <img src={blog_two} alt="" className='img-fluid rounded-4' />
                                    </div>
                                    <div className="blog_content position-relative">
                                        <h5 className='fw-bold'>How to Choose the Right IT Service Provider for Your Business</h5>
                                        <p> Provide tips on selecting an IT service provider based on expertise, experience, support, and cost.
                                            Comparison chart or checklist for evaluating IT service providers.</p>
                                    </div>
                                    <div className="blog_btn mt-4">
                                        <Link to="/blog/businesspage" onClick={handleTabClick} className='text-decoration-none text-light rounded-2'>Read More <MdArrowOutward /></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-4 mb-5">
                                <div className="blog_sub p-2">
                                    <div className="blog_images mb-4">
                                        <img src={blog_3} alt="" className='img-fluid rounded-4' />
                                    </div>
                                    <div className="blog_content position-relative">
                                        <h5 className='fw-bold'>The Importance of Cybersecurity for Small Businesses</h5>
                                        <p> Discuss why small businesses are at risk, common threats, and effective measures to safeguard their data. A graphic showing common cyber threats and protection measures.</p>
                                    </div>
                                    <div className="blog_btn mt-4">
                                        <Link to="/blog/businesspage" onClick={handleTabClick} className='text-decoration-none text-light rounded-2'>Read More <MdArrowOutward /></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-4 mb-5 mb-md-0">
                                <div className="blog_sub p-2">
                                    <div className="blog_images mb-4">
                                        <img src={blog_4} alt="" className='img-fluid rounded-4' />
                                    </div>
                                    <div className="blog_content position-relative">
                                        <h5 className='fw-bold'>The Role of IT in Digital Transformation</h5>
                                        <p>Explain how IT drives digital transformation in organizations through automation, data analytics, and cloud solutions.A diagram illustrating the digital transformation process.</p>
                                    </div>
                                    <div className="blog_btn mt-4">
                                        <Link to="/blog/businesspage" onClick={handleTabClick} className='text-decoration-none text-light rounded-2'>Read More <MdArrowOutward /></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-4 mb-5 mb-md-0">
                                <div className="blog_sub p-2">
                                    <div className="blog_images mb-4">
                                        <img src={blog_5} alt="" className='img-fluid rounded-4' />
                                    </div>
                                    <div className="blog_content">
                                        <h5 className='fw-bold'>Why Your Business Needs a Custom Software Solution</h5>
                                        <p>Discuss the benefits of custom software solutions compared to off-the-shelf products, with examples of tailored IT solutions.Before-and-after scenario comparison</p>
                                    </div>
                                    <div className="blog_btn mt-4">
                                        <Link to="/businesspage" onClick={handleTabClick} className='text-decoration-none text-light rounded-2'>Read More <MdArrowOutward /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Blog



