import React from 'react'
import Heroslider from '../../components/hero/Heroslider'
import Footer from '../../components/footer/Footer'
import Information from '../../components/info/Information'
import HowItWorks from '../../components/howItWorks/HowItWorks'

export default function Landingpage() {
    return (
        <>
            <div className="">
                <Heroslider/>
                <Information />
                <HowItWorks />
                <Footer />
            </div>
        </>
    )
}
