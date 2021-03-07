import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Banner = styled.div`
    transform: translateY(-20%);
`


function NameBanner ({ names }) {
    const [i, setI] = useState(0)
 
    useEffect(() => {
        window.setInterval(() => {
                setI(i => i + 1)
                // setI(i => i %= names.length)
            }, 1000
        );
    }, [])

    return (
        <Banner>
            <h3>Hi! I'm</h3>
            <h1>{names[i]}</h1>
        </Banner>
    )
}

export default NameBanner