import React from 'react'
import { motion } from 'framer-motion';
import styled from 'styled-components'

// let CenteredDiv = styled.div`
//     grid-area: 1 / 1 / -1 / -1;
//     text-align: center;
//     background-color: pink;
// `

function About(){
    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        // animate={{ x: 500 }}
        // transition={{ ease: "easeOut", duration: 2 }}
        style={{gridArea: "1 / 1 / -1 / -1", textAlign: "center", backgroundColor: "pink"}}
        >
            
        {/* <CenteredDiv> */}
                    <h3>something</h3>
        {/* </CenteredDiv> */}
            </motion.div>
    )
}

export default About



// need to include:

{/* <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}