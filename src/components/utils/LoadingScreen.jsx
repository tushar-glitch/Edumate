import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import "./loadScreen.css";
function LoadingScreen() {
    return <>
        <div className="loadingScreen">
            <div className="loadSpinner">
                {<ReactBootStrap.Spinner animation="border" id="loader" />}
            </div>
        </div>
    </>
}
export default LoadingScreen;