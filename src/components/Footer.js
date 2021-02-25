import React from 'react'
// import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import StyledImg from './StyledImg'

function Footer(){

    const StyledDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;    
    align-items: center;
    `

    return (
        <StyledDiv> 

            <StyledImg src="/images/githubIcon.png" alt="github logo"/>

            <div>
                Julia Zolotarev © 2021 
            </div>
        
        </StyledDiv>
    )
}

export default Footer