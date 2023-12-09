import React from "react"

import Catalog from "../catalog/Catalog";
function Homepage({catalog}) {
    return (
        <>
            <Catalog {...catalog}/>
        </>
    )
}


export default Homepage