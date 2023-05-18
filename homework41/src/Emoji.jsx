import React from 'react';
import { useState } from 'react';

const Emoji = ({imageCode, count, onClick}) => {
    
    return (
        <div onClick={onClick} className="emoji">
            <p className="emoji__picture">{imageCode}</p>
            <p className="emoji__count">{count}</p>
        </div>)
};

export default Emoji;