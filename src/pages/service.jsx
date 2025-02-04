import React from "react";
import { FaArrowRight } from "react-icons/fa";
import reactjs from "../Assets/library.png";
import nodejs from "../Assets/nodejs2.png";
import php from "../Assets/php2.png";
import laravel from "../Assets/laravel1.png";
import wordPress from "../Assets/wordpress-logo.png";
import shopify from "../Assets/shofify.png";
import angular from "../Assets/angular.png";
import wix from "../Assets/wix.png";
import webflow from "../Assets/webflow.png";
import uiux from "../Assets/ui ux.png";
import grafic from "../Assets/grafic.png";
import branding from "../Assets/branding.png";
import packging from "../Assets/package.png";
import website from "../Assets/website.png";
import application from "../Assets/application.png";
import ios from "../Assets/ios.png";
import android from "../Assets/android (1).png";
import logodesign from "../Assets/logo-design.png";
import flutter from "../Assets/flutter2.png";
import seo from "../Assets/seo.png";
import click_through from "../Assets/click-through-rate.png";
import marketing from "../Assets/marketing (1).png";
import bullhorn from "../Assets/bullhorn.png";
import digital_marketing from "../Assets/digital-marketing (1).png";
import { Link } from "react-router-dom";

const services = [
  {
    title: "React.js Development",
    subtitle: "Build Modern Web Applications with React.js",
    description:
      "We specialize in crafting dynamic, responsive, and high-performance web applications using React.js. Our solutions are tailored to enhance user experience and ensure seamless scalability.",
    imgSrc: reactjs,
  },
  {
    title: "Node.js Development",
    subtitle: "Efficient Backend Solutions with Node.js",
    description:
      "Leverage the power of Node.js for building fast, scalable, and efficient server-side applications. Our team delivers robust back-end solutions that support real-time data and high traffic.",
    imgSrc: nodejs,
  },
  {
    title: "PHP Development",
    subtitle: "Versatile Web Solutions with PHP",
    description:
      "Our PHP development services offer versatile and reliable web solutions. From dynamic websites to complex web applications, we provide efficient, secure, and scalable PHP development.",
    imgSrc: php,
  },
  {
    title: "Laravel Development",
    subtitle: "Elegant and Efficient Laravel Solutions",
    description:
      "Utilize the elegance and efficiency of Laravel for your web applications. We deliver robust, scalable, and maintainable solutions using this popular PHP framework, tailored to your business needs.",
    imgSrc: laravel,
  },
  {
    title: "WordPress Development",
    subtitle: "Customized WordPress Websites",
    description:
      "Create a strong online presence with our WordPress development services. We design and develop custom WordPress websites that are user-friendly, SEO-optimized, and easy to manage.",
    imgSrc: wordPress,
  },
  {
    title: "Shopify Development",
    subtitle: "Ecommerce Excellence with Shopify",
    description:
      "Transform your ecommerce business with our Shopify development services. We create stunning, user-friendly online stores that offer seamless shopping experiences and are optimized for conversions.",
    imgSrc: shopify,
  },
  {
    title: "Angular Development",
    subtitle: "Powerful Single-Page Applications with Angular",
    description:
      "Our Angular development services focus on building powerful, feature-rich single-page applications. We ensure your web applications are fast, responsive, and user-friendly.",
    imgSrc: angular,
  },
  {
    title: "Wix Development",
    subtitle: "Easy and Elegant Websites with Wix",
    description:
      "Create beautiful, functional websites effortlessly with our Wix development services. We provide custom design and development to match your brand's unique style and requirements.",
    imgSrc: wix,
  },
  {
    title: "Webflow Development",
    subtitle: "Advanced Web Design with Webflow",
    description:
      "Unleash your creativity with our Webflow development services. We build visually stunning and highly functional websites that are fully responsive and optimized for performance.",
    imgSrc: webflow,
  },
  {
    title: "Logo Design",
    subtitle: "Crafting Memorable Logos",
    description:
      "Our logo design service creates unique and memorable logos that perfectly represent your brand's identity. We focus on simplicity, versatility, and timeless appeal to make your brand stand out.",
    imgSrc: logodesign,
  },
  {
    title: "Infographic Design",
    subtitle: "Visual Storytelling with Infographics",
    description:
      "Transform complex information into engaging visuals with our infographic design service. We create clear, informative, and visually appealing infographics that effectively communicate your message.",
    imgSrc: grafic,
  },
  {
    title: "Packaging Design",
    subtitle: "Innovative Packaging Solutions",
    description:
      "Enhance your product's appeal with our packaging design service. We design eye-catching, functional, and brand-aligned packaging that not only attracts customers but also communicates your product's value.",
    imgSrc: packging,
  },
  {
    title: "Branding Identity",
    subtitle: "Building Strong Brand Identities",
    description:
      "Establish a powerful brand presence with our comprehensive branding identity service. From logo creation to visual style and messaging, we help define and communicate your brand's unique story and values.",
    imgSrc: branding,
  },
  {
    title: "Website Design",
    subtitle: "Stunning and Functional Websites",
    description:
      "We create visually stunning and user-friendly websites tailored to your brand and business needs. Our designs focus on aesthetics, functionality, and seamless user experience, ensuring your online presence stands out.",
    imgSrc: website,
  },
  {
    title: "Application Design",
    subtitle: "Innovative App Designs",
    description:
      "Our application design service delivers intuitive and engaging designs for mobile and web applications. We prioritize user experience and usability, creating apps that are both beautiful and easy to navigate.",
    imgSrc: application,
  },
  {
    title: "UI/UX Design",
    subtitle: "Exceptional UI/UX Design",
    description:
      "Enhance your digital products with our expert UI/UX design services. We design interfaces that are not only visually appealing but also intuitive and user-centric, ensuring a seamless and enjoyable experience for your users.",
    imgSrc: uiux,
  },
  {
    title: "iOS Development",
    subtitle: "Exceptional iOS App Development",
    description:
      "We specialize in creating high-quality iOS apps that offer seamless performance and a great user experience. Our team crafts custom iOS solutions that are visually appealing, intuitive, and optimized for the latest Apple devices.",
    imgSrc: ios,
  },
  {
    title: "Android Development",
    subtitle: "Innovative Android App Solutions",
    description:
      "Our Android development service delivers innovative and reliable apps tailored to your business needs. We build feature-rich, secure, and user-friendly Android applications that run smoothly on a wide range of devices.",
    imgSrc: android,
  },
  {
    title: "Flutter Development",
    subtitle: "Cross-Platform Excellence with Flutter",
    description:
      "Leverage the power of Flutter to create high-performance apps for both iOS and Android. Our Flutter development service ensures a consistent and native-like experience across platforms, with beautiful UI and robust functionality.",
    imgSrc: flutter,
  },
  {
    title: "SEO",
    subtitle: "Exceptional SEO Services",
    description:
      "Rank higher on search engines and attract more organic traffic with our expert SEO strategies tailored to your business.",
    imgSrc: seo,
  },
  {
    title: "Pay Per Click Advertising",
    subtitle: "Maximize Your ROI",
    description:
      "Maximize your ROI with targeted PPC campaigns that drive immediate and measurable results.",
    imgSrc: click_through,
  },
  {
    title: "Social Media Marketing",
    subtitle: "Engage Your Audience",
    description:
      "Engage your audience and grow your brand with impactful social media strategies across all major platforms.",
    imgSrc: marketing,
  },
  {
    title: "Email Marketing",
    subtitle: "Reach Your Customers",
    description:
      "Reach your customers directly with personalized email campaigns that convert leads into loyal clients.",
    imgSrc: bullhorn,
  },
  {
    title: "WhatsApp Marketing",
    subtitle: "Connect Instantly",
    description:
      "Connect with your audience instantly through WhatsApp, delivering messages that drive action and build relationships.",
    imgSrc: digital_marketing,
  },
];

