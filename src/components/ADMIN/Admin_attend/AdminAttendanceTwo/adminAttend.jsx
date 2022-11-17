
import React from "react";
import AdmAttendCard from "./admAttendCard";
import "./admAttend.css"
import AdmBar from "../../admin_bar/AdmBar";
import { useEffect , useState} from "react";
import axios from "axios";
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

    const [deptList,setDeptList] = useState([]);
    useEffect(()=>{
        axios.get("https://erp-edumate.herokuapp.com/api/user/admin/departments/"+"ALL/",config)
        .then((res)=>{
            console.log(res.data);
            setDeptList(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])
    const [classList, setClassList] = useState([]);
useEffect(()=>{
    axios.get("https://erp-edumate.herokuapp.com/api/user/admin/classes/"+departId+"/",config).
    then((res)=>{
        console.log(res.data);
        setClassList(res.data)
    }).catch((err)=>{
        console.log(err);
    })
},[])
function DropDownClassList (classList){
    return <>
         <option  id="class-name" className="class_head_input" value={classList[4]}>{classList[3]}</option>
    </>
}
    function DropdownDeptList (deptList){
        return <>
            <option  id="dept-name" className="dept_head_input" value={deptList.id}>{deptList.name}</option>
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
        <select id="admDeppt" onChange={handleDepart}>
        <option >Departments</option>
        {deptList.map(DropdownDeptList)}
        </select>
        <select id="admClass">
        <option >Classes</option>
        {classList.map(DropDownClassList)}
        </select>
       <AdmAttendCard />
    </div>
    </>
}
export default AdmAttend;