/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/no-redundant-roles */
import React from 'react'


export default function Contant() {
    return (
        <div>

            <div className='cntainer mx-5 mb-5'>
                <div className='row'>
                    <div className='col-md-12'>
                        <h2 className='mt-5 mb-2 h2-edit'
                            style={{ fontSize: "6.25rem", fontWeight: "700", fontFamily: "'inter',sans-serif" }}
                        >
                            Podcasts
                        </h2>
                        <p
                            style={{ marginBottom: "7%" }}
                        >
                            From longform interviews with astronauts and engineers to narrative shows that take you on a tour of the galaxy, NASA’s diverse podcast portfolio lets you experience<br /> the thrill of space exploration without ever leaving Earth.
                        </p>
                    </div>
                    <div className='col-md-3'>
                    
                        <img src='https://www.nasa.gov/wp-content/uploads/2021/09/hwhap_logo_2021.jpg' width="85%" />
                        <h5 className='h5-edit'>Houston We Have a Podcast</h5>
                        <p>From Earth orbit to the Moon and Mars,<br /> explore the world of human spaceflight<br /> with NASA each week on the official<br /> podcast of the Johnson Space Center in<br /> Houston, Texas. Listen to in-depth<br /> conversations with the astronauts,<br /> scientists and engineers who make it<br /> possible.</p>
                
                    </div>
                    <div className='col-md-3'>
                        <img src='https://www.nasa.gov/wp-content/uploads/2020/03/nasascuriousuniverselogo.png' width="85%" />
                        <h5 className='h5-edit'>NASA's Curious Universe</h5>
                        <p>Our universe is a wild and wonderful<br /> place. Join NASA astronauts, scientists<br /> and engineers on a new adventure each<br /> episode — all you need is your curiosity!<br /> First time space explorers welcome.</p>
                    </div>
                    <div className='col-md-3'>
                        <img src='https://www.nasa.gov/wp-content/uploads/2023/07/onamissionblue2021-1400x1400-1.jpg' width="85%" />
                        <h5 className='h5-edit'>On a Mission</h5>
                        <p>A journey to the stars doesn’t just begin at<br /> the launchpad. Discover new worlds<br /> through epic stories told by scientists on<br /> missions to outer space.</p>
                    </div>
                    <div className='col-md-3'>
                        <img src='https://www.nasa.gov/wp-content/uploads/2017/08/1400x1400px_podcastalbumcover.png' width="85%" />
                        <h5 className='h5-edit'>Small Steps, Giant Leaps</h5>
                        <p>NASA’s technical workforce put boots on<br /> the Moon, tire tracks on Mars, and the<br /> first reusable spacecraft in orbit around<br /> the Earth. Learn what’s next as they build<br /> missions that redefine the future with<br /> amazing discoveries and remarkable<br /> innovations.</p>
                    </div>
                    <div className='col-md-3'>
                        <img src='https://www.nasa.gov/wp-content/uploads/2023/09/universocuriosodelanasaart3000.png' width="85%" />
                        <h5 className='h5-edit'>Universo curioso de la NASA</h5>
                        <p>Bienvenidos a Universo curioso de la<br /> NASA, en donde te invitamos a explorar el<br /> cosmos en tu idioma. En este pódcast, ¡la<br /> NASA es tu guía turística a las estrellas!</p>
                    </div>


                </div>
            </div>

        </div>
    )
}
