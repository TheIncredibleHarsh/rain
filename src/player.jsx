import React, { useEffect } from 'react';
import './App.css';
import city from './assets/audio/city.wav';
import people from './assets/audio/people.wav';
import rain from './assets/audio/rain.wav';
import river from './assets/audio/river.wav';
import sea from './assets/audio/sea.wav';

const Player = () => {
    const tracks = [
        { name: "City", file: city, volume: 0.0 },
        { name: "People", file: people, volume: 0.0 },
        { name: "Rain", file: rain, volume: 0.7 },
        { name: "River", file: river, volume: 0.0 },
        { name: "Sea", file: sea, volume: 0.0 }
    ]

    useEffect(() => {
        tracks.forEach((track)=>{
            document.getElementsByClassName(track.name+"_element")[0].volume = track.volume;
        });
    }, [])

    const changeVolume = (event) => {
        // let audioInstance = document.getElementById
        var targetVolume = event.target.value;
        event.target.parentElement.parentElement.firstChild.volume = targetVolume;
    }

    const ToggleFullScreen = () => {
        if(document.fullscreenElement === null){
            document.querySelector("body").requestFullscreen()
        } else{
            document.exitFullscreen()
        }
    }

    return <div className="players-container">
        {tracks.map((track) => {
            return <div className="single-player-container">
                <audio volume="0.1" autoPlay loop className={track.name+"_element"}>
                    <source src={track.file} />
                </audio>
                <div className="name-container">
                    <span>{track.name}</span>
                </div>
                <div className="controls-container">
                    <input type="range" min="0" max="1" step="0.1" defaultValue={track.volume} onChange={(event) => changeVolume(event)}/>
                </div>
            </div>
        })}
        <div className="full-screen-button">
            <button onClick={ToggleFullScreen}>Toggle full screen</button>
        </div>
    </ div>
}

export default Player;
