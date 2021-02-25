import React from 'react'
// import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import StyledImg from './StyledImg'

function Footer(){

    const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;    
    align-items: center;
    gap: 5%;
    `

    return (
        <StyledDiv> 
            <a href="https://github.com/jzolo22" >
                <StyledImg src="/images/githubIcon.png" alt="github logo"/>
            </a>
            
            <a href="https://www.linkedin.com/in/jzolotarev/" >
                <StyledImg src="/images/linkedinIcon.png" alt="linkedin logo"/>
            </a>

            <a href="https://twitter.com/JZolo" >
                <StyledImg src="/images/twitterIcon.png" alt="twitter logo"/>
            </a>  

            <a href="https://jzolotarev.medium.com/" >
                <StyledImg src="/images/mediumIcon.png" alt="medium logo"/>
            </a>           
        </StyledDiv>
    )
}

export default Footer