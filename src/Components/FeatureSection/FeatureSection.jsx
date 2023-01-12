import './FeatureSection.css'
import ReuseableButton from "../ReuseableButton/ReuseableButton";

import feature1 from '../../assets/Images/Group3703.png'
import feature2 from '../../assets/Images/10.png'
import feature3 from '../../assets/Images/task management.png'
import feature4 from '../../assets/Images/Frame.png'
import feature5 from '../../assets/Images/11.png'
import feature6 from '../../assets/Images/9.png'
import ttVisual from '../../assets/Images/ttvisual.png'
import greenTarget from '../../assets/Images/Group3757.png'


import uuid from "react-uuid";
import {useReducer} from "react";

const featuresOf =[
    {
        id:1,
        imgSource:feature1,
        text:'Time Tracking \n ' +
            'with Screenshots',
        active:true
    },
    {
        id:2,
        imgSource:feature2,
        text:'Productivity \n' +
            'Monitoring',
        active:false
    },
    {
        id:3,
        imgSource:feature3,
        text:'Task \n' +
            'Management',
        active:false
    },
    {
        id:4,
        imgSource:feature4,
        text:'Communication\n' +
            'Channels',
        active:false
    },
    {
        id:5,
        imgSource:feature5,
        text:'HR \n' +
            'Tools',
        active:false
    },
    {
        id:6,
        imgSource:feature6,
        text:'Online\n' +
            'Reports',
        active:false
    }
]


const reducer = (state, action) => {
    switch (action.type) {
        case "Update":

            return state.map(feature=>{
                console.log(feature.active)
                    return action.payload.id===feature.id ? {...feature,active:true}:{...feature,active:false}
                 })
        default:
            return state;
    }
};




const FeatureSection = () =>{

    const [features,dispatch] = useReducer(reducer,featuresOf)

    const changeActiveHandler = (idOf) =>{
        dispatch({
            type:'Update',
            payload:{
                id:idOf
            }
        })
    }

    return(
        <section className={'feature_section'}  data-aos="fade-up">
            <h2>Save Big on All Features <br/><span>no exceptions</span></h2>

            <div className={'feature_section_main_part'}>

                <div className={'features_introduction'}>

                    {features.map((elem,index)=>{
                        return <div className={elem.active ? 'single_feature_active':'single_feature'} onClick={()=>changeActiveHandler(elem.id)} key={uuid()}>

                                    <img src={elem.imgSource} alt={"feature"+ ++index}/>
                                    <p>{elem.text}</p>

                                </div>
                    })}

                </div>


                <div className={'feature_main_container'}>
                    <div>
                        <h3>Track the time your employees spend on work and get detailed information</h3>

                        <ul>
                            <li><img src={greenTarget} alt='target'/>4 Screenshot Modes</li>
                            <li><img src={greenTarget} alt='target'/>Idle Time Tracking</li>
                            <li><img src={greenTarget} alt='target'/>Synchronized Tracking</li>
                            <li><img src={greenTarget} alt='target'/>Billable Hours</li>
                        </ul>

                        <ReuseableButton text={'RESERVE YOUR SEAT'}/>
                    </div>
                    <div>
                        <img src={ttVisual} alt="ttVisual"/>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default FeatureSection