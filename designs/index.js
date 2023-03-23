import React from 'react';
import './styles.css';
import logo from './img/paper-plane.png'

class Banner extends React.Component{
    render(){
        return (
        <div className="banner">
            <div className='text'>
                <div className='header'>
                    <h1>getaway</h1>
                    <img src={logo} id = "logo"></img>
                </div>
                <h2>Find your perfect vacation</h2>
                <p>Choose between a couple pairs of vacation spots and we'll give you a curated list of vacations you'll love!</p>

                <div className='buttons'>
                    <button id="start">Get Started ➜</button>
                    <button id="learn">Learn More</button>
                </div>
            </div>
    
            <div className='splash-image'></div>


        </div>
        );
    }
}

const Home = () =>{
    return (<div><Banner /></div>);
};

export default Home
