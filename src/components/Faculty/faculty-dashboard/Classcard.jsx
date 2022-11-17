import React from 'react'
import './fac-dashboard.css'
const Classcard = (props) => {
    return (
        <>
            <div id="class1" className='class'>
                <span className="circle_name">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio dolore tempora ut voluptatum nostrum quam? Quam voluptate placeat in maxime quos reiciendis excepturi, qui amet officia facilis delectus provident totam ea veniam recusandae. Sunt!</span>
                <span className="class_name">{props.name}asdf</span>
                <span className="class_time">{props.time}</span>
            </div>
        </>
    )
}

export default Classcard
