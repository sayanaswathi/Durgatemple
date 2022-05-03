import React from "react";
import "../../../App.css"
import DynamicTable from "./DynamicTable";

export default function AdoptedTemples(){
    return(
        <>
            <h1 className="temples">Adopted Temples</h1>
           <div className="container">
           <DynamicTable/>
           </div>
        
        </>
    )
}