import React from "react";

function Checklist() {
    return (
        <div className="checkboxes">
            <div className="single-box">
                <input type="checkbox" />
                <p>Place text here</p>
            </div>

            <div className="single-box">
                <input type="checkbox" />
                <p>Place text here</p>
            </div>

            <div className="single-box">
                <input type="checkbox" />
                <p>Place text here</p>
            </div>

            <div className="single-box">
                <input type="checkbox" />
                <p>Place text here</p>
            </div>
        </div>
    );
}

export default Checklist;
