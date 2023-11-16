import React from "react"

import Catalog from "../catalog/Catalog";
function WelcomePage({catalog}) {
    return (
        <>
            <Catalog {...catalog}/>
        </>
    )
}


export default WelcomePage