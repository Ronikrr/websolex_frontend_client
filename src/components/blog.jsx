import React, { useEffect, useState } from 'react'
import { MdArrowOutward } from "react-icons/md";
import { Link } from 'react-router-dom';
import FeedbackMessage from './feedback';
import { useGetBlogsQuery } from '../redux/apiSlice';
import Loader from './loader';
const Blog = () => {
    const { data, error, loading } = useGetBlogsQuery();
    const [feedback, setFeedback] = useState({ message: "", type: "" })
    const handleClear = () => {
        setFeedback({ message: "", type: "" })
    }
    useEffect(() => {
        if (error) {
            setFeedback({
                message: `Error fetching : ${error.Message}`,
                type: "error",
            })
       }
            
    }, [error])
    const handleTabClick = () => {
        window.scrollTo(0, 0);
    };
    if (loading) {
    return <Loader/>
}


    return (
        <>
            {feedback.message && <FeedbackMessage message={feedback.message} type={feedback.type} onClear={handleClear} />}
            <section className='blog_section pb-100'>
                <div className="container">
                    <div className="row">
                        <h2 className='mb-5 text-center text-lg-start'>Recent Blog Post</h2>
                        <div className="col-12 d-flex justify-content-center flex-wrap">
                            {data?.map((data, index) => (
                                <div className="col-md-6 col-xl-4 mb-5" key={data?._id} >
                                    <div className="blog_sub p-2">
                                        <div className="blog_images mb-4">
                                            <img src={data?.image} alt="" className='img-fluid box_image ' />
                                        </div>
                                        <div className="blog_content position-relative">
                                            <h5 className='fw-bold'>{data?.content[0]?.title}</h5>
                                            <p>{data?.content[0]?.description} </p>
                                        </div>
                                        <div className="blog_btn mt-4">
                                            <Link to={`/blog/${data?._id}`} onClick={handleTabClick} className='text-decoration-none text-light rounded-2'>Read More <MdArrowOutward /></Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Blog



