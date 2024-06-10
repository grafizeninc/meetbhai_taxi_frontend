import React from 'react'
import Footer from '../../components/footer/Footer'

export default function ContactUs() {
    return (
        <>
            <div className="pt-[100px] w-100 "> 
                <div className="flex w-[75%] mx-auto">
                    {/* <div className="w-50"></div> */}
                    <div className="w-50 mx-auto p-4 border-2 border-org rounded-xl drop-shadow-xl">
                        <div className="text-center">
                            <p className='text-[35px] text-center font-Outfit font-bold tx-org'>Contact Us</p>
                        </div>
                        <div className="w-100 flex flex-col gap-4 py-4">
                            <div className="input-container h-[clamp(46px,46px,46px)]">
                                <input placeholder="Enter your name" className="input-field text-[16px] font-Outfit" type="text" />
                                <label for="input-field" className="input-label"></label>
                                <span className="input-highlight"></span>
                            </div>
                            <div className="input-container h-[clamp(46px,46px,46px)]">
                                <input placeholder="Enter your E-mail" className="input-field text-[16px] font-Outfit" type="text" />
                                <label for="input-field" className="input-label"></label>
                                <span className="input-highlight"></span>
                            </div>
                            <div className="input-container h-[clamp(46px,46px,46px)]">
                                <input placeholder="Enter your number" className="input-field text-[16px] font-Outfit" type="text" />
                                <label for="input-field" className="input-label"></label>
                                <span className="input-highlight"></span>
                            </div>
                            <div className="w-100 mt-3">
                                <textarea placeholder="Enter your message" className='vertical-lg w-100 p-3 border-2 border-org rounded-xl' name="" id=""></textarea>
                            </div>
                        </div>
                        <div className="w-100 mt-4 py-2 text-center bs-org rounded-lg">
                            <p className="text-[18px] font-Outfit font-bold tx-white">Submit</p>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}
