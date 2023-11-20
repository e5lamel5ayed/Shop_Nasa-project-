/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Link } from 'react-router-dom'

export default function Form() {
    return (
        <div>
            <div className='container form'>
                <div className='row'>
                    <div className='col-md-12 mt-5'>
                        <h2 className='text-center'>LOGIN</h2>
                        <p className='text-center'>Please enter your e-mail and password:</p>
                    </div>
                    <div className=''>
                        <form>
                            <input type='email' placeholder='E-mail'></input>
                            <br />
                            <input type='password' placeholder='Password'></input>
                            <br />
                            <input type='submit' className='btn mt-4' style={{ backgroundColor: "#175eb1", color: "#fff", fontSize: "15px" }} value="LOGIN"></input>
                            <p className='text-muted mt-4' >New customer?
                                <Link className='text-muted mx-2' style={{ color: "#000" }}>Create an account</Link></p>
                        </form>
                    </div>
                    <div >
                        <p className='text logo-edit'>TO PIONEER THE FUTURE IN SPACE EXPLORATION, SCIENTIFIC<br />DISCOVERY AND AERONAUTICS RESEARCH.</p>
                        <img src='https://www.shopnasa.com/cdn/shop/files/shopNASAlogoblack_150x.png?v=1662134036'></img>

                    </div>
                </div>

            </div>
        </div>
    )
}
