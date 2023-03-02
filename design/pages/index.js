import React from 'react';
import './styles.css';
import logo from './img/logo.png'
import code from './img/code.png'
import coder from './img/coder.webp'
import globe from './img/globe.avif'
import Footer from './../components/Footer'

class Banner extends React.Component{
    render(){
        return (
        <div class="banner">
            <Navbar />
            <div class="company-name">Find the Perfect Vacation For You</div>
            <div class="tagline">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</div>
            <a href="login">
                <div class="start-button">
                    <p> Get Started </p>
                </div>
            </a>
            {/* <img id="logo" src={logo} alt="Communipute Logo"></img> */}
        </div>
        );
    }
}

class Navbar extends React.Component{
    render(){
        return (
            <div class="navbar">
            <a class="login" href="login">
                Login
            </a>
            <a class="register" href="register">
                Register
            </a>
        </div>);
    }
}

class About extends React.Component{
    render(){
        return (<div class = "about">
                    <div class = "about-card-left" id="first-card"><img src={globe} alt="code" id="first-row-image"></img></div>
                    <div class = "about-card-right" id="second-card">
                        <h1>What is VacayFinder?</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fermentum hendrerit massa, vitae finibus justo convallis et. In tellus nisl, posuere at hendrerit vitae, dapibus non dui. Maecenas orci odio, sodales placerat felis vel, volutpat tempus est. Integer varius arcu ac eros vulputate ullamcorper. Vivamus commodo hendrerit turpis, non lobortis velit molestie sed. Phasellus tincidunt malesuada nibh at finibus. Nulla augue nibh, convallis sed pulvinar vel, venenatis at metus.                            
                        </p>   
                    </div>
                    <div class = "about-card-left" id="third-card">
                        <h1>How Does VacayFinder Work?</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fermentum hendrerit massa, vitae finibus justo convallis et. In tellus nisl, posuere at hendrerit vitae, dapibus non dui. Maecenas orci odio, sodales placerat felis vel, volutpat tempus est. Integer varius arcu ac eros vulputate ullamcorper. Vivamus commodo hendrerit turpis, non lobortis velit molestie sed. Phasellus tincidunt malesuada nibh at finibus. Nulla augue nibh, convallis sed pulvinar vel, venenatis at metus.
                        </p>
                    </div>
                    <div class = "about-card-right" id="fourth-card"><img src={code} alt="code" id="second-row-image"></img></div>
                    <div class = "about-card-left" id="fifth-card"><img src={coder} alt="coder" id="third-row-image"></img></div> 
                    <div class = "about-card-right" id="sixth-card">
                        <h1>Who can use VacayFinder?</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fermentum hendrerit massa, vitae finibus justo convallis et. In tellus nisl, posuere at hendrerit vitae, dapibus non dui. Maecenas orci odio, sodales placerat felis vel, volutpat tempus est. Integer varius arcu ac eros vulputate ullamcorper. Vivamus commodo hendrerit turpis, non lobortis velit molestie sed. Phasellus tincidunt malesuada nibh at finibus. Nulla augue nibh, convallis sed pulvinar vel, venenatis at metus.
                        </p>    
                    </div>
                </div>);
    }
}

const Home = () =>{
    return (<div><Banner /><About /></div>);
};

export default Home
