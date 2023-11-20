import React from 'react'

export default function Progarm() {
    return (
        <div>
            <div className='alll'>
                <div className='container nasa-edit'>
                    <div className='row'>
                        <div className='col-md-4'
                            style={{ alignSelf: "center" }}
                        >
                            <span className='span-edit text-muted '>COMING SOON</span>
                            <h2
                                style={{ fontSize: "2.25rem" }}
                                className='mb-2'
                            >NASA+: Our New<br /> Streaming Service</h2>
                            <p
                                style={{
                                    fontSize: ".875rem", color: "#d1d1d1",
                                    fill: "#d1d1d1"
                                }}
                            >Coming soon: our new ad-free, no cost, family-friendly streaming
                                service unlocks our Emmy award-winning live coverage, embeds
                                you into our missions through new original video series and puts
                                the universe at your fingertips.</p>
                        </div>
                        <div className='col-md-8'>
                            <video controls autoPlay loop muted className="ved">
                                <source src='\video\final-nasa-15-sec-horizontal-16-9.mp4' width="100%"></source>
                            </video>
                        </div>
                    </div>
                </div>

                
            </div>



        </div>
    )
}
