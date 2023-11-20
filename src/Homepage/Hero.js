import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
    return (

        <div>
            <section className="hero-section" id="section_1">
                <div className="section-overlay"></div>

                <div className="container d-flex justify-content-center align-items-center">
                    <div className="row">

                        <div className="col-12 mt-auto mb-5 text-center">


                            <img className="shop_img"
                                src="https://cdn.shopify.com/s/files/1/0643/0058/1098/files/hero-logo_1.png?v=1652909849"
                                width="60%" alt="" />


                        </div>
                        <Link className="btn btn-danger button_edit" to="/shop"
                            
                        >Shop Now</Link>
                    </div>
                </div>
            </section>

            <section className="video-wrap">
                <video autoPlay loop muted className="custom-video" poster="">
                    <source src="\video\cc7d54e4132a4b59935981fbce6fa2b9.mp4"
                        type="video/mp4" />

                    Your browser does not support the video tag.
                </video>
                
            </section>
        </div>

    )
}
