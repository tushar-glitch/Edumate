import React from 'react'
import './dashboard.css'
import Navbar from '../Navbar/Navbar'
import card1 from '../Assests/Images/card-1.png'
import card2 from '../Assests/Images/card-2.png'
import card3 from '../Assests/Images/card-3.png'
import card4 from '../Assests/Images/card-4.png'
import card5 from '../Assests/Images/card-5.png'
const Dashboard = () => {
    return (
        <>
            {/* <Navbar /> */}
            <h1 id='dash'>Dashboard</h1>
            <div id="container">
                <div id="container1">
                    <div id="card1">
                        <div className="img">
                            <img src={card1} alt="" className='logo' />
                        </div>
                        <div className="heading">My Profile</div>
                        <div className="content">Lorem ipsum dolor sit amet, consectetur Perspiciatis placeat delectus repellat!adipiscing elit. Etiam aliquam nulla nec lectus sollicitudin, vitae ultrices sem varius. Duis rhoncus, massa ac ornare lobortis </div>
                    </div>
                    <div id="card2">
                        <div className="img">
                            <img src={card2} alt="" className='logo' />
                        </div>
                        <div className="heading">Attendance</div>
                        <div className="content">Lorem ipsum dolor sit amet, . In, voluptatibus?consectetur adipiscing elit. Etiam aliquam nulla nec lectus sollicitudin, vitae ultrices sem varius. Duis rhoncus, massa ac ornare lobortis </div>
                    </div>
                </div>
                <div id="container2">
                    <div id="card3">
                        <div className="img">
                            <img src={card3} alt="" className='logo' />
                        </div>
                        <div className="heading">Feedback</div>
                        <div className="content">Lorem ipsum dolor sit amet, consecteturorum porro aspernatur.adipiscing elit. Etiam aliquam nulla nec lectus sollicitudin, vitae ultrices sem varius. Duis rhoncus, massa ac ornare lobortis </div>
                    </div>
                    <div id="card4">
                        <div className="img">
                            <img src={card4} alt="" className='logo' />
                        </div>
                        <div className="heading">Time Table</div>
                        <div className="content">Lorem ipsum dolor sit amet, consectetur e magni aut quo?adipiscing elit. Etiam aliquam nulla nec lectus sollicitudin, vitae ultrices sem varius. Duis rhoncus, massa ac ornare lobortis </div>
                    </div>
                </div>
                <div id="container3">
                    <div id="card5">
                        <div className="img">
                            <img src={card5} alt="" className='logo' />
                        </div>
                        <div className="heading">Updates</div>
                        <div className="content">Lorem ipsum dolor sit amet, consectetur adipiscing  Minima quis repudiandae repellendus?elit. Etiam aliquam nulla nec lectus sollicitudin, vitae ultrices sem varius. Duis rhoncus, massa ac ornare lobortis </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
