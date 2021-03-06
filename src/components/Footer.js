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
            <a target="_blank" rel="noreferrer" href="https://github.com/jzolo22" >
                <StyledImg src="/images/githubIcon.png" alt="github logo"/>
            </a>
            
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jzolotarev/" >
                <StyledImg src="/images/linkedinIcon.png" alt="linkedin logo"/>
            </a>

            <a target="_blank" rel="noreferrer" href="https://twitter.com/JZolo" >
                <StyledImg src="/images/twitterIcon.png" alt="twitter logo"/>
            </a>  

            <a target="_blank" rel="noreferrer" href="https://jzolotarev.medium.com/" >
                <StyledImg src="/images/mediumIcon.png" alt="medium logo"/>
            </a>   

            <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCEZuU86dwUCBBkLUr24e6GA/videos" >
                <StyledImg src="/images/youtubeIcon.png" alt="youtube logo"/>
            </a>        

            {/* <div style={{fontSize: "12px"}}>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>  */}
        </StyledDiv>
    )
}

export default Footer