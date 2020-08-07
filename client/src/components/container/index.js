import React from "react";

export default function Container({children}) {
    return (
        <div className={`container ${this.props.pageName}`}>
            {children}
        </div>
    );
}