function Service() {
  return (
    <section className="service_page py-100">
      <div className="container">
        <div className="row justify-content-center mb-4">
          <div className="col-lg-12 text-center py-5">
            <div className="section_title portfolio_title text-center mt-3 mb-4">
              <div className="section_main_title ">
                <h1 className="text-capitalize fw-bold">Explore by category</h1>
              </div>
            </div>
          </div>
          {services.map((service, index) => (
            <div
              key={index}
              className="col-xl-3 col-lg-4 col-md-6 mb-7 d-flex align-items-stretch mb-5"
            >
              <div className="position-relative mg-10 mx-md-3 col-12">
                <div className="card border-0 mb-0">
                  <div className="card-body text-center text-lg-start p-4 border-0">
                    <div className="card_body_sub">
                      <div className="card_icon rounded-1 d-flex align-items-center justify-content-center justify-content-lg-start mb-3">
                        <img
                          src={service.imgSrc}
                          alt={service.title}
                          className="fs-2 img-fluid col-2 col-md-3 col-lg-2"
                        />
                      </div>
                      <h5 className="mb-1 fw-bold text-capitalize mb-2">
                        {service.title}
                      </h5>
                      <h6 className="col-xxl-9">{service.subtitle}</h6>
                      <p className="mb-1 fs-14">{service.description}</p>
                    </div>
                    <div className="social d-flex mt-4 justify-content-end">
                      <Link to="#">
                        <FaArrowRight className="arrow" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Service;
