import React from "react";
// Images
import todoIcon from '../../../images/icon-todo.svg';
import calendarIcon from '../../../images/icon-calendar.svg';
import remindersIcon from '../../../images/icon-reminders.svg';
import planningIcon from '../../../images/icon-planning.svg';
import { ReactComponent as ArrowDown } from '../../../images/icon-arrow-down.svg';
import { ReactComponent as ArrowUp } from '../../../images/icon-arrow-up.svg';
import DropdownItem from "../navigation/dropdown/Dropdown-item";

const Navigation = () => {

    const toggleDropdown = (e) => {
        const dropdown = e.currentTarget.nextElementSibling;
        dropdown.classList.toggle('dropdown-open');

        e.currentTarget.classList.toggle('dropdown-open');
    }

    return (
        <nav className="padding-block-400">
            <ul className='navigation' aria-label='Primary'>
                <li>
                    <button className="dropdown-title" onClick={(event) => toggleDropdown(event)}>
                        <span>Features</span>
                        <ArrowDown className="arrow-down" />
                        <ArrowUp className="arrow-up" />
                    </button>
                    <div className="dropdown padding-400">
                        <ul className="dropdown-menu">
                            <DropdownItem imgSrc={todoIcon} text="Todo List" />
                            <DropdownItem imgSrc={calendarIcon} text="Calendar" />
                            <DropdownItem imgSrc={remindersIcon} text="Reminders" />
                            <DropdownItem imgSrc={planningIcon} text="Planning" />
                        </ul>
                    </div>
                </li>
                <li>
                    <button className="dropdown-title" onClick={(event) => toggleDropdown(event)}>
                        <span>Company</span>
                        <ArrowDown className="arrow-down" />
                        <ArrowUp className="arrow-up" />
                    </button>
                    <div className="dropdown padding-400">
                        <ul className="dropdown-menu">
                            <DropdownItem text="History" />
                            <DropdownItem text="Our team" />
                            <DropdownItem text="Blog" />
                        </ul>
                    </div>
                </li>
                <li><button>Careers</button></li>
                <li><button>About</button></li>
            </ul>
        </nav>
    )
}

export default Navigation;