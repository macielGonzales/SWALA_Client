import React from 'react'
import "../../../src/App.css";
import Footer from '../../components/Footer-ContactUs/Footer'
import DetailProduct from '../../components/mainpages/detailProduct/DetailProduct'
import Navbar from '../../components/Navbar/Navbar'

const Detail = () => {
    return (
        <div>
            <Navbar />
            <DetailProduct />
            <Footer />
        </div>
    )
}

export default Detail
