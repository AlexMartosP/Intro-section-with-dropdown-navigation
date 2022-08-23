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
            <ul className='navigation' role='list' aria-label='Primary'>
                <li>
                    <a className="dropdown-title" href="#" onClick={(event) => toggleDropdown(event)}>
                        <span>Features</span>
                        <ArrowDown className="arrow-down" />
                        <ArrowUp className="arrow-up" />
                    </a>
                    <div className="dropdown padding-400">
                        <ul className="dropdown-menu" role='list'>
                            <DropdownItem imgSrc={todoIcon} text="Todo List" />
                            <DropdownItem imgSrc={calendarIcon} text="Calendar" />
                            <DropdownItem imgSrc={remindersIcon} text="Reminders" />
                            <DropdownItem imgSrc={planningIcon} text="Planning" />
                        </ul>
                    </div>
                </li>
                <li>
                    <a className="dropdown-title" href="#" onClick={(event) => toggleDropdown(event)}>
                        <span>Company</span>
                        <ArrowDown className="arrow-down" />
                        <ArrowUp className="arrow-up" />
                    </a>
                    <div className="dropdown padding-400">
                        <ul className="dropdown-menu" role='list'>
                            <DropdownItem text="History" />
                            <DropdownItem text="Our team" />
                            <DropdownItem text="Blog" />
                        </ul>
                    </div>
                </li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">About</a></li>
            </ul>
        </nav>
    )
}

export default Navigation;