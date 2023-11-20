/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Link } from 'react-router-dom'


export default function About() {
  return (
    <div>


      <div className='about container text-center'>
        <div className='row' >
          <div className='col-md-12'>
            <p >EXPLORE OUR</p>
            <h2 style={{
              fontSize: "48px",
              fontWeight: "600",
              fontFamily: "sans-serif",
              marginBottom: "26px",
            }}>FEATURED ITEMS</h2>
            <hr
              style={{
                width: "80%",
                margin: "auto",
                marginBottom: "41px",
                border: "1px solid #000",
                borderRadius: "20px"

              }}
            />
          </div>
          <div className='col-md-4 mb-4 '
            data-aos="fade-up"
            data-aos-duration="1600"
          >
            <img className='img-fluid imggg span3 ' src='/imges/Crew7BlueTshirt_600x.webp' />
            <p > Crew 7 Unisex Tshirt<br /> <span style={{ color: "#e42a2a" }}>From LE 532.00 EGP</span>
              <span className='text-muted ' style={{ textDecoration: "line-through" }}> LE 783.00 EGP</span></p>
            <p >2 colors available</p>
            <Link
            className='btn btn_edit' to="/shop">Quick view</Link>
          </div>
          <div className='col-md-4 mb-4'
            data-aos="fade-up"
            data-aos-duration="1600"
          >
            <img className='img-fluid' src='\imges\Crew7patch_600x.webp' />
            <p>Crew 7 Patch</p>
            <p>LE 218.00 EGP</p>
            <Link className='btn btn_edit' to="/shop">Quick view</Link>

          </div>
          <div className='col-md-4 mb-4'
            data-aos="fade-up"
            data-aos-duration="1600"
          >
            <img className='img-fluid' src='\imges\unisex-34-sleeve-raglan-shirt-white-black-front-64e81c7e258d7_600x.webp' />
            <p >Crew 7 3/4 sleeve raglan shirt<br /> <span style={{ color: "#e42a2a" }}> From LE 846.00 EGP </span><span style={{ textDecoration: "line-through" }}> LE 783.00 EGP</span></p>
            <p >6 colors available</p>
            <Link className='btn btn_edit ' to="/shop">Quick view</Link>
          </div>
          <div className='col-md-4 mb-4'
            data-aos="fade-up"
            data-aos-duration="1600"
          >
            <img className='img-fluid' src='\imges\Crew7polo_600x.webp' />
            <p >Crew 7 Polo<br /> <span style={{ color: "#e42a2a" }}>From LE 1,253.00 EGP </span><span style={{ textDecoration: "line-through" }}> LE 1,567.00 EGP</span></p>
            <p >2 colors available</p>
            <Link className='btn btn_edit' to="/shop">Quick view</Link>
          </div>
          <div className='col-md-4 mb-4'
            data-aos="fade-up"
            data-aos-duration="1600"
          >
            <img className='img-fluid' src='\imges\NasaSuitBackpack_600x.webp' />
            <p>NASA Suit Backpack</p>
            <p>LE 1,567.00 EGP</p>
            <Link className='btn btn_edit' to="/shop">Quick view</Link>
          </div>
          <div className='col-md-4 mb-4'
            data-aos="fade-up"
            data-aos-duration="1600"
          >
            <img className='img-fluid' src='\imges\flight_suit_white_1000psi_600x.webp' />
            <p>White Astronaut Flight Suit</p>
            <p>From LE 1,034.00 EGP</p>
            <Link className='btn btn_edit' to="/shop">Quick view</Link>
          </div>
          <div className='col-md-4 mb-4'
            data-aos="fade-up"
            data-aos-duration="1600"
          >
            <img className='img-fluid' src='\imges\NASAARTEMISblackshirt_600x.webp' />
            <p>White Astronaut Flight Suit</p>
            <p>From LE 1,034.00 EGP</p>
            <Link className='btn btn_edit' to="/shop">Quick view</Link>
          </div>
          <div className='col-md-4 mb-4'
            data-aos="fade-up"
            data-aos-duration="1600"
          >
            <img className='img-fluid' src='\imges\Crew7Cap_600x.webp' />
            <p >Crew 7 Cap<br /> <span style={{ color: "#e42a2a" }}>LE 783.00 EGP</span><span className='text-muted ' style={{ textDecoration: "line-through" }}>LE 940.00 EGP</span></p>

            <Link className='btn btn_edit' to="/shop">Quick view</Link>
          </div>
          <div className='col-md-4 mb-4'
            data-aos="fade-up"
            data-aos-duration="1600"
          >
            <img className='img-fluid' src='\imges\unisex-premium-hoodie-forest-green-front-64e822e9160ed_600x.webp' />
            <p >Crew 7 Unisex Hoodie<br /> <span style={{ color: "#e42a2a" }}>From LE 1,253.00 EGP</span> <span className='text-muted ' style={{ textDecoration: "line-through" }}> LE 783.00 EGP</span></p>
            <p >5 colors available</p>
            <Link className='btn btn_edit' to="/shop">Quick view</Link>
          </div>

        </div>

      </div>
    </div>
  )
}
