import React from "react";

const NavBar = props => {
    return (
    <nav className="navbar">
        <ul>
            <li>
                <p>Minions Game</p>
            </li>
            {/* <li>
                <ScoreCounter score={props.score} topScore={props.topScore} />
            </li> */}
            <li>
                <p>
                    Score: {props.score}  ||  Personal Top Score: {props.topScore}
                </p>
            </li>
        </ul>
    </nav>
    )
};

export default NavBar;