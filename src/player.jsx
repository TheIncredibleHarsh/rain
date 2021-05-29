import React, { useEffect } from 'react';
import './App.css';
import city from './assets/audio/city.wav';
import people from './assets/audio/people.wav';
import rain from './assets/audio/rain.wav';
import river from './assets/audio/river.wav';
import sea from './assets/audio/sea.wav';

const Player = () => {
    const tracks = [
        { name: "city", file: city, volume: 0.0 },
        { name: "people", file: people, volume: 0.0 },
        { name: "rain", file: rain, volume: 0.0 },
        { name: "river", file: river, volume: 0.0 },
        { name: "sea", file: sea, volume: 0.0 }
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
    </ div>
}

export default Player;