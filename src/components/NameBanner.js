import React from 'react'
import styled from 'styled-components'

const Name = styled.h1`
    // text-align: center;
    // margin:auto
`

function NameBanner(){

    return (
        <div>
            {/* <h3>Hi! I'm</h3> */}
            <Name>Julia</Name>
        </div>
    )
}

export default NameBanner