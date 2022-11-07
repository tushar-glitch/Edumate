import React from "react";
import updateImage from "./updateImage.svg";
import "./update.css";
import UpdateCard from "./updateCard";
import updateCdArr from "./updateCdArray";
 function Updates(){
    function CreateUpdateCard(updateCdArr){
        return (
        <UpdateCard title={updateCdArr.title} desc={updateCdArr.desc} />
        )
    }
    return <>
        <h1 className="update">Dashboard : Updates</h1>
        <div className="updateWhiteDiv">
            <h1 className="updateGreyRow">Updates</h1>
            <div className="UpdateCardCall">
    {updateCdArr.map(CreateUpdateCard)}
</div>
            {/* <img id="updateImage" src={updateImage} alt="update" /> */}
        </div>
    </>
 }
 export default Updates;