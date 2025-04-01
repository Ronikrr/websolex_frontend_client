import React, { lazy, Suspense } from 'react';
// import Banner from '../components/banner';
// import Clientside from '../components/ClientSlider';
// import ServiceSection from '../components/servicesection';
// import PortfolioSection from '../components/portfoliosection';
// import ChooseSection from '../components/ChooseSection';
// import TechnologiesSection from '../components/technologies';
// import ReviewSection from '../components/Review';
// import Process from '../components/process';
// import Get from '../components/get';

const Banner = lazy(() => import('../components/banner'));
const Clientside = lazy(() => import('../components/ClientSlider'));
const ServiceSection = lazy(() => import('../components/servicesection'));
const PortfolioSection = lazy(() => import('../components/portfoliosection'));
const ChooseSection = lazy(() => import('../components/ChooseSection'));
const TechnologiesSection = lazy(() => import('../components/technologies'));
const ReviewSection = lazy(() => import('../components/Review'));
const Process = lazy(() => import('../components/process'));
const Get = lazy(() => import('../components/get'));

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
