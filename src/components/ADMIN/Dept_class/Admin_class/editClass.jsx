import React from "react";
import { useState , useEffect } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import "./adminAddClass.css";
import AdmBar from "../../admin_bar/AdmBar";
import { ToastContainer ,toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
 function EditClassComp (){
    // const editDeptId =sessionStorage.getItem("EditDeptId");
const editYear= sessionStorage.getItem("EditClassYear");
console.log(editYear)
const editSect = sessionStorage.getItem("EditClassSection");
console.log(editSect)
const editClassId = sessionStorage.getItem("EditClassId");
    // const [deptId,setDeptId] = useState(editDeptId);
    const [classId,setClassId] = useState(editClassId);
    const [yearName,setYearName] = useState(editYear);
    const [secName,setSecName] = useState(editSect);
    function handleClassId(e){
        setClassId(e.target.value);
    }
    function handleYearName(e){
        setYearName(e.target.value);
    }
    function handleSecName(e){
        setSecName(e.target.value);
    }
    const [AdminClAdd,setAdminClAdd] = useState(sessionStorage.getItem("Admin_class_array"))
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
 
 const addDeptInfo ={
    year:yearName,
    department:departId,
    section:secName,
    id:classId
 }
   
 const navigate = useNavigate();
    function handlePostEdClassApi(){
        console.log("ahsj,")
        axios.put("https://erp-edumate.herokuapp.com/api/user/admin/classes/"+classId+"/",addDeptInfo,config).
        then((res)=>{
            console.log(res.data);
            setAdminClAdd(AdminClAdd=>[...AdminClAdd,addDeptInfo])
            navigate("/adminAdd")
        }).catch((err)=>{
            console.log(err);
        })
    }
    const [deptList,setDeptList] = useState([]);
    useEffect(()=>{
        axios.get("https://erp-edumate.herokuapp.com/api/user/admin/departments/"+"ALL/",config)
        .then((res)=>{
            console.log(res.data);
            setDeptList(res.data);
        })
        .catch((err)=>{
            console.log(err);
            toast.error(err.response.data.id[0],{
                position: "top-center",
              })
        })
    },[])

    function DropdownDeptList (deptList){
        return <>
       
            <option  id="class-name" className="dept_head_input" value={deptList.id}>{deptList.name}</option>
        </>
             }
    function handleCancelEdClassApi(){
        axios.get("https://erp-edumate.herokuapp.com/api/user/admin/classes/"+"ALL/",config).
        then((res)=>{
            console.log(res.data);
            setAdminClAdd(AdminClAdd);
            navigate("/adminAdd")
        }).catch((err)=>{
            console.log(err);
            toast.error(err.response.data.id[0],{
                position: "top-center",
              })
        })
    }
    return <>
     <AdmBar />
  <div className="updateOuterClassDiv">
    <div className="addInnerBlockClass">
        <div className="add-new-dept">Edit Class Details</div>
        <label for="dept-name" className="dept_head" id="dept">Department</label><br />
        {/* <input type="text" id="class-name" className="dept_head_input" value={deptId} onChange={handleDeptId} /><br /> */}
        <label for="year-name" className="year_head">Year</label><br />
        <input type="text" id="year-name" className="class_year_input" value={yearName} onChange={handleYearName} /><br />
        <label for="sec-name" className="sec_head">Section</label><br />
        <input type="text" id="sec-name" className="sec_head_input" value={secName} onChange={handleSecName} /><br />
        <label for="class-name" className="class_head">Class ID</label><br />
        <input type="text" id="class-name" className="class_head_input" value={classId} onChange={handleClassId} disabled/><br />
        <button className="cancel_add_dept" id="class_add" onClick={handlePostEdClassApi}>Continue</button>
        <button className="done_add_dept" id="class_cancel" onClick={handleCancelEdClassApi}>Cancel</button>
    </div>
    <div className="monthDDList">
    <select onChange={handleDepart}  className="dept_head_input" id="class-name">
        {deptList.map(DropdownDeptList)}
        </select>
    </div>
 </div>
 <ToastContainer />
    </>
 }
 export default EditClassComp;