import './Footer.css'
import ReuseableButton from "../ReuseableButton/ReuseableButton";

import footerImage from '../../assets/Images/Group 1000001247.png'



const Footer = () =>{
    return(
        <footer>
            <div>
                <h2>Save 50% Now</h2>
                <ReuseableButton text={'GET MY DISCOUNT'}/>
            </div>

            <img src={footerImage} alt="footerImage"/>
        </footer>
    )
}

export default Footer