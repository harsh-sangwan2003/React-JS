import React, { useEffect, useState } from 'react'

function Ue1() {

    const [count, setCount] = useState(0)

    /*Can be used as ->
    1.componentdidmount
    2.compoenntdidupdate
    */

    //using useEffect as componentdidmount and componentdidupdate
    useEffect(() => {

        document.title = `This is my title ${count}`;
    })

    return (
        <div>
            <h1>This is a counter {count}</h1>
            <button onClick={() => setCount(count + 1)}>+1</button>
        </div>
    )
}

export default Ue1