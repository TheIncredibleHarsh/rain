import React, { useState } from 'react';
import "./App.css";

const BgRain = () => {

    const bucketLink = "https://theincredibleharsh-rain.s3-us-west-2.amazonaws.com";

    var videos = [
        {name: "video1", url: bucketLink + "/video1.mp4"},
        {name: "video2", url: bucketLink + "/video2.mp4"},
        {name: "video3", url: bucketLink + "/video3.mp4"},
        {name: "video4", url: bucketLink + "/video4.mp4"},
        {name: "video5", url: bucketLink + "/video5.mp4"}
    ]

    // setBgVideo(video1);

    return <>
        <div className="bg-rain-container">
            <video id="bg-video" autoPlay loop muted>
                <source src={videos[Math.floor(Math.random()*5)].url} type="video/mp4" />
            </video>
        </div>
        <div className="bg-overlay" />
    </>
}

export default BgRain;