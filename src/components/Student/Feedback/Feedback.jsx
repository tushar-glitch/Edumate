import React from 'react'
import Navbar from '../../Navbar/Navbar'
import SideBar from '../SideBar/sidebar'
import faculty from '../faculty'
import './Feedback.css'
const Feedback = () => {
    return (
        <>
            <SideBar />
            <Navbar />
            <h1 id='dash'>Dashboard &gt; Feedback</h1>
            <div id="background-feedback">
                <div id="ff">Faculty Feedback</div>
                <div id="heading-feedback">
                    <div className="heading-1">Faculty Name</div>
                    <div className="heading-2">Subject</div>
                    <div className="heading-3">Mobile No.</div>
                    <div className="heading-4">Mail</div>
                    <div className="heading-5">Feedback</div>
                </div>
                <div id="fac-area">
                    {faculty.map(fac => {
                        return (
                            <>
                                <div id='faculty-list'>
                                    <div className="heading-1" id='fac-details'>{fac.name}</div>
                                    <div className="heading-2" id='fac-details'>{fac.subject}</div>
                                    <div className="heading-3" id='fac-details'>{fac.mob_no}</div>
                                    <div className="heading-4" id='fac-details'>{fac.mail}</div>
                                    <div className="heading-5" id='fac-details'>{fac.feedback}</div>
                                </div>
                                <br /><br /><br /><br /><br />
                            </>
                        )
                    })}
                </div>
            </div>

        </>
    )
}

export default Feedback
