import React from 'react';
import Banner from '../components/banner';
import Clientside from '../components/ClientSlider';
import ServiceSection from '../components/servicesection';
import PortfolioSection from '../components/portfoliosection';
import ChooseSection from '../components/ChooseSection';
import TechnologiesSection from '../components/technologies';
import ReviewSection from '../components/Review';
import Process from '../components/process';
import Get from '../components/get';


function home() {
  return (
    <>
      <Banner />
      <Clientside />
      <ServiceSection />
      <PortfolioSection />
      <ChooseSection />
      <TechnologiesSection />
      <ReviewSection />
      <Process />
      <Get />
    </>
  )
}

export default home
