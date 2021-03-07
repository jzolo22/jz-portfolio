import React from 'react'
import NameBanner from '../components/NameBanner'


function Home(){
    const names = ["Julia", "Юля", "Júlia", "Giulia"]

    return (
        <>
        <div>
            <h3>Hi! I'm</h3>
        </div>
        <NameBanner names={names}/>
        </>
    )
}


export default Home
