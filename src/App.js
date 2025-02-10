// // import React, { useState, useEffect } from "react";
// // import "bootstrap/dist/css/bootstrap.min.css";
// // import "bootstrap/dist/css/bootstrap.min.css";
// // import "bootstrap/dist/js/bootstrap.bundle.min.js";
// // import WOW from "wow.js";
// // import "animate.css";
// // import "./App.css";
// // import Header from "./components/header";
// // import Footer from "./components/Footer";
// // import Home from "./pages/home";
// // import Portfolio from "./pages/portfolio";
// // import Portfolioview from "./components/portfolioview";
// // import Service from "./pages/service";
// // import Contact from "./pages/contact"; 
// // import Company from "./pages/company";
// // import Webdevelopment from "./components/webdevelopment";
// // import Graphic from "./components/graphic";
// // import Uiux from "./components/design";
// // import MobileApp from "./components/mobileapps";
// // import Digital from "./components/digital";
// // import Blog from "./pages/blogpage";
// // import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// // import Businesspage from "./pages/businesspage";
// // import Career from "./pages/career";
// // import Thankyou from "./components/thankyou";
// // import Notfound from "./pages/notfound";
// // import PageTitle from "./components/PageTitle";
// // import Loader from "./components/loader";
// // const Layout = ({ children }) => {
// //   const [loading, setLoading] = useState(true);
// //   React.useEffect(() => {
// //     const timer = setTimeout(() => setLoading(false), 3000);
// //     return () => clearTimeout(timer);
// //   }, []);
// //   return (
// //     <>
// //       <div className="">
// //         {loading ? (
// //           <Loader />
// //         ) : (
// //           <>
// //               <Header />
// //               <main className="m-0 p-0"> {children} </main>
// //               <Footer />
// //             </>
// //         )}
// //       </div>
// //     </>
// //   );
// // };


// // function App() {
// //   useEffect(() => {
// //     const wow = new WOW();
// //     wow.init(); // Initialize WOW.js
// //   }, []);
// //   useEffect(() => {
// //     // Disable Print Screen
// //     document.addEventListener("keydown", function (e) {
// //       if (e.metaKey && e.key === "PrintScreen") {
// //         alert("Screenshots are disabled!");
// //         e.preventDefault();
// //       }

// //       // Disable Developer Tools
// //       if (e.ctrlKey && e.key === "u") {
// //         alert("View Source is disabled!");
// //         e.preventDefault();
// //       }
// //     });


// //     return () => {
// //       document.removeEventListener("keydown", () => { });
// //     };
// //   }, [])
// //   useEffect(() => {
// //     // Create an overlay div
// //     const overlay = document.createElement("div");
// //     overlay.className = "screenshot-blocker";
// //     document.body.appendChild(overlay);

// //     return () => {
// //       document.body.removeChild(overlay);
// //     };
// //   }, []);

// //   return (
// //     <Router>
     
    
     
// //       <Routes>
// //         <Route path="/" element={
// //           <Layout>
// //             <PageTitle title={`Home Page`} />
// //             <Home />
// //           </Layout>} />
// //         <Route path="/portfolio" element={
// //           <Layout>
// //             <PageTitle title={`Portfolio Page`} />
// //             <Portfolio />
// //           </Layout>} />
// //         <Route path="/portfolio/:portfolioid" element={
// //           <Layout>
// //             <PageTitle title={`Portfolio page`} />
// //             <Portfolioview />
// //           </Layout>} />
// //         <Route path="/company" element={
// //           <Layout>
// //             <PageTitle title={`Company Page`} />
// //             <Company />
// //           </Layout>} />
// //         <Route path="/contact" element={
// //           <Layout>
// //             <PageTitle title={`Contact Page`} />
// //             <Contact />
// //           </Layout>} />
// //         <Route path="/service" element={
// //           <Layout>
// //             <PageTitle title={`Service Page`} />
// //             <Service />
// //           </Layout>} />
// //         <Route path="/service/webdevelopment" element={
// //           <Layout>
// //             <PageTitle title={`Web development Page`} />
// //             <Webdevelopment />
// //           </Layout>} />
// //         <Route path="/service/graphic" element={
// //           <Layout>
// //             <PageTitle title={`Graphic Page`} />
// //             <Graphic />
// //           </Layout>} />
// //         <Route path="/service/uiux" element={
// //           <Layout>
// //             <PageTitle title={`Ui/Ux Page`} />
// //             <Uiux />
// //           </Layout>} />
// //         <Route path="/service/mobileapps" element={
// //           <Layout>
// //             <PageTitle title={`App development Page`} />
// //             <MobileApp />
// //           </Layout>} />
// //         <Route path="/service/digital" element={
// //           <Layout>
// //             <PageTitle title={`Digital marketing Page`} />
// //             <Digital />
// //           </Layout>} />
// //         <Route path="/blog" element={
// //           <Layout>
// //             <PageTitle title={`Blog Page`} />
// //             <Blog />
// //           </Layout>} />
// //         <Route path="/blog/:blogid" element={
// //           <Layout>
// //             <PageTitle title={`Blog Page`} />
// //             <Businesspage />
// //           </Layout>} />
// //         <Route path="/Career" element={
// //           <Layout>
// //             <PageTitle title={`Carrer Page`} />
// //             <Career />
// //           </Layout>} />
// //         <Route path="/thankyou" element={
// //           <Layout>
// //             <PageTitle title={`Thank You Page`} />
// //             <Thankyou />
// //           </Layout>} />
// //         <Route path="*" element={
// //           <>
// //             <PageTitle title={`404 Error Page`} />
// //             <Notfound />
// //           </>
// //         } />


