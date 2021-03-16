import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Banner = styled.div`
    display: flex;
    justify-content: center;
`


function NameBanner ({ names }) {
    const [i, setI] = useState(0)
    const [isRunning] = useState(true)
    // const [intervalId, setIntervalId] = useState(null)
 
    useEffect(() => {
        if (isRunning){
            const id = window.setInterval(() => {
                    setI(i => i + 1)
                    // setI(i => i %= names.length)
                }, 1500
            );
            return () => window.clearInterval(id)
        }
    }, [isRunning])


    return (
        <Banner>
            <h1>{names[i]}</h1>
            {i === names.length ? setI(0) : null}
        </Banner>
    )
}

export default NameBanner