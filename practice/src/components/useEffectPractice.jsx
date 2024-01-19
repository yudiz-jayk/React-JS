import React, { useEffect } from "react";
import ParallelTimer from "./NestedTimers";


// If states of all parent component changed then its all child component rerender


function DemoUseEffect() {
    const [counter, setCounter] = React.useState(0)
    return (
        <div>
            <h1>Counter:{counter}</h1>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <ParallelTimer/>
        </div>
    )
}

export default DemoUseEffect