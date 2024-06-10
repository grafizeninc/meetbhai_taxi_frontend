import React from 'react'
import Heroslider from '../../components/hero/Heroslider'
import Footer from '../../components/footer/Footer'
import Information from '../../components/info/Information'
import HowItWorks from '../../components/howItWorks/HowItWorks'
import AboutUs from '../../components/about/AboutUs'
import Testimonials from '../../components/testimonials/Testimonials'

export default function Landingpage() {
    return (
        <>
            <div className="">
                <Heroslider/>
                <Information />
                <HowItWorks />
                <AboutUs />
                <Testimonials />
                <Footer />
            </div>
        </>
    )
}
