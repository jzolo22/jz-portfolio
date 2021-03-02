import React from 'react'
import styled from 'styled-components'

const Banner = styled.div`
    transform: translateY(-20%);
`

function NameBanner(){

    return (
        <Banner>
            <h3>Hi! I'm</h3>
            <h1>Julia</h1>
        </Banner>
    )
}

export default NameBanner