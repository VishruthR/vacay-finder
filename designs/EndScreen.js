import React from 'react';

class EndScreen extends React.Component{
    render(){
        return (
            <div className="banner">
            <div className='text'>

                <h2 className='fadeinup'>The results are in</h2>
                <p className='fadeinup'>Here's your curated list of vacation hotspots we know you'll love!</p>
                <div className='endScreenList'>
                    <ol>
                        <li className="endList" id="first-elem">Paris, France</li>
                        <li className="endList" id="second-elem">Quebec, Canada</li>
                        <li className="endList" id="third-elem">Las Vegas, USA</li>
                        <li className="endList" id="fourth-elem">Barcelona, Spain</li>
                        <li className="endList" id="fifth-elem">Tokyo, Japan</li>
                    </ol>
                </div>

                <div className='buttons'>
                    <button id="start">Try It Again</button>
                    <button id="learn">Return Home</button>
                </div>
            </div>
    
            <div className='splash-image' id="end-splash"></div>

            
            </div>
            
            );
    }
}

export default EndScreen