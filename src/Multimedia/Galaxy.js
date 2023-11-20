import React from 'react'

export default function Galaxy() {
    return (
        <div>
            <div class="container dina">
                <div className='row'>

                    <div class="coll col-md-4"
                        style={{
                            borderBottomLeftRadius: "5px",
                            borderTopLeftRadius: " 5px",
                        }}
                    >
                        <h2>Cartwheel Galaxy</h2>
                        <div class="caption">
                            <p>NASA’s James Webb Space Telescope has peered into the chaos of the Cartwheel Galaxy, revealing new details about star formation and the galaxy’s central black hole. Webb’s powerful infrared gaze produced this detailed image of the Cartwheel and two smaller companion galaxies against a backdrop of many other galaxies. This image provides a new view of how the Cartwheel Galaxy has changed over billions of years</p>
                            <button type="button">Know More</button>
                        </div>
                    </div>
                    <div class="coll col-md-4">
                        <h2>Understanding Galaxies</h2>
                        <div class="caption">
                            <p>Galaxies show us how the matter in the universe is organized on large scales. In order to understand the nature and history of the universe, scientists study how the matter is currently organized and how that organization has changed through out cosmic time. In fact, scientists examine how matter is distributed and behaves at multiple size scales in our quest for this understanding.</p>
                            <button type="button">Know More</button>
                        </div>
                    </div>
                    <div class="coll col-md-4"
                        style={{
                            borderBottomRightRadius: "5px",
                            borderTopRightRadius: " 5px",
                        }}>
                        <h2>Hubble's Galaxy</h2>
                        <div class="caption">
                            <p>With more than 33 years in orbit and 1.5 million observations, Hubble's data offers a wealth of information about the objects in our universe. We've combed through Hubble's extensive archive looking for data that would give us interesting galaxy images to share. These are a few of our most recent images.</p>
                            <button type="button">Know More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
