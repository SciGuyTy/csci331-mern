import React, { useState } from "react"

function Counter({incrementAmount = 1, initialCount = 0}) {
    const [count, setCount] = useState(initialCount);

    const handleClick = () => {
        setCount(count + incrementAmount);
    }

    return (
        <div className="counter">
            <p>Counter that increments by {incrementAmount} on click</p>
            <button onClick={handleClick} className={"button"}>{count}</button>
        </div>
    )
}

export default Counter;