import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Navbar from "../../utils/Navbar/Navbar";
import TimeT from "./TimeTable";
import "./TT.css" ;
 function Timetable (){
   const accessToken = sessionStorage.getItem("access token");
   console.log(accessToken);
   const config = {
      headers:{
         Authorization: `Bearer ${accessToken}`
      }
   }

   const [subject,setSubject] = useState([]);
   const [mainArray, setMainArray] = useState([]);
   const [fac,setFac] = useState([]);

   useEffect(()=>{
      axios.get("https://erp-edumate.herokuapp.com/api/user/student/timetable/",config).
      then((res)=>{
          console.log(res.data);
          setMainArray(res.data);
          console.log(mainArray)
          for(let i=0;i<30;i++){
              setSubject([...new Set(res.data.map((subjectArray)=>subjectArray.subject))])
            }  
            console.log(subject);
         for(let i=0;i<subject.length();i++){
            for(let j=0;j<30;j++){
               if(subject[i]===res.data[j].subject){
                  setFac(oldFac=>[...oldFac,res.data[i].subject]);
                  break;
               }
           }
         }
      }).
      catch((err)=>{
          console.log(err);
      })
  },[])
console.log(fac);
  console.log(subject)
  useEffect(()=>{
   console.log(subject);
  },[subject])

    return <>
    <Navbar />
    <div className="TIMETABLE">
     <h1 className="dbTT">Dashboard : Time Table </h1>
    <div className="timeTable">
    <TimeT />
<h2 className="subject">Subject</h2>
<h2 className="faculty">Respected Faculty</h2>
<ul className="subList">
   <li>{subject[0]}</li>
   <li>{subject[1]}</li>
   <li>{subject[2]}</li>
   <li>{subject[3]}</li>
   <li>{subject[4]}</li>
   <li>{subject[5]}</li>
</ul>
<ul className="facList">
   <li>{fac[0]}</li>
   <li>{fac[1]}</li>
   <li>{fac[2]}</li>
   <li>{fac[3]}</li>
   <li>{fac[4]}</li>
   <li>{fac[5]}</li>
</ul>
    </div>
    </div>
    </>
 }
 export default Timetable;