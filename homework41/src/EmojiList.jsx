import React from "react";
import Emoji from "./Emoji";

const EmojiList = ({ emojis, incrementCount }) => {
    
    if (!Array.isArray(emojis)) {

        return undefined; 
    }

    return (
        emojis.map(emoji => 
             <Emoji onClick={(e) => { e.preventDefault(); incrementCount(emoji.id)}} count={emoji.count} imageCode={emoji.imageCode} key={emoji.id} />
        )
    )
}

export default EmojiList;