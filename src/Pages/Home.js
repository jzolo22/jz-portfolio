import React from 'react'
import NameBanner from '../components/NameBanner'


function Home(){
    const names = ["Julia", "Юля", "Júlia", "Giulia", "Julia"]

    return (
        <NameBanner names={names}/>
    )
}


export default Home