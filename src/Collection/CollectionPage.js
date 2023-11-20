/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import ScrollToTop from "react-scroll-to-top";

import Navbar2 from '../Homepage/Navbar2'
import CollHead from './CollHead'
import axios from 'axios'
import { Col, Container, Row } from 'reactstrap'
import Footer from '../Homepage/Footer'
import { CartProvider } from 'react-use-cart';


export class CollectionPage extends Component {
  state = {
    products: []
  }
  componentDidMount() {
    axios.get('/img.json')
      .then((result) => {
        this.setState(
          {
            products: result.data
          }
        )
      })
  }
  

  render() {
    return (
      <CartProvider>
        <Navbar2 />
        <CollHead />
        <Container className='mt-5 mb-5'>
          <h2 className='text-center coll_h2'>COLLECTION</h2>
          <Row>
            {this.state.products.map((item) =>

              <Col md='4' className='text-center mt-5 '
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="400"
              >

                <div class="card">
                  <div class="imgBox">
                    <img src={item.thumbnailUrl} alt="some image"/>
                  </div>
                  <div class="details">
                    <h2>{item.title} <br/><span>{item.price}</span></h2>
                  </div>
                </div>

              </Col>

            )}
          </Row>
        </Container>
        <Footer />
        <ScrollToTop smooth
          viewBox="0 0 512 512"
          svgPath='M405.078,106.438c-13.156,0-31.75,22.156-31.75,37.281v188.766c-9.25-6.859-18.438-14.266-26.547-22.922
		V114.734C346.781,68.188,294.203,0,257.047,0c-37.172,0-89.75,68.188-89.75,114.734v194.828
		c-8.719,9.313-18.688,17.172-28.625,24.469V143.719c0-15.125-18.609-37.281-31.734-37.281c-13.156,0-31.75,22.156-31.75,37.281
		v311.984h63.484v-22.344h28.625v29.531h179.484v-29.531h26.547v22.344h63.484V143.719
		C436.813,128.594,418.203,106.438,405.078,106.438z M387.344,414.188H126.75c-13.125,0-14.328-37.75,13.984-58.031
		c33.391-23.891,73.375-53.484,73.375-117.203c0-29.594,0-44.391,0-71.703c0-22.625,19.219-55.75,42.938-55.75
		c23.703,0,42.922,33.125,42.922,55.75c0,27.313,0,42.109,0,71.703c0,63.719,39.984,93.313,73.375,117.203
		C401.656,376.438,400.453,414.188,387.344,414.188z
    M282.078,203.719c0,8.703-50.078,8.703-50.078,0c0-8.688,11.219-15.719,25.047-15.719
		S282.078,195.031,282.078,203.719z
    M209.906,374.25c0,10.594-8.578,19.156-19.172,19.156c-10.578,0-19.156-8.563-19.156-19.156
		s8.578-19.156,19.156-19.156C201.328,355.094,209.906,363.656,209.906,374.25z
    '


          style={{ width: "60px", height: "60px" }}
        />

      </CartProvider>
    )
  }
}

export default CollectionPage