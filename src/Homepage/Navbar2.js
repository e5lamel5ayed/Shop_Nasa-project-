/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Link } from 'react-router-dom'
import { CartProvider,useCart } from 'react-use-cart'

export default function Navbar() {
    const{totalItems } =useCart();
  return (
    <CartProvider>
        <nav className="navbar navbar-expand-lg navbar2" style={{backgroundColor:"#212121"}}>
        <div className="container-fluid">
        <Link to="/">
            <img className="nav_img" src="\imges\logo_2_500x.webp" alt=""/>

            </Link>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="" id="navbarNav">
                <ul className="navbar-nav align-items-lg-center ms-auto me-lg-5 ">

                    <li className="nav-item">
                        <Link className="nav-link click-scroll navText_edit" to="/shop" style={{fontWeight: "800"}}>SHOP</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link click-scroll navText_edit" to="/collections" style={{fontWeight: "800"}}>COLLECTIONS</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link click-scroll navText_edit" to="/multimedia" style={{fontWeight: "800"}}>Multimedia</Link>
                    </li>
                    
                    <li className="nav-item">
                        <Link className="nav-link click-scroll navText_edit" to="/programs" style={{fontWeight: "800"}}>NASA+</Link>
                    </li>



                </ul>
            </div>

                <div className="header__icon-list mx-4">
                    <Link to="/search" is="toggle-link mx-3"
                        className="header__icon-wrapper tap-area hidden-pocket hidden-lap " aria-label="Search"
                        aria-controls="search-drawer" aria-expanded="false"><svg focusable="false" width="18"
                            height="18" className="icon icon--header-search   " viewBox="0 0 18 18">
                            <path
                                d="M12.336 12.336c2.634-2.635 2.682-6.859.106-9.435-2.576-2.576-6.8-2.528-9.435.106C.373 5.642.325 9.866 2.901 12.442c2.576 2.576 6.8 2.528 9.435-.106zm0 0L17 17"
                                fill="none" stroke="currentColor" stroke-width="2"></path>
                        </svg></Link>
                    <Link to="/login" className="header__icon-wrapper tap-area hidden-phone mx-3" aria-label="Login">
                        <img src="imges\Asset_1_3x_450x_0fd580e9-ecbe-45ec-aaca-ae198ffb2aa6_450x.webp"
                            style={{maxWidth: "30px"}}/>
                    </Link>
                    <Link to="/cart" is="toggle-link" aria-controls="mini-cart" aria-expanded="false"
                        className="header__icon-wrapper tap-area " aria-label="Cart" data-no-instant=""><svg
                            focusable="false" width="20" height="18" className="icon icon--header-cart   "
                            viewBox="0 0 20 18">
                            <path d="M3 1h14l1 16H2L3 1z" fill="none" stroke="currentColor" stroke-width="2"></path>
                            <path d="M7 4v0a3 3 0 003 3v0a3 3 0 003-3v0" fill="none" stroke="currentColor"
                                stroke-width="2"></path>
                        </svg>
                        <div className='eslam'>
                    
                    </div>
                    </Link>
                        <p
                        className="header__cart-count header__cart-count--floating bubble-count text-center" 
                        style={{
                            color: "rgb(0, 0, 0)",
                            display: "inline",
                            position: "relative",
                            top: "-15px",
                            right:" 26px",
                            fontSize: "17px",
                            fontWeight: "600"

                            }}>{totalItems}</p>
   

            </div>
        </div>
    </nav>
    </CartProvider>
  )
}
