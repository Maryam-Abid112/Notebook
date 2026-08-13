import NoteContext from "./notecontext";
import react from "react";
import { useState } from "react";

const Notestate=(props)=>{
    return(
        <NoteContext.Provider value={{}}>
            {props.children}
        </NoteContext.Provider>
    )

}

export default Notestate;