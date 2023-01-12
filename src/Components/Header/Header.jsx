import './Header.css'
import {memo} from "react";

const Header = memo(()=>{
    return(
        <header>
            <div className={'logo_part'}>
                <img src="https://www.webwork-tracker.com/rebranding/images/favicon.svg" alt=""/>
                Web<span>Work</span>
            </div>

            <div className={'get_now_button'}>
                get now
            </div>
        </header>
    )
})


export default Header