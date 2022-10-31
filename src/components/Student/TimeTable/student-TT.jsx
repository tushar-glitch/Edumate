import React from "react";
import TimeT from "./TimeTable";
import "./TT.css" ;
 function Timetable (){
    return <>
     <h1 className="dbTT">Dashboard : Time Table </h1>
    <div className="timeTable">
    <TimeT />
<h2 className="subject">Subject</h2>
<h2 className="faculty">Respected Faculty</h2>
<ul className="subList">
   <li>COA</li>
   <li>DSTL</li>
   <li>OE</li>
   <li>Technical Communication</li>
   <li>Computer System Security</li>
</ul>
<ul className="facList">
   <li>Dr. Vivek</li>
   <li>Dr. Vivek</li>
   <li>Dr. Vivek</li>
   <li>Dr. Vivek</li>
   <li>Dr. Vivek</li>
</ul>
    </div>
    </>
 }
 export default Timetable;