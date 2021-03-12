import React from 'react'
import { motion } from 'framer-motion';
// import styled from 'styled-components'

// let CenteredDiv = styled.div`
//     grid-area: 1 / 1 / -1 / -1;
//     text-align: center;
//     background-color: pink;
// `

function About(){
    return (
        <motion.h1
        initial={{justifyContent: "center", alignItems: "center", textAlign: "center", fontSize: "30px"}}
        animate={{ justifyContent: "center", fontSize: "14px", alignItems: "flex-start"}}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
        // animate={{ x: 500 }}
        // transition={{ ease: "easeOut", duration: 2 }}
        style={{gridRowStart: "1", gridRowEnd: "-1", gridColumnStart: "1", gridColumnEnd: "-1", display: "flex", justifyContent: "center", alignItems: "center"}}
        >
                <h1>Julia Zolotarev</h1>
        </motion.h1>
    )
}

export default About



// need to include:

{/* <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}