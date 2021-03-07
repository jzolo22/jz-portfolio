import React from 'react'
import NameBanner from '../components/NameBanner'
import styled from 'styled-components'

const StyledHi = styled.div`
    grid-area: 3 / 4 / -1 / -1
`


function Home(){
    const names = ["Julia", "Юля", "Júlia", "Giulia"]

    return (
        <>
        <StyledHi>
            <h3>Hi! I'm</h3>
        </StyledHi>
        <NameBanner names={names}/>
        </>
    )
}


export default Home