// //       </Routes>
   

// //     </Router>
// //   )

// // }

// // export default App;

// import React, { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import WOW from "wow.js";
// import "animate.css";
// import "./App.css";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Header from "./components/header";
// import Footer from "./components/Footer";
// import Home from "./pages/home";
// import Portfolio from "./pages/portfolio";
// import Portfolioview from "./components/portfolioview";
// import Service from "./pages/service";
// import Contact from "./pages/contact";
// import Company from "./pages/company";
// import Webdevelopment from "./components/webdevelopment";
// import Graphic from "./components/graphic";
// import Uiux from "./components/design";
// import MobileApp from "./components/mobileapps";
// import Digital from "./components/digital";
// import Blog from "./pages/blogpage";
// import Businesspage from "./pages/businesspage";
// import Career from "./pages/career";
// import Thankyou from "./components/thankyou";
// import Notfound from "./pages/notfound";
// import PageTitle from "./components/PageTitle";
// import Loader from "./components/loader";

// const Layout = ({ children }) => {
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 3000);
//     return () => clearTimeout(timer);
//   }, []);

//   return loading ? <Loader /> : (
//     <>
//       <Header />
//       <main className="m-0 p-0">{children}</main>
//       <Footer />
//     </>
//   );
// };

// function App() {
//   useEffect(() => {
//     const wow = new WOW();
//     wow.init();

//     return () => wow.sync();
//   }, []);

//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (e.metaKey && e.key === "PrintScreen") {
//         alert("Screenshots are disabled!");
//         e.preventDefault();
//       }
//       if (e.ctrlKey && e.key === "u") {
//         alert("View Source is disabled!");
//         e.preventDefault();
//       }
//     };

//     document.addEventListener("keydown", handleKeyDown);

//     return () => {
//       document.removeEventListener("keydown", handleKeyDown);
//     };
//   }, []);

//   useEffect(() => {
//     const overlay = document.createElement("div");
//     overlay.className = "screenshot-blocker";
//     document.body.appendChild(overlay);

//     return () => {
//       if (document.body.contains(overlay)) {
//         document.body.removeChild(overlay);
//       }
//     };
//   }, []);

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Layout><PageTitle title="Home Page" /><Home /></Layout>} />
//         <Route path="/portfolio" element={<Layout><PageTitle title="Portfolio Page" /><Portfolio /></Layout>} />
//         <Route path="/portfolio/:portfolioid" element={<Layout><PageTitle title="Portfolio Page" /><Portfolioview /></Layout>} />
//         <Route path="/company" element={<Layout><PageTitle title="Company Page" /><Company /></Layout>} />
//         <Route path="/contact" element={<Layout><PageTitle title="Contact Page" /><Contact /></Layout>} />
//         <Route path="/service" element={<Layout><PageTitle title="Service Page" /><Service /></Layout>} />
//         <Route path="/service/webdevelopment" element={<Layout><PageTitle title="Web Development Page" /><Webdevelopment /></Layout>} />
//         <Route path="/service/graphic" element={<Layout><PageTitle title="Graphic Page" /><Graphic /></Layout>} />
//         <Route path="/service/uiux" element={<Layout><PageTitle title="UI/UX Page" /><Uiux /></Layout>} />
//         <Route path="/service/mobileapps" element={<Layout><PageTitle title="App Development Page" /><MobileApp /></Layout>} />
//         <Route path="/service/digital" element={<Layout><PageTitle title="Digital Marketing Page" /><Digital /></Layout>} />
//         <Route path="/blog" element={<Layout><PageTitle title="Blog Page" /><Blog /></Layout>} />
//         <Route path="/blog/:blogid" element={<Layout><PageTitle title="Blog Page" /><Businesspage /></Layout>} />
//         <Route path="/career" element={<Layout><PageTitle title="Career Page" /><Career /></Layout>} />
//         <Route path="/thankyou" element={<Layout><PageTitle title="Thank You Page" /><Thankyou /></Layout>} />
//         <Route path="*" element={<><PageTitle title="404 Error Page" /><Notfound /></>} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import WOW from "wow.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "animate.css";
import "./App.css";
import AppRoutes from "./router"; // Importing routes

function App() {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);

  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;

