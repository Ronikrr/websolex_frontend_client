import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import photoshop from '../Assets/webp/technology/desgin/ps.webp'
import illustrator from '../Assets/webp/technology/desgin/ai.webp'
import figma from '../Assets/webp/technology/desgin/figma.webp'
import cdr from '../Assets/webp/technology/desgin/cdr.webp'
import indesign from '../Assets/webp/technology/desgin/id.webp'
import aftereffect from '../Assets/webp/technology/desgin/ae.webp'

import wordpress from '../Assets/webp/technology/framework/wordpress.webp'
import bootstrap from '../Assets/webp/technology/framework/bootstrap.webp';
import shopify from '../Assets/webp/technology/framework/shopify.webp'
import webflow from '../Assets/webp/technology/framework/webflow.webp'
import framar from '../Assets/webp/technology/framework/farmer.webp'
import laravel from '../Assets/webp/technology/framework/laravel.webp'
import vuejs from '../Assets/webp/technology/framework/vuejs.webp'
import angular from '../Assets/webp/technology/framework/anguler.webp'
import nextjs from '../Assets/webp/technology/framework/nextjs.webp'

import android from '../Assets/webp/technology/app/android.webp'
import reactnative from '../Assets/webp/technology/app/reactnative.webp'
import flutter from '../Assets/webp/technology/app/flutter.webp'
import ios from '../Assets/webp/technology/app/apple.webp'
import dart from '../Assets/webp/technology/app/dart.webp'
import kotlin from '../Assets/webp/technology/app/kotlin.webp'
// import xcode from '../Assets/xcode_alt_macos_bigsur_icon_189542.png'

import html from '../Assets/webp/technology/webdevlopemnt/html.webp'
import css from '../Assets/webp/technology/webdevlopemnt/css.webp'
import php from '../Assets/webp/technology/webdevlopemnt/php.webp'
import nodejs from '../Assets/webp/technology/webdevlopemnt/node_js.webp'
import Javascript from '../Assets/webp/technology/webdevlopemnt/javascript.webp';
import typescript from '../Assets/webp/technology/webdevlopemnt/typescript.webp'
import python from '../Assets/webp/technology/webdevlopemnt/python.webp'

import mysql from '../Assets/webp/technology/server/mysql.webp'
import nosql from '../Assets/webp/technology/server/nosql.webp'
import mongodb from '../Assets/webp/technology/server/mongodb.webp'
import firebase from '../Assets/webp/technology/server/firebase.webp'
import blander from '../Assets/webp/technology/server/blender.webp'

import aws from '../Assets/webp/technology/server/aws.webp'
import googlecloud from '../Assets/webp/technology/server/googlecloud.webp'
import digitalocean from '../Assets/webp/technology/server/digital.webp'

