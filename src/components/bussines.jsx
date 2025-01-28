import React, { useEffect, useState } from 'react'
import blog_two from '../Assets/blog_image_2.png';
import blogimg3 from '../Assets/WhatsApp Image 2024-08-23 at 4.25.24 PM 1.png';
import blogimg4 from '../Assets/blogimg4.png';
import blogimg5 from '../Assets/blogimg5.png';
import insta1 from '../Assets/insta1.png';
import insta2 from '../Assets/insta2 1.png';
import insta3 from '../Assets/insta3 1.png';
import insta4 from '../Assets/insta6.6ecf289e27936c6602c9.png';
import insta5 from '../Assets/insta5 1.png';
import insta7 from '../Assets/insta7.jpg';
import { IoSearch } from "react-icons/io5";
import { Link, useParams } from 'react-router-dom';
const Bussines = () => {
    const { blogid } = useParams();
    const [blogdata, setblogdata] = useState([])

    useEffect(() => {
        const fetchdata = async () => {
            try {
                const response = await fetch(`https://websolex-admin.vercel.app/api/blogpage/${blogid}`);
                if (!response.ok) {

                    console.log(response.message)
                }
                const data = await response.json();
                setblogdata(data);
            } catch (error) {
                console.log(error.message)

            }
        }
        fetchdata();
    }, [blogid])
    if (!blogdata) {
        return <div>No portfolio found for "{blogid}"</div>;
    }
    if (!blogdata || !blogdata.content || blogdata.content.length === 0) {
        return <div>No content available</div>;
    }

    return (
        <>
            <section className='bussines_section '>
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-flex flex-wrap">
                            <div className="col-12 col-lg-8 mb-5 mb-lg-0">
                                <div className="bussines_image">
                                    <img src={blogdata.image} alt="" className='col-12' />
                                </div>
                                <div className="bussines_content mt-4 ">
                                    <div className="bussines_name d-flex align-items-center mb-2">
                                        <span></span>
                                        <p className='ps-2 pe-3 mb-0'>Admin</p>
                                        <li>June 24, 2024</li>
                                    </div>
                                    <h2 className='fw-bold'>{blogdata.content[0].title}</h2>
                                    <p> {blogdata.content[0].description} </p>
                                    {blogdata.content.map((data, index) => (
                                        <div className="bussines_sub_box mt-4">
                                            <h3 className='fw-bold'>{index + 1}. {data.title} </h3>
                                            <p>{data.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="col-12 col-lg-4">
                                <div className="bussines_sub_two px-3">
                                    <div className="blog_input position-relative mb-4 ">
                                        <input type="text" className='p-3 col-12 rounded-2 border-0 ' placeholder='Search...' name="" id="" />
                                        <Link className='text-dark'><IoSearch className='position-absolute' /></Link>
                                    </div>
                                    <div className="bolg_new">
                                        <h2 className='mb-4 fw-bold text-center text-xl-start'>Latest New Blog</h2>
                                        <div className="bolg_sub d-flex ">
                                            <Link className='d-flex text-dark col-12 text-decoration-none flex-wrap flex-xl-nowrap'>
                                                <div className="blog_image col-12  col-xl-3 me-2 d-flex justify-content-center mb-3">
                                                    <img src={blog_two} alt="" className='rounded-2 col-xl-12 ' />
                                                </div>
                                                <div className="sub_blog_content col-12  col-xl-9 text-center text-xl-start">
                                                    <h6>1. How to Choose the Right IT Service Provider for Your Business</h6>
                                                    <p> Provide tips on selecting an IT service provider based on expertise, experience, support, and cost.</p>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="bolg_sub d-flex ">
                                            <Link className='d-flex text-dark text-decoration-none flex-wrap flex-xl-nowrap'>
                                                <div className="blog_image col-12 col-xl-3 me-2 d-flex justify-content-center mb-3">
                                                    <img src={blogimg3} alt="" className='rounded-2 col-xl-12 ' />
                                                </div>
                                                <div className="sub_blog_content col-xl-9 text-center text-xl-start">
                                                    <h6>2.The Importance of Cybersecurity for Small Businesses</h6>
                                                    <p>Discuss why small businesses are at risk, common threats, and effective measures to safeguard their data. A graphic showing common cyber threats and protection measures.</p>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="bolg_sub d-flex ">
                                            <Link className='d-flex text-dark text-decoration-none flex-wrap flex-xl-nowrap'>
                                                <div className="blog_image col-12 col-xl-3 me-2 d-flex justify-content-center mb-3">
                                                    <img src={blogimg4} alt="" className='rounded-2 col-xl-12 ' />
                                                </div>
                                                <div className="sub_blog_content col-xl-9 text-center text-xl-start">
                                                    <h6>3.IT’s Key Role in Powering Digital Business Evolution.</h6>
                                                    <p>Explain how IT drives digital transformation in organizations through automation, data analytics, and cloud solutions.A diagram illustrating the digital</p>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="bolg_sub d-flex ">
                                            <Link className='d-flex text-dark text-decoration-none flex-wrap flex-xl-nowrap'>
                                                <div className="blog_image col-12 col-xl-3 me-2 d-flex justify-content-center mb-3">
                                                    <img src={blogimg5} alt="" className='rounded-2 col-xl-12 ' />
                                                </div>
                                                <div className="sub_blog_content col-xl-9 text-center text-xl-start">
                                                    <h6>4.Why Your Business Needs a Custom Software Solution</h6>
                                                    <p> Discuss the benefits of custom software solutions compared to off-the-shelf products, with examples of tailored IT solutions.Before-and-after scenario comparison</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="blog_post mt-4">
                                        <h2 className='mb-4 fw-bold text-center text-xl-start'>Instagram Post</h2>
                                        <div className="blog_insta_box d-flex flex-wrap col-12">
                                            <div className="blog_img col-4">
                                                <Link><img src={insta1} alt="" className='p-2 col-12 img-fluid' /></Link>
                                            </div>
                                            <div className="blog_img col-4">
                                                <Link><img src={insta2} alt="" className='p-2 col-12 img-fluid' /></Link>
                                            </div>
                                            <div className="blog_img col-4">
                                                <Link><img src={insta3} alt="" className='p-2 col-12 img-fluid' /></Link>
                                            </div>
                                            <div className="blog_img col-4">
                                                <Link><img src={insta4} alt="" className='p-2 col-12 img-fluid' /></Link>
                                            </div>
                                            <div className="blog_img col-4">
                                                <Link><img src={insta5} alt="" className='p-2 col-12 img-fluid' /></Link>
                                            </div>
                                            <div className="blog_img col-4">
                                                <Link><img src={insta7} alt="" className='p-2 col-12 img-fluid' /></Link>
                                            </div>
                                        </div>
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

export default Bussines
