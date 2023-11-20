/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

export default function Imgday() {
    return (
        <div>
            <div className='container mt-5 mb-5'>
                <div className='row '>
                    <div className='col-md-5 mt-4 mb-3'>
                        <p>TODAY</p>
                        <h2 style={{ fontSize: "2.562rem" }}>Image Of The Day</h2>
                        <br />
                        <br />
                        <p style={{ lineHeight: ".95em", fontFamily: "inter,sans-serif", fontSize: "1.375rem", fontWeight: "600" }}>Details from Webb’s Cameras Reveal<br /> Crabby Composition</p>
                        <p>6,500 light-years away lies the Crab Nebula, the<br /> remains of an exploded star. While this target has<br /> been well-studied by multiple observatories,<br /> including the Hubble Space Telescope, Webb’s<br /> infrared sensitivity and resolution offer new clues<br /> into the makeup and origins of this scene.</p>

                    </div>

                    <div className='col-md-7 mt-4 mb-3'>
                        <div className='imgday'>
                            <img className='img-fluid' src='/imges/53297865145-e3db450a1b-o.webp' width="550px" />
                        </div>

                    </div>



                </div>
            </div>
        </div>
    )
}
