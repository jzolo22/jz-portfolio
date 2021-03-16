import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Banner = styled.div`
    display: grid;
    text-align: center;
    grid-template-rows: 40%;
`
const StyledName = styled.h1`
    margin-bottom: 0px;
    margin-top: 0px;
    padding-bottom: 0px;
`

const StyledPara = styled.p`
    margin-top: 0px;
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
            <h1>{`${names[i]},`}</h1>
            {i === names.length ? setI(0) : null}
            <p>a Brooklyn-based Software Developer</p>
        </Banner>
    )
}

export default NameBanner