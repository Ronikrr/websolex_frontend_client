import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout";
import PageTitle from "./components/PageTitle";

// Lazy-loaded components
const Home = lazy(() => import("./pages/home"));
const Portfolio = lazy(() => import("./pages/portfolio"));
const Portfolioview = lazy(() => import("./components/portfolioview"));
const Service = lazy(() => import("./pages/service"));
const Contact = lazy(() => import("./pages/contact"));
const Company = lazy(() => import("./pages/company"));
const Webdevelopment = lazy(() => import("./components/webdevelopment"));
const Graphic = lazy(() => import("./components/graphic"));
const Uiux = lazy(() => import("./components/design"));
const MobileApp = lazy(() => import("./components/mobileapps"));
const Digital = lazy(() => import("./components/digital"));
const Blog = lazy(() => import("./pages/blogpage"));
const Businesspage = lazy(() => import("./pages/businesspage"));
const Career = lazy(() => import("./pages/career"));
const Thankyou = lazy(() => import("./components/thankyou"));
const Notfound = lazy(() => import("./pages/notfound"));
const Loader = lazy(() => import("./components/loader"));


const AppRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <PageTitle title="Home Page" />
              <Home />
            </Layout>
          }
        />
        <Route
          path="/portfolio"
          element={
            <Layout>
              <PageTitle title="Portfolio Page" />
              <Portfolio />
            </Layout>
          }
        />
        <Route
          path="/portfolio/:portfolioid"
          element={
            <Layout>
              <PageTitle title="Portfolio Page" />
              <Portfolioview />
            </Layout>
          }
        />
        <Route
          path="/company"
          element={
            <Layout>
              <PageTitle title="Company Page" />
              <Company />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <PageTitle title="Contact Page" />
              <Contact />
            </Layout>
          }
        />
        <Route
          path="/service"
          element={
            <Layout>
              <PageTitle title="Service Page" />
              <Service />
            </Layout>
          }
        />
        <Route
          path="/service/webdevelopment"
          element={
            <Layout>
              <PageTitle title="Web Development Page" />
              <Webdevelopment />
            </Layout>
          }
        />
        <Route
          path="/service/graphic"
          element={
            <Layout>
              <PageTitle title="Graphic Page" />
              <Graphic />
            </Layout>
          }
        />
        <Route
          path="/service/uiux"
          element={
            <Layout>
              <PageTitle title="UI/UX Page" />
              <Uiux />
            </Layout>
          }
        />
        <Route
          path="/service/mobileapps"
          element={
            <Layout>
              <PageTitle title="App Development Page" />
              <MobileApp />
            </Layout>
          }
        />
        <Route
          path="/service/digital"
          element={
            <Layout>
              <PageTitle title="Digital Marketing Page" />
              <Digital />
            </Layout>
          }
        />
        <Route
          path="/blog"
          element={
            <Layout>
              <PageTitle title="Blog Page" />
              <Blog />
            </Layout>
          }
        />
        <Route
          path="/blog/:blogid"
          element={
            <Layout>
              <PageTitle title="Blog Page" />
              <Businesspage />
            </Layout>
          }
        />
        <Route
          path="/career"
          element={
            <Layout>
              <PageTitle title="Career Page" />
              <Career />
            </Layout>
          }
        />
        <Route
          path="/thankyou"
          element={
            <Layout>
              <PageTitle title="Thank You Page" />
              <Thankyou />
            </Layout>
          }
        />
        <Route
          path="*"
          element={
            <>
              <PageTitle title="404 Error Page" />
              <Notfound />
            </>
          }
        />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
