import React from 'react';
import './App.css';
import Player from './player.jsx'

const Console = () => {
    return <>
        <div className="console-container">
            <div className="console"> 
                <Player />
            </div>
        </div>
    </>
}

export default Console;