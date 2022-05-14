import React, { useState } from 'react'

//useState hook
export default function Test() {

    const [count, setCount] = useState(0);
    const [text, setText] = useState('');

    return (
        <div>
            <h1>This is a counter {count}</h1>
            <button onClick={() => setCount(count + 1)} style={{ marginRight: '1rem' }}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>

            <input type="text" onChange={(e) => setText(e.target.value)} />
            <h1>{text}</h1>

        </div>
    )
}
