import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "../../Student/TimeTable/TimeTable.jsx";
import Navbar from "../../utils/Navbar/Navbar.jsx";
import * as ReactBootStrap from "react-bootstrap";
import "./fTimeTable.css";
 function FTimeTable (){
    const facAccessToken = sessionStorage.getItem("Faculty_access_token");
console.log(facAccessToken);
const config = {
    headers:{
       Authorization: `Bearer ${facAccessToken}`
    }
 }
    const [array1,setArray1] = useState([]);
    const [array2,setArray2] = useState([]);
    const [array3,setArray3] = useState([]);
    const [array4,setArray4] = useState([]);
    const [array5,setArray5] = useState([]);
    const [subject,setSubject] = useState([])
const [loadBool,setLoadBool] = useState(false)
    useEffect(()=>{
        setLoadBool(true)
        axios.get("https://erp-edumate.herokuapp.com/api/user/teacher/timetable/",config).
        then((res)=>{
            console.log(res)
            setLoadBool(false)
            for(let i=0;i<30;i++){
                setSubject([...new Set(res.data.map((subjectArray)=>subjectArray.subject))])
              }  
              console.log(subject);
              localStorage.setItem("Subject-array", JSON.stringify(subject))
            console.log(res.data);
            for(let i=0;i<30;i++){
            if(res.data[i].period === "8:30 - 9:20"){
                setArray1(oldArray1=>[...oldArray1, res.data[i].subject])
                console.log(array1)
            }
            else if(res.data[i].period === "9:20 - 10:10"){
                setArray2(oldArray2=>[...oldArray2, res.data[i].subject])
            }
            else if(res.data[i].period === "11:00 - 11:50"){
                setArray3(oldArray3=>[...oldArray3, res.data[i].subject])
            }
            else if(res.data[i].period === "11:50 - 12:40"){
                setArray4(oldArray4=>[...oldArray4, res.data[i].subject])
            }
           else if(res.data[i].period === "1:30 - 2:20"){
                setArray5(oldArray5=>[...oldArray5, res.data[i].subject])
            }
        }  
        }).
        catch((err)=>{
            console.log(err);
            setLoadBool(false)
        })
    },[])
    useEffect(()=>{
        if(loadBool)
        document.body.style.opacity="0.5"
        else
        document.body.style.opacity="1"
      },[loadBool])
    return <>
    <Navbar />
     <h1 className="dbTT">Dashboard : Time Table </h1>
    <div className="FTimeTable">
    <table cellSpacing={0} className="table">
            <tr><td className="timetableRow" colspan={7}>Time Table</td></tr>
            <tr className="tableRow">
                <td className="days"></td>
                <td className="days">Mon</td>
                <td className="days">Tue</td>
                <td className="days">Wed</td>
                <td className="days">Thu</td>
                <td className="days">Fri</td>
                <td className="days">Sat</td>
            </tr>
            <tr className="tableRow">
                <td className="time">8:30-9:20</td>
                <td>{array1[0]}</td>
                <td>{array1[1]}</td>
                <td>{array1[2]}</td>
                <td>{array1[3]}</td>
                <td>{array1[4]}</td>
                <td>{array1[5]}</td>
            </tr>
            <tr className="tableRow">
                <td className="time">9:20-10:10</td>
                <td>{array2[0]}</td>
                <td>{array2[1]}</td>
                <td>{array2[2]}</td>
                <td>{array2[3]}</td>
                <td>{array2[4]}</td>
                <td>{array2[5]}</td>
            </tr>
            <tr className="tableRow">
            <td className="time">10:10-11:00</td>
                <td colspan={6} className="break">Break</td>
            </tr>
            <tr>
                <td className="time">11:00-11:50</td>
                <td>{array3[0]}</td>
                <td>{array3[1]}</td>
                <td>{array3[2]}</td>
                <td>{array3[3]}</td>
                <td>{array3[4]}</td>
                <td>{array3[5]}</td>
            </tr>
            <tr>
                <td className="time">11:50-12:40</td>
                <td>{array4[0]}</td>
                <td>{array4[1]}</td>
                <td>{array4[2]}</td>
                <td>{array4[3]}</td>
                <td>{array4[4]}</td>
                <td>{array4[5]}</td>
            </tr>
            <tr className="tableRow">
            <td className="time">12:40-01:30</td>
                <td colspan={6} className="lunch">Lunch</td>
            </tr>
            <tr className="tableRow">
                <td className="time">01:30-02:20</td>
                <td>{array5[0]}</td>
                <td>{array5[1]}</td>
                <td>{array5[2]}</td>
                <td>{array5[3]}</td>
                <td>{array5[4]}</td>
                <td>{array5[5]}</td>
            </tr>
        </table>
        </div>
        {loadBool? (<ReactBootStrap.Spinner animation="border" id="apiloader"/>) :null}
    </>
 }
 export default FTimeTable;
