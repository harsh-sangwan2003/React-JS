import React, { useEffect, useState } from 'react'

function Ue2() {

    const [count, setCount] = useState(0);


    //using useEffect as componentdidmount
    useEffect(() => {

        document.title = `This is my title ${count}`;

    })

    return (
        <div className='container' style={{ textAlign: 'center' }}>

            <h1>This is a counter {count}</h1>
            <button className='btn btn-info' onClick={() => setCount(count + 1)}>+1</button>

        </div >
    )
}

export default Ue2