import React from "react";

const DropdownItem = ({ imgSrc, text }) => {
    return (
        <li>
            <button className="dropdown-item">
                {imgSrc && <img src={imgSrc} alt="" />}
                <span>{text}</span>
            </button>
        </li>
    )
}

export default DropdownItem;