import React from "react";
import "../../../src/App.css";
import ClientTestimonial from "../../components/ClientTestimonials-Section/ClientTestimonial";
import Footer from "../../components/Footer-ContactUs/Footer";
import FounderSection from "../../components/Founder-Section/FounderSection";
import Head from "../../components/Head/Head";
import HeroSection from "../../components/Hero-Section/HeroSection";
import { ProductSection } from "../../components/Product-Section/ProductSection";



export const Home = () => {
  return (
    <>
      <Head />
      <HeroSection />
      <ProductSection />
      <FounderSection />
      <ClientTestimonial />
      <Footer />
    </>
  );
};
