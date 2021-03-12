import React from 'react'
import NameBanner from '../components/NameBanner'
// import styled from 'styled-components'
import { motion } from 'framer-motion';


// const StyledHi = styled.div`
//     grid-area: 3 / 4 / -1 / -1
// `


function Home(){
    const names = ["Julia", "Юля", "Júlia", "Giulia"]

    return (
        <>
         <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{gridArea: "1 / 1 / -1 / -1"}}
        >
            <div>
                <h3 style={{paddingLeft: "20%", paddingTop: "5%"}}>Hi! I'm</h3>
            </div>
            <NameBanner names={names}/>
         </motion.div>
        </>

    )
}


export default Home
