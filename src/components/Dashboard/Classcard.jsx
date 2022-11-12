import React from 'react'
import './dashboard.css'
const Classcard = (props) => {
    return (
        <>
            <div id="class1" className='class'>
                <span className="circle_name"></span>
                <span className="class_name">{props.name}</span>
                <span className="class_time">{props.time}</span>
            </div>
        </>
    )
}

export default Classcard