const TechnologiesSection = () => {
    const [activeTab, setActiveTab] = useState('Design');

    const tabs = ['Design', 'Web Development', 'App Development', 'Framework', 'Database', 'Cloud'];
    const technologies = {
        'Design': [
            { id: 1, name: 'photoshop', src: photoshop, alt: 'photoshop.png' },
            { id: 2, name: 'Illustrator', src: illustrator, alt: 'Illustrator.png' },
            { id: 3, name: 'figma', src: figma, alt: 'figma text.png' },
            { id: 4, name: 'cdr', src: cdr, alt: 'cdr.png' },
            { id: 5, name: 'indesign', src: indesign, alt: 'adobe-indesign.png' },
            { id: 6, name: 'aftereffect', src: aftereffect, alt: 'after-effects.png' },
        ],
        'Web Development': [
            { id: 1, name: 'html', src: html, alt: 'wordpress.png' },
            { id: 2, name: 'css', src: css, alt: 'bootstrap.png' },
            { id: 2, name: 'nodejs', src: nodejs, alt: 'bootstrap.png' },
            { id: 6, name: 'laravel', src: laravel, alt: 'laravel.png' },
            { id: 7, name: 'vue js', src: vuejs, alt: 'vuejs.png' },
            { id: 8, name: 'angular', src: angular, alt: 'angular.png' },
            { id: 10, name: 'react js', src: reactnative, alt: 'reactjs.png' },
            { id: 9, name: 'next js', src: nextjs, alt: 'nextjs.png' },

        ],
        'App Development': [
            { id: 1, name: 'android', src: android, alt: 'android.png' },
            { id: 2, name: 'react native', src: reactnative, alt: 'react native.png' },
            { id: 3, name: 'flutter', src: flutter, alt: 'flutter.png' },
            { id: 4, name: 'ios', src: ios, alt: 'ios.png' },
            { id: 5, name: 'dart', src: dart, alt: 'dart.png' },
            { id: 6, name: 'kotlin', src: kotlin, alt: 'kotlin.png' },
        ],
        'Framework': [
            { id: 7, name: 'php', src: php, alt: 'php.png' },
            { id: 8, name: 'python', src: python, alt: 'python.png' },
            { id: 1, name: 'wordpress', src: wordpress, alt: 'php.png' },
            { id: 2, name: 'shopify', src: shopify, alt: 'php.png' },
            { id: 3, name: 'bootstrap', src: bootstrap, alt: 'bootstrap.png' },
            { id: 4, name: 'webflow', src: webflow, alt: 'nodejs.png' },
            { id: 4, name: 'framar', src: framar, alt: 'nodejs.png' },
            { id: 5, name: 'Javascript', src: Javascript, alt: 'nodejs.png' },
            { id: 6, name: 'typescript', src: typescript, alt: 'typescript.png' },
        ],
        'Database': [
            { id: 1, name: 'mysql', src: mysql, alt: 'mysql.png' },
            { id: 2, name: 'nosql', src: nosql, alt: 'mongodb.png' },
            { id: 3, name: 'mongodb', src: mongodb, alt: 'mongodb.png' },
            { id: 4, name: 'firebase', src: firebase, alt: 'firebase.png' },
            { id: 5, name: 'blender', src: blander, alt: 'blender.png' },
        ],
        'Cloud': [
            { id: 1, name: 'aws', src: aws, alt: 'aws.png' },
            { id: 2, name: 'google cloud', src: googlecloud, alt: 'googlecloud.png' },
            { id: 3, name: 'digital ocean', src: digitalocean, alt: 'digitalocean.png' },
        ]
    };

    return (
        <section className="technologies_section py-5">
            <div className="container">
                <div className="row">
                    <div className="col-12 mb-4 text-center">
                        <h1 className='fw-bold wow animate__animated animate__fadeInDown  '>Technological Mastery</h1>
                    </div>
                    <div className="col-12">
                        <ul className="nav nav-tabs justify-content-lg-center border-0">
                            {tabs.map(tab => (
                                <li className="nav-item px-1 px-lg-3 wow animate__animated animate__fadeInUp" key={tab}>
                                    <a
                                        className={`nav-link ${activeTab === tab ? 'active' : ''}`}
                                        href="#!"
                                        onClick={() => setActiveTab(tab)}
                                    >
                                        {tab}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-12 mt-4">
                        <div className="tab-content">
                            <div className="row justify-content-center flex-wrap ">
                                {technologies[activeTab].map(tech => (
                                    <div key={tech.id} className="col-6 col-md-3 col-lg-2 rounded-1 text-center d-flex wow animate__animated animate__fadeInBottomLeft">
                                        <div className="card pb-3">
                                            <div className="d-flex col-12 justify-content-center  my-3   rounded-5">
                                                <img loading='lazy' src={tech.src} alt={tech.alt} className=" border-0 img-fluid col-7 col-xxl-6 rounded-5 p-3" />
                                            </div>
                                            <span className='text-center text-uppercase' > {tech.name} </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechnologiesSection;
