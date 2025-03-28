import React, { lazy, Suspense } from 'react';
const Banner = lazy(() => import("../components/banner"));
const Clientside = lazy(() => import("../components/ClientSlider"));
const ServiceSection = lazy(() => import("../components/servicesection"));
const PortfolioSection = lazy(() => import("../components/portfoliosection"));
const ChooseSection = lazy(() => import("../components/ChooseSection"));
const TechnologiesSection = lazy(() => import("../components/technologies"));
const ReviewSection = lazy(() => import("../components/Review"));
const Process = lazy(() => import("../components/process"));
const Get = lazy(() => import("../components/get"));
const Loading = lazy(() => import("../components/loader"));

function home() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Banner />
        <Clientside />
        <ServiceSection />
        <PortfolioSection />
        <ChooseSection />
        <TechnologiesSection />
        <ReviewSection />
        <Process />
        <Get />
      </Suspense>
    </>
  )
}

export default home
