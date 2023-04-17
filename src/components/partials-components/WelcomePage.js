import React from "react"

import Catalog from "../Catalog";
function WelcomePage({catalog}) {
    return (
        <>
            <Catalog {...catalog}/>
        </>
    )
}


export default WelcomePage