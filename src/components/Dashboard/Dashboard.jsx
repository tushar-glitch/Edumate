import React from 'react'
import './dashboard.css'
import Navbar from '../Navbar/Navbar'
import profileimg from '../Assests/Images/profile-img.png'
import updateimg from '../Assests/Images/updates-img-removebg-preview.png'
import Chart from '../Pie/Pie'
import SideBar from '../Student/SideBar/sidebar'
const Dashboard = () => {
    return (
        <>
            <SideBar/>
            <Navbar />
            <h1 id='dash'>Dashboard</h1>
            <div id="container">
                <div id="container1">
                    <div id="card1">
                        <div className="heading">
                            <div className="title" id='acad'>Academic Information</div>
                        </div>
                        <div id="img"></div>
                        <div id="stu-details"><span id="name">Ryan Reynolds</span><br/>2100XXXXXXXXX<br/>CSE-AIML<br/>Btech 2nd Year<br/>21XXXX</div>
                    </div>
                    <div id="card2">
                        <div className="heading">
                            <div className="title" id='att'>Student's Attendance</div>
                        </div>
                        <div id="chart"><Chart /></div>
                        <div id="att-details">Overall Present: 9<br/>Overall Lecture: 13<br/>Overall Attendance Percentage: 69.2</div>
                    </div>
                </div>
                <div id="container2">
                    <div id="card3">
                        <div className="heading">
                            <div className="title" id='updates'>Updates</div>
                        </div>
                    </div>
                    <div id="card4">
                        <div className="heading">
                            <div className="title" id='sec'>Security Refund</div>
                        </div>
                        <div id="content">30,000</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;
