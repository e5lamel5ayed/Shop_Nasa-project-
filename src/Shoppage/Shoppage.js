/* eslint-disable no-unused-vars */

/* eslint-disable jsx-a11y/alt-text */
import { CartProvider, useCart } from "react-use-cart";
import { Col, Container, Row } from "reactstrap";
import Navbar2 from "../Homepage/Navbar2";
import Footer from "../Homepage/Footer";
import ScrollToTop from "react-scroll-to-top";


function Page() {
    const { addItem } = useCart();

    const products = [
        {
            "id": 1,
            "title": "Artemis I Logo Unisex t-shirt",
            "description": "5 colors available",
            "price":  720.00 ,
            "discountPercentage": 12.96,
            "rating": 4.69,
            "stock": 94,
            "brand": "Apple",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
            "images": [
                "https://www.shopnasa.com/cdn/shop/products/unisex-staple-t-shirt-black-front-62f7cf060313f_600x.jpg?v=1660408090",
                "https://i.dummyjson.com/data/products/1/2.jpg",
                "https://i.dummyjson.com/data/products/1/3.jpg",
                "https://i.dummyjson.com/data/products/1/4.jpg",
                "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
            ]
        },
        {
            "id": 2,
            "title": "Artemis Oversized tie-dye t-shirt",
            "description": "5 colors available",
            "price":  846.00,
            "discountPercentage": 17.94,
            "rating": 4.44,
            "stock": 34,
            "brand": "Apple",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
            "images": [
                "https://www.shopnasa.com/cdn/shop/products/oversized-tie-dye-t-shirt-navy-white-front-628582772f5cb_600x.jpg?v=1692367010",
                "https://i.dummyjson.com/data/products/2/2.jpg",
                "https://i.dummyjson.com/data/products/2/3.jpg",
                "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
            ]
        },
        {
            "id": 3,
            "title": "Artemis Embroidered Champion Packable Jacket",
            "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
            "price": 1881.00 ,
            "discountPercentage": 15.46,
            "rating": 4.09,
            "stock": 36,
            "brand": "Samsung",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
            "images": [
                "https://www.shopnasa.com/cdn/shop/products/embroidered-champion-packable-jacket-black-front-624c89fcac8ff_600x.jpg?v=1649183238"
            ]
        },
        {
            "id": 4,
            "title": "Artemis Unisex T-Shirt",
            "description": "3 colors available",
            "price": 689.00 ,
            "discountPercentage": 17.91,
            "rating": 4.3,
            "stock": 123,
            "brand": "OPPO",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
            "images": [
                "https://www.shopnasa.com/cdn/shop/products/unisex-basic-softstyle-t-shirt-black-front-621cfcd6c13ff_600x.jpg?v=1646066911",
                "https://i.dummyjson.com/data/products/4/2.jpg",
                "https://i.dummyjson.com/data/products/4/3.jpg",
                "https://i.dummyjson.com/data/products/4/4.jpg",
                "https://i.dummyjson.com/data/products/4/thumbnail.jpg"
            ]
        },
        {
            "id": 5,
            "title": "Artemis Generation Hooded Sweatshirt",
            "description": "3 colors available",
            "price":  1410.00 ,
            "discountPercentage": 10.58,
            "rating": 4.09,
            "stock": 32,
            "brand": "Huawei",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
            "images": [
                "https://www.shopnasa.com/cdn/shop/products/ArtemisHoodieAqua_5cd0de75-f536-4a8d-a604-5114f6ac3f84_600x.jpg?v=1683146539",
                "https://i.dummyjson.com/data/products/5/2.jpg",
                "https://i.dummyjson.com/data/products/5/3.jpg"
            ]
        },
        {
            "id": 6,
            "title": "Artemis Unisex  sweatpants",
            "description": "6 colors available",
            "price":  1253.00 ,
            "discountPercentage": 11.02,
            "rating": 4.57,
            "stock": 83,
            "brand": "Apple",
            "category": "laptops",
            "thumbnail": "https://i.dummyjson.com/data/products/6/thumbnail.png",
            "images": [
                "https://www.shopnasa.com/cdn/shop/products/unisex-fleece-sweatpants-black-front-624c8505a19e6_600x.jpg?v=1649181970",
                "https://i.dummyjson.com/data/products/6/2.jpg",
                "https://i.dummyjson.com/data/products/6/3.png",
                "https://i.dummyjson.com/data/products/6/4.jpg"
            ]
        },
        {
            "id": 7,
            "title": "NASA Retro Brass Tacks Tshirt",
            "description": "",
            "price": 908.00 ,
            "discountPercentage": 4.15,
            "rating": 4.25,
            "stock": 50,
            "brand": "Samsung",
            "category": "laptops",
            "thumbnail": "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
            "images": [
                "https://www.shopnasa.com/cdn/shop/products/NASARetroBrasstacks2_600x.jpg?v=1651063103",
                "https://i.dummyjson.com/data/products/7/2.jpg",
                "https://i.dummyjson.com/data/products/7/3.jpg",
                "https://i.dummyjson.com/data/products/7/thumbnail.jpg"
            ]
        },
        {
            "id": 8,
            "title": "NASA Brass Tacks Tshirt",
            "description": "",
            "price":  783.00 ,
            "discountPercentage": 10.23,
            "rating": 4.43,
            "stock": 68,
            "brand": "Microsoft Surface",
            "category": "laptops",
            "thumbnail": "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
            "images": [
                "https://www.shopnasa.com/cdn/shop/products/721f8c61-8ca6-4545-a08e-ba354cf44242_600x.png?v=1643756228",
                "https://i.dummyjson.com/data/products/8/2.jpg",
                "https://i.dummyjson.com/data/products/8/3.jpg",
                "https://i.dummyjson.com/data/products/8/4.jpg",
                "https://i.dummyjson.com/data/products/8/thumbnail.jpg"
            ]
        },
        {
            "id": 9,
            "title": "Limited Edition Space ball JSC Tshirt",
            "description": "3 colors available",
            "price":  689.00 ,
            "discountPercentage": 11.83,
            "rating": 4.54,
            "stock": 96,
            "brand": "Infinix",
            "category": "laptops",
            "thumbnail": "https://i.dummyjson.com/data/products/9/thumbnail.jpg",
            "images": [
                "https://www.shopnasa.com/cdn/shop/products/NASABaseballTshirtOrange_600x.jpg?v=1666623518",
                "https://i.dummyjson.com/data/products/9/2.png",
                "https://i.dummyjson.com/data/products/9/3.png",
                "https://i.dummyjson.com/data/products/9/4.jpg",
                "https://i.dummyjson.com/data/products/9/thumbnail.jpg"
            ]
        },
        {
            "id": 10,
            "title": "Launch America  Unisex T-Shirt",
            "description": "3 colors available",
            "price":  595.00 ,
            "discountPercentage": 6.18,
            "rating": 4.43,
            "stock": 89,
            "brand": "HP Pavilion",
            "category": "laptops",
            "thumbnail": "https://i.dummyjson.com/data/products/10/thumbnail.jpeg",
            "images": [
                "https://www.shopnasa.com/cdn/shop/products/unisex-basic-softstyle-t-shirt-navy-front-60b8f6cae23f4_600x.jpg?v=1622734545",
                "https://i.dummyjson.com/data/products/10/2.jpg",
                "https://i.dummyjson.com/data/products/10/3.jpg",
                "https://i.dummyjson.com/data/products/10/thumbnail.jpeg"
            ]
        },
        {
            "id": 11,
            "title": "NASA 3/4 Zip Fleece",
            "description": "3 colors available",
            "price":  1253.00 ,
            "discountPercentage": 8.4,
            "rating": 4.26,
            "stock": 65,
            "brand": "Impression of Acqua Di Gio",
            "category": "fragrances",
            "thumbnail": "https://i.dummyjson.com/data/products/11/thumbnail.jpg",
            "images": [
                "https://www.shopnasa.com/cdn/shop/products/4c977417-ead8-41c8-9d3f-ad56d6f92d50_600x.png?v=1641992049",
                "https://i.dummyjson.com/data/products/11/2.jpg",
                "https://i.dummyjson.com/data/products/11/3.jpg",
                "https://i.dummyjson.com/data/products/11/thumbnail.jpg"
            ]
        },
        {
            "id": 12,
            "title": "NASA 3/4 Zip Pullover",
            "description": "",
            "price":  1881.00,
            "discountPercentage": 15.66,
            "rating": 4,
            "stock": 52,
            "brand": "Royal_Mirage",
            "category": "fragrances",
            "thumbnail": "https://i.dummyjson.com/data/products/12/thumbnail.jpg",
            "images": [
                "https://www.shopnasa.com/cdn/shop/products/zippullover_worm_1000x_edit_600x.jpg?v=1620936215",
                "https://i.dummyjson.com/data/products/12/2.jpg",
                "https://i.dummyjson.com/data/products/12/3.png",
                "https://i.dummyjson.com/data/products/12/4.jpg",
                "https://i.dummyjson.com/data/products/12/thumbnail.jpg"
            ]
        },
        {
            "id": 13,
            "title": "Snoopy Artemis Unisex Tshirt",
            "description": "2 colors available",
            "price":  689.00 ,
            "discountPercentage": 8.14,
            "rating": 4.59,
            "stock": 61,
            "brand": "Fog Scent Xpressio",
            "category": "fragrances",
            "thumbnail": "https://i.dummyjson.com/data/products/13/thumbnail.webp",
            "images": [
                "https://www.shopnasa.com/cdn/shop/products/snoopyartemistshirt_grey_1000x_3588a8d9-1ded-4542-a0ac-1a0131fd69aa_600x.jpg?v=1669346260",
                "https://i.dummyjson.com/data/products/13/2.png",
                "https://i.dummyjson.com/data/products/13/3.jpg",
                "https://i.dummyjson.com/data/products/13/4.jpg",
                "https://i.dummyjson.com/data/products/13/thumbnail.webp"
            ]
        },
        {
            "id": 14,
            "title": "NASA Columbia Polo",
            "description": "2 colors available",
            "price":  1724.00 ,
            "discountPercentage": 15.6,
            "rating": 4.21,
            "stock": 114,
            "brand": "Al Munakh",
            "category": "fragrances",
            "thumbnail": "https://i.dummyjson.com/data/products/14/thumbnail.jpg",
            "images": [
                "https://www.shopnasa.com/cdn/shop/products/columbiameatballpolo_navy_1000x_0bec60e4-f986-4b98-a1e1-40d56cfd1b82_600x.jpg?v=1652295066",
                "https://i.dummyjson.com/data/products/14/2.jpg",
                "https://i.dummyjson.com/data/products/14/3.jpg",
                "https://i.dummyjson.com/data/products/14/thumbnail.jpg"
            ]
        },
        {
            "id": 15,
            "title": "Snoopy Artemis Hoodie",
            "description": "",
            "price":  1253.00 ,
            "discountPercentage": 10.99,
            "rating": 4.7,
            "stock": 105,
            "brand": "Lord - Al-Rehab",
            "category": "fragrances",
            "thumbnail": "https://i.dummyjson.com/data/products/15/thumbnail.jpg",
            "images": [
                "https://www.shopnasa.com/cdn/shop/products/snoopyhoodie_1000x_0cb5260f-dce6-44f0-ba26-fbd823320b2b_600x.jpg?v=1652968436",
                "https://i.dummyjson.com/data/products/15/2.jpg",
                "https://i.dummyjson.com/data/products/15/3.jpg",
                "https://i.dummyjson.com/data/products/15/4.jpg",
                "https://i.dummyjson.com/data/products/15/thumbnail.jpg"
            ]
        },
        {
            "id": 16,
            "title": "NASA's SpaceX CRS-25 Decal",
            "description": "",
            "price":  93.00 ,
            "discountPercentage": 13.31,
            "rating": 4.83,
            "stock": 110,
            "brand": "L'Oreal Paris",
            "category": "skincare",
            "thumbnail": "https://i.dummyjson.com/data/products/16/thumbnail.jpg",
            "images": [
                "https://www.shopnasa.com/cdn/shop/products/kiss-cut-stickers-3x3-default-62cf4cf7b20cd_600x.jpg?v=1657752831",
                "https://i.dummyjson.com/data/products/16/2.webp",
                "https://i.dummyjson.com/data/products/16/3.jpg",
                "https://i.dummyjson.com/data/products/16/4.jpg",
                "https://i.dummyjson.com/data/products/16/thumbnail.jpg"
            ]
        },
        {
            "id": 17,
            "title": "Snoopy Space Traveler Tshirt",
            "description": "",
            "price": 689.00 ,
            "discountPercentage": 4.09,
            "rating": 4.52,
            "stock": 78,
            "brand": "Hemani Tea",
            "category": "skincare",
            "thumbnail": "https://i.dummyjson.com/data/products/17/thumbnail.jpg",
            "images": [
                "https://www.shopnasa.com/cdn/shop/products/spacetravelert-shirt_1000x_c2ac858b-46d3-47df-b2b1-fc0910b6a1e9_600x.jpg?v=1662216509",
                "https://i.dummyjson.com/data/products/17/2.jpg",
                "https://i.dummyjson.com/data/products/17/3.jpg",
                "https://i.dummyjson.com/data/products/17/thumbnail.jpg"
            ]
        },
        {
            "id": 18,
            "title": "Youth Snoopy Mission to Moon Tshirt",
            "description": "Dermive Oil Free Moisturizer with SPF 20 is specifically formulated with ceramides, hyaluronic acid & sunscreen.",
            "price": 595.00 ,
            "discountPercentage": 13.1,
            "rating": 4.56,
            "stock": 88,
            "brand": "Dermive",
            "category": "skincare",
            "thumbnail": "https://i.dummyjson.com/data/products/18/thumbnail.jpg",
            "images": [
                "https://www.shopnasa.com/cdn/shop/products/missiontothemoont-shirt_1000x_a9c38dff-a68a-465d-b71c-123d4eae1df7_600x.jpg?v=1652969286",
                "https://i.dummyjson.com/data/products/18/2.jpg",
                "https://i.dummyjson.com/data/products/18/3.jpg",
                "https://i.dummyjson.com/data/products/18/4.jpg",
                "https://i.dummyjson.com/data/products/18/thumbnail.jpg"
            ]
        },
        {
            "id": 19,
            "title": "Ladies Snoopy Artemis Tshirt",
            "description": "",
            "price":  689.00,
            "discountPercentage": 10.68,
            "rating": 4.42,
            "stock": 54,
            "brand": "ROREC White Rice",
            "category": "skincare",
            "thumbnail": "https://i.dummyjson.com/data/products/19/thumbnail.jpg",
            "images": [
                "https://www.shopnasa.com/cdn/shop/products/ladiessnoopyartemist-shirt_1000x_c0205f6c-441d-4f4b-81f2-39e9121eae9a_600x.jpg?v=1652968295",
                "https://i.dummyjson.com/data/products/19/2.jpg",
                "https://i.dummyjson.com/data/products/19/3.png",
                "https://i.dummyjson.com/data/products/19/thumbnail.jpg"
            ]
        },
        {
            "id": 20,
            "title": "Crew 4 Ladies Polo",
            "description": "",
            "price": 1253.00,
            "discountPercentage": 16.99,
            "rating": 4.06,
            "stock": 140,
            "brand": "Fair & Clear",
            "category": "skincare",
            "thumbnail": "https://i.dummyjson.com/data/products/20/thumbnail.jpg",
            "images": [
                "https://www.shopnasa.com/cdn/shop/products/Crew4polo_ladies_1000x_913f0431-9f58-4993-80a6-4b43a710b0e1_600x.jpg?v=1649369389",
                "https://i.dummyjson.com/data/products/20/2.jpg",
                "https://i.dummyjson.com/data/products/20/3.jpg",
                "https://i.dummyjson.com/data/products/20/4.jpg",
                "https://i.dummyjson.com/data/products/20/thumbnail.jpg"
            ]
        },
        {
            "id": 21,
            "title": "NASA's SpaceX CRS-25  Unisex T-Shirt",
            "description": "",
            "price": 689.00,
            "discountPercentage": 4.81,
            "rating": 4.44,
            "stock": 133,
            "brand": "Saaf & Khaas",
            "category": "groceries",
            "thumbnail": "https://i.dummyjson.com/data/products/21/thumbnail.png",
            "images": [
                "https://www.shopnasa.com/cdn/shop/products/unisex-basic-softstyle-t-shirt-black-front-62cf4c12e6e83_600x.jpg?v=1657752606",
                "https://i.dummyjson.com/data/products/21/2.jpg",
                "https://i.dummyjson.com/data/products/21/3.jpg"
            ]
        },
        {
            "id": 22,
            "title": "NASA's SpaceX CR-25 3/4 sleeve raglan shirt",
            "description": "",
            "price":  846.00 ,
            "discountPercentage": 15.58,
            "rating": 4.57,
            "stock": 146,
            "brand": "Bake Parlor Big",
            "category": "groceries",
            "thumbnail": "https://i.dummyjson.com/data/products/22/thumbnail.jpg",
            "images": [
                "https://www.shopnasa.com/cdn/shop/products/unisex-34-sleeve-raglan-shirt-white-kelly-front-62cf5023e0022_600x.jpg?v=1657753647",
                "https://i.dummyjson.com/data/products/22/2.jpg",
                "https://i.dummyjson.com/data/products/22/3.jpg"
            ]
        },
        {
            "id": 23,
            "title": "Starliner NASA Unisex t-shirt",
            "description": "Specifications of Orange Essence Food Flavour For Cakes and Baking Food Item",
            "price":  689.00 ,
            "discountPercentage": 8.04,
            "rating": 4.85,
            "stock": 26,
            "brand": "Baking Food Items",
            "category": "groceries",
            "thumbnail": "https://i.dummyjson.com/data/products/23/thumbnail.jpg",
            "images": [
                "https://www.shopnasa.com/cdn/shop/products/unisex-staple-t-shirt-black-front-628642188a836_600x.jpg?v=1652966101",
                "https://i.dummyjson.com/data/products/23/2.jpg",
                "https://i.dummyjson.com/data/products/23/3.jpg",
                "https://i.dummyjson.com/data/products/23/4.jpg",
                "https://i.dummyjson.com/data/products/23/thumbnail.jpg"
            ]
        },
        {
            "id": 24,
            "title": "Crew 4 Polo",
            "description": "",
            "price":1253.00 ,
            "discountPercentage": 16.8,
            "rating": 4.94,
            "stock": 113,
            "brand": "fauji",
            "category": "groceries",
            "thumbnail": "https://i.dummyjson.com/data/products/24/thumbnail.jpg",
            "images": [
                "https://www.shopnasa.com/cdn/shop/products/Crew4polo_1000x_183bdf6c-cbfb-41b5-91ed-d7e5eb7d3703_600x.jpg?v=1649188234",
                "https://i.dummyjson.com/data/products/24/2.jpg",
                "https://i.dummyjson.com/data/products/24/3.jpg",
                "https://i.dummyjson.com/data/products/24/4.jpg",
                "https://i.dummyjson.com/data/products/24/thumbnail.jpg"
            ]
        },
        {
            "id": 25,
            "title": "PRE ORDER Limited Edition Vintage Worm Tshirt",
            "description": "",
            "price":  626.00 ,
            "discountPercentage": 13.58,
            "rating": 4.87,
            "stock": 47,
            "brand": "Dry Rose",
            "category": "groceries",
            "thumbnail": "https://i.dummyjson.com/data/products/25/thumbnail.jpg",
            "images": [
                "https://www.shopnasa.com/cdn/shop/products/image_png2029218792_44f01ee1-d520-47e0-b7b8-2710ae4ea7b2_600x.png?v=1651167043",
                "https://i.dummyjson.com/data/products/25/2.jpg",
                "https://i.dummyjson.com/data/products/25/3.png",
                "https://i.dummyjson.com/data/products/25/4.jpg",
                "https://i.dummyjson.com/data/products/25/thumbnail.jpg"
            ]
        },
        {
            "id": 26,
            "title": "Good Luck Mars Rover Socks",
            "description": "",
            "price":  375.00 ,
            "discountPercentage": 17.86,
            "rating": 4.08,
            "stock": 131,
            "brand": "Boho Decor",
            "category": "home-decoration",
            "thumbnail": "https://i.dummyjson.com/data/products/26/thumbnail.jpg",
            "images": [
                "https://www.shopnasa.com/cdn/shop/products/Marssocks_f4264a3c-007a-469c-aaf0-3645186851db_600x.jpg?v=1650644104",
                "https://i.dummyjson.com/data/products/26/2.jpg",
                "https://i.dummyjson.com/data/products/26/3.jpg",
                "https://i.dummyjson.com/data/products/26/4.jpg",
                "https://i.dummyjson.com/data/products/26/5.jpg",
                "https://i.dummyjson.com/data/products/26/thumbnail.jpg"
            ]
        },
        {
            "id": 27,
            "title": "The General Cap",
            "description": "",
            "price":  783.00 ,
            "discountPercentage": 15.58,
            "rating": 4.41,
            "stock": 17,
            "brand": "Flying Wooden",
            "category": "home-decoration",
            "thumbnail": "https://i.dummyjson.com/data/products/27/thumbnail.webp",
            "images": [
                "https://www.shopnasa.com/cdn/shop/products/TheGeneralCap_1000x_ad152df0-70ee-4a1f-b129-d920ad478f63_600x.jpg?v=1649345218",
                "https://i.dummyjson.com/data/products/27/2.jpg",
                "https://i.dummyjson.com/data/products/27/3.jpg",
                "https://i.dummyjson.com/data/products/27/4.jpg",
                "https://i.dummyjson.com/data/products/27/thumbnail.webp"
            ]
        },
        {
            "id": 28,
            "title": "Crew 4 3/4 sleeve raglan shirt",
            "description": "",
            "price":  940.00 ,
            "discountPercentage": 16.49,
            "rating": 4.82,
            "stock": 54,
            "brand": "LED Lights",
            "category": "home-decoration",
            "thumbnail": "https://i.dummyjson.com/data/products/28/thumbnail.jpg",
            "images": [
                "https://www.shopnasa.com/cdn/shop/products/unisex-34-sleeve-raglan-shirt-white-black-front-624c7d5bad507_600x.jpg?v=1649180008",
                "https://i.dummyjson.com/data/products/28/2.jpg",
                "https://i.dummyjson.com/data/products/28/3.png",
                "https://i.dummyjson.com/data/products/28/4.jpg",
                "https://i.dummyjson.com/data/products/28/thumbnail.jpg"
            ]
        },
        {
            "id": 29,
            "title": "Artemis I T-Shirt",
            "description": "",
            "price": 626.00 ,
            "discountPercentage": 15.34,
            "rating": 4.44,
            "stock": 7,
            "brand": "luxury palace",
            "category": "home-decoration",
            "thumbnail": "https://i.dummyjson.com/data/products/29/thumbnail.webp",
            "images": [
                "https://www.shopnasa.com/cdn/shop/products/4a6ac3b7914492d8cc81582f1959117a_600x.jpg?v=1647444343",
                "https://i.dummyjson.com/data/products/29/2.jpg",
                "https://i.dummyjson.com/data/products/29/3.webp",
                "https://i.dummyjson.com/data/products/29/4.webp",
                "https://i.dummyjson.com/data/products/29/thumbnail.webp"
            ]
        },
        {
            "id": 30,
            "title": "City Gray Hoodie",
            "description": "",
            "price":  940.00 ,
            "discountPercentage": 2.92,
            "rating": 4.92,
            "stock": 54,
            "brand": "Golden",
            "category": "home-decoration",
            "thumbnail": "https://i.dummyjson.com/data/products/30/thumbnail.jpg",
            "images": [
                "https://www.shopnasa.com/cdn/shop/products/citygrayhoodie_1000x_213008dc-bfba-43c6-a6c7-673d3125aeb0_600x.jpg?v=1645813622",
                "https://i.dummyjson.com/data/products/30/2.jpg",
                "https://i.dummyjson.com/data/products/30/3.jpg",
                "https://i.dummyjson.com/data/products/30/thumbnail.jpg"
            ]
        }
    ];


    return (
        <div>

            <div className='shop_header '
                data-aos="zoom-out"
                data-aos-easing="linear"
                data-aos-duration="1000"
            >

                <h3
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1800"
                    className='prog_h4' >
                    <p
                        data-aos="fade-up"
                        data-aos-easing="linear"
                        data-aos-duration="1800"
                        className='prog_p'
                    >NASA SHOP</p>

                    ALL APPAREL</h3>

            </div>

            <Container className=" mt-5">
                <Row>
                    <h2 className="text-center"
                        data-aos="fade-up"
                        data-aos-easing="linear"
                        data-aos-duration="500"
                        style={{
                            fontSize: "48px",
                            fontWeight: "600",
                            fontFamily: "sans-serif",
                            marginBottom: "26px",
                        }}>APPAREL</h2>
                    <p
                        data-aos="fade-up"
                        data-aos-easing="linear"
                        data-aos-duration="500"
                        className="text-center"
                        style={{ marginBottom: "7%" }}
                    >All NASA Apparel</p>
                    {
                        products.map((eslam) => (

                            <Col md="4" key={eslam.id} className="text-center mb-4">

                                <div
                                    data-aos="fade-up"
                                    data-aos-easing="linear"
                                    data-aos-duration="500"
                                >

                                    <img src={eslam.images[0]} className="img-fluid"
                                        style={{
                                            width: "100%",
                                            height: "400px",
                                            filter: "brightness(95%)",
                                            marginBottom: "15px"
                                        }}></img>
                                    <p>{eslam.title}</p>
                                    <p
                                        style={{ color: "rgb(228, 42, 42)" }}
                                    >From LE {eslam.price} EGP</p>
                                    <h6
                                        style={{ marginBottom: "15px" }}
                                    >
                                    {eslam.rating}
                                    <span> </span>
                                    
                                    <i class="fa-solid fa-star" style={{color: "#ffd700"}}></i>
                                    <i class="fa-solid fa-star" style={{color: "#ffd700"}}></i>
                                    <i class="fa-solid fa-star" style={{color: "#ffd700"}}></i>
                                    <i class="fa-solid fa-star" style={{color: "#ffd700"}}></i>
                                    <i class="fa-solid fa-star-half-stroke" style={{color: "#ffd700"}}></i>                                        </h6>
                                    <button
                                        style={{
                                            width: "45%",
                                            height: "50px",
                                            borderRadius: "1px",
                                            backgroundColor: "#ed293d",
                                            border: "none",
                                            marginBottom: "20px",
                                            color:"#fff",
                                            
                                        
                                        }}
                                        className="btn " onClick={() => addItem(eslam)}>Add to cart</button>
                                </div>
                            </Col>


                        ))}


                </Row>
            </Container>


        </div >
    );
}



function Shoppage() {
    return (
        <CartProvider>
            <Navbar2 />
            <Page />
            <Footer/>
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

   
    style={{width:"60px",height:"60px"}}
    /> 
    
        </CartProvider>
    );
}
export default Shoppage;




