import React from 'react'
import './loader.css'
const Loader = () => {
    return (
        <div className='loader_box' >
            <div className="loader_image">
                <img src="https://www.t3bucket.com/f/0-Logo.8ca771cff9a727ee08bf.png" alt="" />
            </div>
            <div class="loading-wave">
                <div class="loading-bar"></div>
                <div class="loading-bar"></div>
                <div class="loading-bar"></div>
                <div class="loading-bar"></div>
            </div>

        </div>
    )
}

export default Loader