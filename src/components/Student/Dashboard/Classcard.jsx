import React from 'react'
import './dashboard.css'
const Classcard1 = (props) => {
    return (
        <>
            <div id="class1" className='class'>
                <span className="circle_name">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi quaerat omnis consequatur vitae inventore harum fuga! Eum neque aliquam labore, itaque veniam assumenda officiis odio mollitia asperiores consectetur, consequatur enim?</span>
                <span className="class_name">{props.name}</span>
                <span className="class_time">{props.time}</span>
            </div>
        </>
    )
}

export default Classcard1
