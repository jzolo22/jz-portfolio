import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Banner = styled.div`
    transform: translateY(-20%);
`


const NameBanner = ({ names }) => {
    const [name, setName] = useState("")

    const chNames = (names, i) => {
        setInterval(
            function() {
                i++;
                setName(names[i])
                console.log(i)
                i %= names.length;
            },
            3000
        );
    }

    useEffect(() => {
        chNames(names, 0)
    }, [])

    console.log(name)
    return (
        <Banner>
            <h3>Hi! I'm</h3>
            <h1>{name}</h1>
        </Banner>
    )
}

export default NameBanner