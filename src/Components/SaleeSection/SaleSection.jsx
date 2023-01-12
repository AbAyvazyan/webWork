import './SaleSection.css';
import SaleImage from '../../assets/Images/sale.png'
import targetImage from '../../assets/Images/Group3745.png'
import ratingStarts from '../../assets/Images/ratingstars.png'
import CapterraImg from '../../assets/Images/Group2220.png'
import CrowdImg  from '../../assets/Images/Group2219.png'
import GetAppImg  from '../../assets/Images/Group5559.png'
import ReuseableButton from "../ReuseableButton/ReuseableButton";


const SaleSection = () =>{
    return(
        <>
            <section className={'sales_section'} data-aos="fade-up">
                <div className={'sales_section_about'}>
                    <h1><span>CYBER MONDAY</span> means
                        an even <span>bigger sale</span></h1>

                    <p className={'sales_section_about_p1'}>Cyber Monday saves you money,
                        WebWork saves you time.</p>

                    <ReuseableButton text={'SAVE BIG NOW'}/>

                    <p className={'sales_section_about_last2'} style={{margin:'3vh 0 7vh'}}><img src={targetImage} alt="target"/> 14-day free trial  <span></span>  No credit card required</p>
                    
                    <p className={'sales_section_about_last2'}><img src={ratingStarts} alt=""/> Reviews from <b> 51K+ </b> happy users below and beyond</p>

                    <div className={'sales_section_about_images_part'}>

                        <img src={CapterraImg} alt=""/>
                        <img src={CrowdImg} alt=""/>
                        <img src={GetAppImg} alt=""/>

                    </div>

                </div>

                <div className={'sales_section_image'}>
                    <img src={SaleImage} alt={'Sale'}/>
                </div>
            </section>
        </>
    )
}

export default SaleSection