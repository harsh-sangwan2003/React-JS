import React, { useEffect, useState } from 'react'

function Ue3() {

    const [count, setCount] = useState(0);
    const [name, setName] = useState('Amit');

    useEffect(() => {

        document.title = `This is my title ${count} ${name}`;
    }, [count])

    return (
        <div className='container' style={{ textAlign: 'center' }}>

            <h1>This is a counter {count}</h1>
            <h1>{name}</h1>

            <button className='btn btn-info mr-3' onClick={() => setCount(count + 1)}>+1</button>
            <button className='btn btn-success' onClick={() => setName('Harsh')}>ChangeName</button>

        </div>
    )
}

export default Ue3