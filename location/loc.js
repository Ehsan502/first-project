
// Geo location APi


function userGeoLocation() {
    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(
        (location) => {
        console.log(location.coords.latitude);
        console.log(location.coords.longitude);
    },
    (error) => {
        console.log(error);
    }
);
    } else {
        alert("Browser location not supported.");
    }
}

userGeoLocation();

async function getUserMedia() {
    if(navigator.getUserMedia) {
        const videoRef = document.querySelector("cam");
        const res = await navigator.getUserMedia({
            audio: true,
            video: {width:1200, height:720}
        },
    (stream) => {
        const video = document.querySelector("video");
        video.srcObject = stream;
        video.onloadedmetadata = (e) => {
            video.play();
        }
    
    },
    (err) => {
        console.error(`The following error occurred: ${err.name}`);
    }
);

    console.log(videoRef);         
    } else {
        alert("Browser location not supported")
    }
}

    // getUserMedia();

async function getWeather() {
    const inputRef = document.querySelector(".cityName");
    const resultDiv = document.querySelector(".result");

    try {
      const res = await fetch(
        `https://p2pclouds.up.railway.app/v1/learn/weather?city=${inputRef.value}`,
        {
            method: "GET",
        }
      );
      const weather = await res.json();
      console.log(weather);
    } catch(err) {
        console.log(err);
    }
}

// getWeather();

// const canvasRef = document.getElementById("myCanvas");
// var ctx = canvasRef.getContext("2d");
// ctx.moveTo(0, 0);
// ctx.lineTo(200, 100);
// ctx.stroke();

// Making Circle
const canvasRef = document.getElementById("myCanvas");
var ctx = canvasRef.getContext("2d");
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2* Math.PI);
ctx.stroke();







