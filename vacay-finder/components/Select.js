import React from 'react';

var chosen = 0;
var lists = [];

function ChooseFirst(){
    if(chosen === 10) return;
    chosen++;
    var first = document.getElementById("first-option").innerHTML;
    lists.push(first)
    console.log("Selected "+first)
    if(chosen === 10){
        console.log(lists)
        // SendData();
    }
}

function ChooseSecond(){
    if(chosen === 10) return;
    chosen++;
    var second = document.getElementById("second-option").innerHTML;
    lists.push(second)
    console.log("Selected "+second)
    if(chosen === 10){
        console.log(lists)
    }
}

class Navbar extends React.Component{
    render(){
        return (
            <div>
            <div className="select-container">
                <div className="select-left">
                    <div className='select-button-1'>
                        <h2 id="first-option">Japan</h2>
                        <button id="button-1" onClick={ChooseFirst}>Select</button>
                    </div>
                </div>
                <div className="select-right">
                    <div className='select-button-2'>
                        <h2 id="second-option">Paris</h2>
                        <button id="button-2" onClick={ChooseSecond}>Select</button>
                    </div>

                </div>
            </div>
            </div>
            );
    }
}

export default Navbar
