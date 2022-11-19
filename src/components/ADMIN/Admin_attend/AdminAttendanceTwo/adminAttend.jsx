
import React from "react";
import AdmAttendCard from "./admAttendCard";
import "./admAttend.css"
import AdmBar from "../../admin_bar/AdmBar";
import { useEffect , useState} from "react";
import axios from "axios";
import SubjectAttend from "../../../Student/Attendace2/Attendance";
import { propTypes } from "react-bootstrap/esm/Image";
function AdmAttend(){
    const adminAccessToken = sessionStorage.getItem("Admin_access_token");
console.log(adminAccessToken);
const config = {
    headers:{
       Authorization: `Bearer ${adminAccessToken}`
    }
 }
 const [departId, setDepartId] = useState("");
 function handleDepart(e){
 setDepartId(e.target.value);
 }

 console.log(departId)
 sessionStorage.setItem("Department_Id",departId)
const [deptBool,setDeptBool] = useState(false)
    const [deptList,setDeptList] = useState([]);
    useEffect(()=>{
        axios.get("https://erp-edumate.herokuapp.com/api/user/admin/departments/"+"ALL/",config)
        .then((res)=>{
            console.log(res.data);
            setDeptList(res.data);
            setDeptBool(true)
        })
        .catch((err)=>{
            console.log(err);
            setDeptBool(false)
        })
    },[])
    console.log(departId)


    const [classList, setClassList] = useState([]);
function handleClassInDept(){
    if(deptBool){
    axios.get("https://erp-edumate.herokuapp.com/api/user/admin/classesindepartment/"+departId+"/",config).
    then((res)=>{
        console.log(res.data);
        setClassList(res.data)
    }).catch((err)=>{
        console.log(err);
    })
}
}

console.log(classList);

 const [classId, setClassId] = useState("");
 const [subjectList,setSubjectList] = useState([]);
 function handleClass(e){
    setClassId(e.target.value);
 }
 function handleSubjectInClass(){
    axios.get("https://erp-edumate.herokuapp.com/api/user/admin/studentattendancelist/"+classId+"/",config)
    .then((res)=>{
        console.log(res);
        console.log(res.data);
        setSubjectList(res.data);
    }).catch((err)=>{
        console.log(err);
    })
 }
 
function DropDownClassList (classList){
    return <>
         <option  id="class-name" className="class_head_input" value={classList[0]}>{classList[0]}</option>
    </>
}
    function DropdownDeptList (deptList){
        return <>
            <option  id="dept-name" className="dept_head_input" value={deptList.id}>{deptList.name}</option>
        </>
             }
             function createSubject(subjectList){
                return <>
                    <AdmAttendCard name={subjectList.student_name} Number={subjectList.userID} attend={subjectList.attendance_percent} />
                </>
             }
    return <>
    <AdmBar />
    <div className="admAttendWhiteDiv">
        <h1 className="admGreyRow">
            <span id="admStN">Student Name</span>
            <span id="admStn">Student Number</span>
            <span id="admAttend">Attendance</span>
        </h1>
        <select id="admDeppt" onChange={handleDepart} onClick={handleClassInDept}>
        <option >Departments</option>
        {deptList.map(DropdownDeptList)}
        </select>
        <select id="admClass" onChange={handleClass} onClick={handleSubjectInClass}>
        <option >Classes</option>
        {classList.map(DropDownClassList) }
        </select>
        <div className="admAttendCall2">
            {subjectList.map(createSubject)}
        </div> 
    </div>
    </>
}
export default AdmAttend;