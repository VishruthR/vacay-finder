import React from 'react';

// Add CSS!

class Choose extends React.Component{
    render(){
        return (
        <div className="vote">
            <div className='text'>
                <h2>Choose your ideal destination!</h2>

                <div className='buttons'>
                    <button id="choice-1"><img></img></button>
                    <p>VS</p>
                    <button id="choice-2"><img></img></button>
                </div>
            </div>
        </div>
        );
    }
}

const Vote = () =>{
    return (<div><Choose /></div>);
};

export default Vote