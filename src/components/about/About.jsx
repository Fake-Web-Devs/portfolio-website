import React from 'react';
import './about.scss';
import portfolio from '../../assets/portfolio.jpg';
import FadeIn from 'react-fade-in';
import ImageFadeIn from 'react-image-fade-in';

export default function About() {
    return (
        <div className="about" id="about">
            <FadeIn delay='300' transitionDuration='900'>
            <div className="top">  
                <div className="title">
                    <h1>ABOUT ME</h1>
                </div>
            </div>
            <div className="bottom">
                <div className="left">
                    <div className="wrapper" id="wrapper">
                        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
                    </div>       
                </div>
                <div className="right">
                    <div className="imgContainer">
                        <ImageFadeIn src={portfolio} alt="portfolio" style={{ maxWidth: "40vh", maxHeight: "60vh" }}/>
                    </div> 
                </div>      
            </div>   
            </FadeIn>               
        </div>
        
       
    )
}
