import './AwardsSection.css'
import Awards from '../../assets/Images/Group7511.png'
import {memo} from "react";


const AwardsSection = memo(() =>{
    return(
        <section className={'awards_section'} data-aos="fade-up">
            <img src={Awards} alt="Awards"/>

        </section>
    )
})

export default AwardsSection