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
            <a href="https://github.com/jzolo22" >
                <StyledImg src="/images/githubIcon.png" alt="github logo"/>
            </a>
            
            <a href="https://www.linkedin.com/in/jzolotarev/" >
                <StyledImg src="/images/linkedinIcon.png" alt="linkedin logo"/>
            </a>
            
        
        </StyledDiv>
    )
}

export default Footer