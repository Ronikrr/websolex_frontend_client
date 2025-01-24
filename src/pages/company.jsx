import React from 'react'
import Mission from '../components/mission';
import Meetourteam from '../components/meetourteam';
import Maintitle from '../components/maintitle';


function Company() {
  Maintitle("WebSolex-Company Page")
  return (
    <>
      <Mission />
      <Meetourteam />
    </>
  )
}

export default Company
