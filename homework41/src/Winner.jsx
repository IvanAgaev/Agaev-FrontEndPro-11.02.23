import React from "react";

const Winner = ({ items }) => {
    
    return (
        <>
            <h3>The winner is:</h3>
            <p key={items[0].id}>{items[0].imageCode}</p>
        </>)

};

export default Winner;