import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'



function Header(){

    const StyledDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;    
    align-items: center;
    `

    return (
        <StyledDiv >
            <NavLink to="/" className="link">
                Home
            </NavLink>

            <NavLink to="/projects" className="link">
                Projects
            </NavLink>

            <NavLink to="/about" className="link">
                About Me
            </NavLink>

            <NavLink to="/blogs" className="link">
                Blogs
            </NavLink>

            <NavLink to="/misc" className="link">
                Just For Fun
            </NavLink>
        </StyledDiv>
    )
}

export default Header
