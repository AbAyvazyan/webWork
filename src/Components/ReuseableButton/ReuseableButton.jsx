import './ReuseableButton.css'

const ReuseableButton = ({text,clickHandler})=>{

    return(
        <div className={'block_reuseable_button'} onClick={clickHandler}>{text}</div>
    )
}

export default ReuseableButton