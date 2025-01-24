import React from 'react'
// import PortfolioSection from '../Components/portfoliosection';
import Portfoliopage from '../components/portfoliopage';
import Maintitle from '../components/maintitle';

function Portfolio() {
  Maintitle("WebSolex-Portfolio Page")
  return (
    <>
      {/* <PortfolioSection /> */}
      <Portfoliopage />
    </>
  )
}

export default Portfolio
