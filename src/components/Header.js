import React from "react";

const Header = ({header}) => {
    return (
        <div id="header">
            <h1 className="header">
                {header}
            </h1>
        </div>
    )
}

export default Header