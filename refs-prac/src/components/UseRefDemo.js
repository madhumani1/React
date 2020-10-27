import React, { useState, useEffect, useRef } from 'react'

export default function UseRefDemo() {
    const [name, setName] = useState('');
    const renderCount = useRef(0);
    const prevName = useRef('');

    useEffect(() => {
        //setRenderCount(prevRenderCount => prevRenderCount+1)
        //renderCount.current=renderCount.current+1;
        prevName.current = name
    }, [name])


    return (
        <>
            <input value={name} onChange={event => setName(event.target.value)} />
            <div>My name is {name}...and previous name was {prevName.current}</div>
        </>
    )
}
