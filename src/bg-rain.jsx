import React, { useState } from 'react';
import "./App.css";
import video1 from './assets/video/bg-video-1.mp4';
import video2 from './assets/video/bg-video-2.mp4';
import video3 from './assets/video/bg-video-3.mp4';
import video4 from './assets/video/bg-video-4.mp4';
import video5 from './assets/video/bg-video-5.mp4';

const BgRain = () => {

    // const [bgVideo, setBgVideo] = useState();

    var bgVideos = [video1, video2, video3, video4, video5];

    // setBgVideo(video1);

    return <>
        <div className="bg-rain-container">
            <video id="bg-video" autoPlay loop muted>
                <source src={bgVideos[Math.ceil(Math.random()*6)]} type="video/mp4" />
            </video>
        </div>
        <div className="bg-overlay" />
    </>
}

export default BgRain;