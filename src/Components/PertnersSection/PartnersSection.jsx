import './PartnersSection.css'
import {memo} from "react";


import partner1 from '../../assets/Images/Logo 10.png'
import partner2 from '../../assets/Images/Logo 15.png'
import partner3 from '../../assets/Images/Logo 16.png'
import partner4 from '../../assets/Images/Logo 17.png'
import partner5 from '../../assets/Images/Logo 18.png'
import partner6 from '../../assets/Images/Logo 13.png'
import partner7 from '../../assets/Images/Logo 11.png'
import partner8 from '../../assets/Images/Logo 12.png'
import partner9 from '../../assets/Images/Logo 14.png'


const PartnersSection = memo(()=>{
    return(
        <section className={'partners_section'} data-aos="fade-up">

            <h2>Trusted by 1000+ Companies</h2>

            <div className={'partners_logo_holder'}>
                <img src={partner1} alt="partnerLogo"/>
                <img src={partner2} alt="partnerLogo"/>
                <img src={partner3} alt="partnerLogo"/>
                <img src={partner4} alt="partnerLogo"/>
                <img src={partner5} alt="partnerLogo"/>
                <img src={partner6} alt="partnerLogo"/>
                <img src={partner7} alt="partnerLogo"/>
                <img src={partner8} alt="partnerLogo"/>
                <img src={partner9} alt="partnerLogo"/>
            </div>

        </section>
    )
})

export default PartnersSection