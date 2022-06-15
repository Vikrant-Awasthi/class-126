first_song = "";
second_song = "";

song1_status = "";
song2_status = "";
rightWristX = 0;
rightWristY = 0;
leftWristX = 0;
leftWristY = 0;
scorerightWrist = 0;
scoreleftWrist = 0;

function preload(){
    first_song = loadSound("Song1.mp3");
    second_song = loadSound("Song2.mp3");
}

function setup(){
    canvas = createCanvas(600,530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,600,530);
}

