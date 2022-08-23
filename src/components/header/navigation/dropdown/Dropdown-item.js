import React from "react";

const DropdownItem = ({ imgSrc, text }) => {
    return (
        <li>
            <a className="dropdown-item" href="#">
                {imgSrc && <img src={imgSrc} alt="" />}
                <span>{text}</span>
            </a>
        </li>
    )
}

export default DropdownItem;