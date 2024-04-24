import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Fade, Zoom, Slide } from 'react-slideshow-image'

function Carousel() {
    return (
        <div class="carousel">
            <div id="carouselExample" class="carousel slide">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="../Images/image1.png" class="d-block w-100" alt="Image 1"/>
                    </div>
                    <div class="carousel-item">
                        <img src="../Images/image1.png" class="d-block w-100" alt="Image 2"/>
                    </div>
                    <div class="carousel-item">
                        <img src="../Images/image1.png" class="d-block w-100" alt="Image 3"/>
                    </div>
                    <div class="carousel-item">
                        <img src="../Images/image1.png" class="d-block w-100" alt="Image 4"/>
                    </div>
                    <div class="carousel-item">
                        <img src="../Images/image1.png" class="d-block w-100" alt="Image 5"/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Carousel
