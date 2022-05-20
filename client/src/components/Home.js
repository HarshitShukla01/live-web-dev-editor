import React from 'react'
import Home_main from './homecomp/Home_main'

const Home = ({userStatus}) => {
    return (
    <>
      <Home_main userStatus={userStatus}/>
    </>
    )
}

export default Home
