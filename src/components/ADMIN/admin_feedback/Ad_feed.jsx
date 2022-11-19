import React from 'react'
import faculty from '../../Student/faculty'
import './ad_feed.css'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import AdmBar from '../admin_bar/AdmBar'
import * as ReactBootStrap from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const Ad_feed = () => {
    const accessToken = sessionStorage.getItem("access token");
    console.log(accessToken);
    const config = {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    }
    const [details, SetDetails] = useState([])
    const id = "S1"
    const feed = 2
    // useEffect(() => {
    //     axios.get('https://erp-edumate.herokuapp.com/api/user/teacher/teachersofclass/feedback/', config, {
    //         id
    //     })
    //         .then((res) => {
    //             console.log(res);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         })
    // }, [])
    const [loadBool,setLoadBool] = useState(false)
    useEffect(() => {
        setLoadBool(true)
        axios.post('https://erp-edumate.herokuapp.com/api/user/student/teacherfeedback/', config, {
            feed
        })
            .then((res) => {
                console.log(res);
                setLoadBool(false)
            })
            .catch((err) => {
                console.log(err);
                setLoadBool(false)
            })
    }, [])
    useEffect(() => {
        setLoadBool(true)
        axios.get('https://erp-edumate.herokuapp.com/api/user/teacher/teachersofclass/', { id }, config)
            .then((res) => {
                console.log(res);
                setLoadBool(false)
                SetDetails(res.data.classdetails.department)
            })
            .catch((err) => {
                console.log(err);
                setLoadBool(false)
            })
    }, [])
    useEffect(()=>{
        if(loadBool)
        document.body.style.opacity="0.5"
        else
        document.body.style.opacity="1"
      },[loadBool])
    return (
        <>
        <AdmBar />
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
                <select name="" id="select">
                    <option value="">Faculty</option>
                    <option value="">Student</option>
                </select>
                <div id="fac-area">
                    {faculty.map(fac => {

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
                            let userID = 234223
                            let feed = 1;
                            var data = { userID, feed }
                            axios.put('https://erp-edumate.herokuapp.com/api/user/student/teacherfeedback/', data, config)
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
                            let userID
                            let feed = 2;
                            var data = { userID, feed }
                            axios.put('https://erp-edumate.herokuapp.com/api/user/student/teacherfeedback/', data, config)
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
                            let userID
                            let feed = 3;
                            var data = { userID, feed }
                            axios.put('https://erp-edumate.herokuapp.com/api/user/student/teacherfeedback/', data, config)
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
                            let userID
                            let feed = 4;
                            var data = { userID, feed }
                            axios.put('https://erp-edumate.herokuapp.com/api/user/student/teacherfeedback/', data, config)
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
                            let userID
                            let feed = 5;
                            var data = { userID, feed }
                            axios.put('https://erp-edumate.herokuapp.com/api/user/student/teacherfeedback/', data, config)
                                .then((res) => {
                                    console.log(res);
                                })
                                .catch((err) => {
                                    console.log(err);
                                })
                        }
                        return (
                            <>
                                <div id='faculty-list'>
                                    <div className="heading-1" id='fac-details'>{fac.name}</div>
                                    <div className="heading-2" id='fac-details'>{fac.subject}</div>
                                    <div className="heading-3" id='fac-details'>{fac.mob_no}</div>
                                    <div className="heading-4" id='fac-details'>{fac.mail}</div>
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

export default Ad_feed
