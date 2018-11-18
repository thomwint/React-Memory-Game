import React from "react";

const NavBar = props => {
    return (
    <nav className="navbar">
        <ul>
            <li>
                <h3>
                    Score: {props.score}  ||  Personal Top Score: {props.topScore}
                </h3>
            </li>
        </ul>
    </nav>
    )
};

export default NavBar;