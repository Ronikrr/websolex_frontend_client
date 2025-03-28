import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout";
import PageTitle from "./components/PageTitle";
import Home from "./pages/home";
import Portfolio from "./pages/portfolio";
import Portfolioview from "./components/portfolioview";
import Service from "./pages/service";
import Contact from "./pages/contact";
import Company from "./pages/company";
import Webdevelopment from "./components/webdevelopment";
import Graphic from "./components/graphic";
import Uiux from "./components/design";
import MobileApp from "./components/mobileapps";
import Digital from "./components/digital";
import Blog from "./pages/blogpage";
import Businesspage from "./pages/businesspage";
import Career from "./pages/career";
import Thankyou from "./components/thankyou";
import Notfound from "./pages/notfound";

const AppRoutes = () => {
  return (
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
  );
};

export default AppRoutes;

// use React lasy