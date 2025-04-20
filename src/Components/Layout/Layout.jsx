import React from 'react';
import Header from '../Header/Header';
import LandingPage from '../LandingPage/LandingPage';
import Product from '../Product/Product';
import Footer from '../Footer/Footer';
import Faq from '../Faq/Faq';
import Cta from '../CTA/Cta';
import ContactForm from '../ContactForm/ContactForm';
import ContactSection from '../ContactSection/ContactSection';
import Carousal from '../Carousal/Carousal';

const Layout = () => {
  return (
    <div>
      <Header/>
      <LandingPage/>
      <Carousal/>
      <Product/>
      <Cta/>
      <ContactForm/>
      <ContactSection/>
      <Faq/>
      <Footer/>
    </div>
  );
};

export default Layout;
