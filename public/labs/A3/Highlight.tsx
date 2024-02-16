import React, {ReactNode} from "react."

// This is our first tsx that has parameters
// Functions can only have ONE parameter: obj
function Highlight({children}: {children: ReactNode}) {
    return children;
}

export default Highlight;