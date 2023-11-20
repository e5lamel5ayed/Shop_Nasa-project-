/* eslint-disable jsx-a11y/alt-text */
import { CartProvider, useCart } from "react-use-cart";
// import { Col, Container, Row } from "reactstrap";
import Navbar2 from "../Homepage/Navbar2";
import { Col, Container, Row } from "reactstrap";
import ScrollToTop from "react-scroll-to-top";



function Cart() {
    const {
        // totalItems,
        cartTotal,
        emptyCart,
        isEmpty,
        // totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
    } = useCart();

    if (isEmpty) {
        return (<h2 className="text-center pay_h "
        >Your cart is empty
            <i class="fa-solid fa-cart-arrow-down" style={{ color: "#212529" }}></i>
        </h2>
        );
    }
    return (
        <div>

            <div className="col-md-12 text center"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1600"
            >
                <h1

                    style={{
                        backgroundColor: "rgb(33 33 33)",
                        color: "rgb(255 255 255 / 98%)",

                    }}
                    className="text-center Cart_pay">Cart</h1>
            </div>

            <Container className="container-fluid">
                <Row>
                    <Col md="12 bn40divv">
                        <button className="bn400" onClick={() => emptyCart()}>Clear Cart</button>
                    </Col>

                    <Row >
                        <Col md='8'
                            style={{
                                border: "5px solid",
                                width: " 60%",
                                margin: "auto",
                                marginBottom: "50px"
                            }}
                        >
                            <Row>
                                {items.map((item) => (
                                    <Col md="6" className="my-5 text-center">
                                        <div key={item.id}>

                                            <p> {item.title} <span style={{ color: "#e42a2a", backgroundColor: "#fff" }}>{item.price * item.quantity * 40} LE</span></p>
                                            <img
                                                style={{ width: "25%", marginBottom: "20px", marginRight: "8%" }}
                                                src={item.images[0]} />

                                            <button
                                                className="btn41-43 btn-42"
                                                onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                                            >
                                                -
                                            </button>
                                            <p style={{ display: "inline" }}> {item.quantity}</p>
                                            <button
                                                className="btn41-43 btn-42"
                                                style={{ margin: "10px" }}
                                                onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                                            >
                                                +
                                            </button>
                                            <div className="bn40div">

                                                <button
                                                    className="bn40"
                                                    onClick={() => removeItem(item.id)}>Remove</button>
                                            </div>


                                        </div>
                                    </Col>
                                ))}
                            </Row>

                        </Col>

                        <Col md='4'>
                            <div className="container container_pay p-0">
                                <div className="card_pay px-4">
                                    <p className="h8 py-3">Payment Details</p>
                                    <div className="row gx-3">
                                        <div className="col-12">
                                            <div className="d-flex flex-column">
                                                <p className="text mb-1">Person Name</p>
                                                <input className="form-control mb-3" type="text" placeholder="Name" value="Eslam Elsayed" />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="d-flex flex-column">
                                                <p className="text mb-1">Card Number</p>
                                                <input className="form-control mb-3" type="text" placeholder="1234 5678 435678" />
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="d-flex flex-column">
                                                <p className="text mb-1">Expiry</p>
                                                <input className="form-control mb-3" type="text" placeholder="MM/YYYY" />
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="d-flex flex-column">
                                                <p className="text mb-1">CVV/CVC</p>
                                                <input className="form-control mb-3 pt-2 " type="password" placeholder="***" />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="btn btn-primary mb-3">
                                                <span className="ps-3">Checkout . LE {cartTotal} EGP</span>
                                                <span className="fas fa-arrow-right"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>

                </Row>
            </Container>

        </div>
    );
}
export default function CartPage() {
    return (
        <CartProvider>
            <Navbar2 />
            <Cart />

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


