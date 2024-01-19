import React, { useEffect } from "react";

function ParallelTimer() {
    const [counter, setCounter] = React.useState(0)

    console.log('fired nested component');
    return (
        <div>
            <h1>Parallel Counter:{counter}</h1>
            <button onClick={() => setCounter(counter + 1)}>+</button>
        </div>
    )
}

export default ParallelTimer