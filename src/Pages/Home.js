import React from 'react'
import NameBanner from '../components/NameBanner'
import styled from 'styled-components'
import { motion } from 'framer-motion';


const GridDiv = styled.div`
    grid-area: 1 / 1 / -1 / -1;
    display: grid;
    grid-template-rows: 40%;
`

const HiImDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-bottom: 5%
`


function Home(){
    const names = ["Julia", "Юля", "Júlia", "Giulia"]

    return (
        <GridDiv>
            <HiImDiv>
                <h3>Hi! I'm</h3>
            </HiImDiv>
            <NameBanner names={names}/>
        </GridDiv>

    )
}


export default Home
