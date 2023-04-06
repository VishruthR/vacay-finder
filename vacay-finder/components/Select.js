import React from 'react';

class Navbar extends React.Component{
    render(){
        return (
            <div>
            <div className="select-container">
                <div className="select-left">
                    <div className='select-button-1'>
                        <h2>Japan</h2>
                        <button id="button-1">Select</button>
                    </div>
                </div>
                <div className="select-right">
                    <div className='select-button-2'>
                        <h2>Paris</h2>
                        <button id="button-2">Select</button>
                    </div>

                </div>
            </div>
            </div>
            );
    }
}

export default Navbar