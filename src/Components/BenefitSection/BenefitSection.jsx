import './BenefitSection.css'
import ReusableButton from '../ReuseableButton/ReuseableButton'
import greenTarget from '../../assets/Images/Group3757.png'
import percent1 from '../../assets/Images/1.png'
import percent2 from '../../assets/Images/2.png'

const BenefitSection = () =>{
    return(
        <section className={'benefit_section'} data-aos="fade-up">
            <h2>Benefit both ways - <i>monthly or yearly</i></h2>
            <div className={'benefit_section_main_part'}>

                <div className={'benefit_section_main_part_1'} >
                    <div className={'payment_plan'}>
                        <h3>Monthly</h3>
                        <div>$2.49</div>

                        <p>per user/month</p>

                        <ul>
                            <li><img src={greenTarget} alt='target'/>14-day Free Trial</li>
                            <li><img src={greenTarget} alt='target'/>Access to All Features</li>
                            <li><img src={greenTarget} alt='target'/>24/7 Support</li>
                        </ul>

                        <ReusableButton text={'GET YOUR DEAL'}/>


                        <img src={percent1} className={'percent_image'} alt=""/>

                        <span className={'sale'}>$4.99 <div></div></span>

                        <span className={'limitation'}>*for 6 months</span>
                    </div>
                </div>

                <div className={'benefit_section_main_part_2'}>
                    <div className={'payment_plan'}>
                        <h3>Yearly</h3>
                        <div>$2.05</div>

                        <p>per user/month</p>

                        <ul>
                            <li><img src={greenTarget} alt='target'/>14-day Free Trial</li>
                            <li><img src={greenTarget} alt='target'/>Access to All Features</li>
                            <li><img src={greenTarget} alt='target'/>24/7 Support</li>
                        </ul>

                        <ReusableButton text={'GET YOUR DEAL'}/>

                        <img src={percent2} className={'percent_image'} alt=""/>


                        <span className={'sale'}>$4.09 <div></div></span>



                    </div>
                </div>

            </div>
        </section>
    )
}

export default BenefitSection