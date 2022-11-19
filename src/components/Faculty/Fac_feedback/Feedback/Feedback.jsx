import React from 'react'

import './Feedback.css'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import * as ReactBootStrap from "react-bootstrap";
import Navbar from '../../../utils/Navbar/Navbar'
const FacFeedback = () => {
    const accessToken = sessionStorage.getItem("access token");
    console.log(accessToken);
    const config = {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    }
    const [details, SetDetails] = useState([])
    const [faculty1, setFaculty1] = useState([])
    
    const id = "S1"
    const feed = 2
    const userID = 100000
    const [loadBool,setLoadBool] = useState(false)
    useEffect(() => {
        setLoadBool(true)
        axios.get('https://erp-edumate.herokuapp.com/api/user/teacher/teachersofclass/'+`${id}`+'/', 
             config)
            .then((res) => {
                console.log(res);
                setLoadBool(false)
                console.log(res.data.classdetails);
                SetDetails(res.data.classdetails)
                setFaculty1(res.data.teachers)
                console.log(details);
            })
            .catch((err) => {
                setLoadBool(false)
                console.log(err);
            })
    },[])

    useEffect(()=>{
        if(loadBool)
        document.body.style.opacity="0.5"
        else
        document.body.style.opacity="1"
      },[loadBool])
    return (
        <>

            <h1 id='dash'>Dashboard &gt; Feedback</h1>
            <div id="background-feedback">
                <div id="ff">Faculty Feedback</div>
                <div id="heading-feedback">
                    <div className="heading-1">Faculty Name</div>
                    <div className="heading-2">Subject</div>
                    <div className="heading-5">Feedback</div>
                </div>
                <div id="fac-area">
                    {faculty1.map(fac => {

                        let rating = document.getElementsByClassName('feed_circle')
                        let ratings = document.getElementsByClassName('ratings')
                        function handlerating1() {
                            // console.log(j);
                            rating[0].style.backgroundColor = '#6C63FF'
                            ratings[0].style.color = 'white'
                            for (let i = 1; i < 5; ++i) {
                                rating[i].style.backgroundColor = 'white'
                                ratings[i].style.color = 'black'
                            }
                            let userID = 200000
                            let feed = 1;
                            var data = { userID, feed }
                            axios.put('https://erp-edumate.herokuapp.com/api/user/teacher/studentfeedback/', data, config)
                                .then((res) => {
                                    console.log(res);
                                })
                                .catch((err) => {
                                    console.log(err);
                                })
                        }
                        function handlerating2() {
                            let rating = document.getElementsByClassName('feed_circle')
                            rating[0].style.backgroundColor = '#6C63FF'
                            rating[1].style.backgroundColor = '#6C63FF'
                            ratings[0].style.color = 'white'
                            ratings[1].style.color = 'white'
                            // if (j == 1) {
                            //     j = 5;
                            // }
                            for (let i = 2; i < 5; ++i) {
                                rating[i].style.backgroundColor = 'white'
                                ratings[i].style.color = 'black'
                            }
                            let userID = 200000
                            let feed = 2;
                            var data = { userID, feed }
                            axios.put('https://erp-edumate.herokuapp.com/api/user/teacher/studentfeedback/', data, config)
                                .then((res) => {
                                    console.log(res);
                                })
                                .catch((err) => {
                                    console.log(err);
                                })
                        }
                        function handlerating3() {
                            let rating = document.getElementsByClassName('feed_circle')
                            for (let i = 0; i < 3; ++i) {
                                rating[i].style.backgroundColor = '#6C63FF'
                                ratings[i].style.color = 'white'
                            }
                            for (let i = 3; i < 5; ++i) {
                                rating[i].style.backgroundColor = 'white'
                                ratings[i].style.color = 'black'
                            }
                            let userID = 200000
                            let feed = 3;
                            var data = { userID, feed }
                            axios.put('https://erp-edumate.herokuapp.com/api/user/teacher/studentfeedback/', data, config)
                                .then((res) => {
                                    console.log(res);
                                })
                                .catch((err) => {
                                    console.log(err);
                                })
                        }
                        function handlerating4() {
                            let rating = document.getElementsByClassName('feed_circle')
                            for (let i = 0; i < 4; ++i) {
                                rating[i].style.backgroundColor = '#6C63FF'
                                ratings[i].style.color = 'white'
                            }
                            rating[4].style.backgroundColor = 'white'
                            ratings[4].style.color = 'black'
                            let userID = 200000
                            let feed = 4;
                            var data = { userID, feed }
                            axios.put('https://erp-edumate.herokuapp.com/api/user/teacher/studentfeedback/', data, config)
                                .then((res) => {
                                    console.log(res);
                                })
                                .catch((err) => {
                                    console.log(err);
                                })
                        }
                        function handlerating5() {
                            let rating = document.getElementsByClassName('feed_circle')
                            for (let i = 0; i < 5; ++i) {
                                rating[i].style.backgroundColor = '#6C63FF'
                                ratings[i].style.color = 'white'
                            }
                            let userID = 200000
                            let feed = 5;
                            var data = { userID, feed }
                            axios.put('https://erp-edumate.herokuapp.com/api/user/teacher/studentfeedback/', data, config)
                                .then((res) => {
                                    console.log(res);
                                })
                                .catch((err) => {
                                    console.log(err);
                                })
                        }
                        return (
                            <>
                                <Navbar/>
                                <div id='faculty-list'>
                                    <div className="heading-1" id='fac-details'>{faculty1[0]}</div>
                                    <div className="heading-2" id='fac-details'>{details.department}</div>
                                    <div className="heading-5" id='fac-details'>
                                        <div className="feed_circle" id='feed_circle_1' onClick={handlerating1}><span className='ratings'>1</span></div>
                                        <div className="feed_circle" id='feed_circle_2' onClick={handlerating2}><span className='ratings'>2</span></div>
                                        <div className="feed_circle" id='feed_circle_3' onClick={handlerating3}><span className='ratings'>3</span></div>
                                        <div className="feed_circle" id='feed_circle_4' onClick={handlerating4}><span className='ratings'>4</span></div>
                                        <div className="feed_circle" id='feed_circle_5' onClick={handlerating5}><span className='ratings'>5</span></div>
                                    </div>
                                </div>
                                <br /><br /><br /><br /><br />
                            </>
                        )
                    })}
                </div>
            </div>
            {loadBool? (<ReactBootStrap.Spinner animation="border" id="apiloader"/>) :null}
        </>
    )
}

export default FacFeedback
