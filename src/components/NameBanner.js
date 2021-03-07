import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Banner = styled.div`
    transform: translateY(-20%);
`


const NameBanner = ({ names }) => {
    const [name, setName] = useState("Julia")

    const chNames = (names, i) => {
        setInterval(
            function() {
                i++;
                console.log(i)
                setName(names[i])
                i %= names.length;
            },
            3000
        );
    }

    useEffect(() => {
        chNames(names, -1)
    }, [names])

    console.log(name)
    return (
        <Banner>
            <h3>Hi! I'm</h3>
            <h1 style={{fontFamily: "Courgette"}}>{name}</h1>
        </Banner>
    )
}

export default NameBanner