song1 = "";
song2 = "";

rightWristX = 0;
rightWristY = 0;

leftWristX = 0;
leftWristY = 0;

song1_status = "";
song2_status = "";

scoreLeftWrist = 0;
scoreRightWrist = 0;

function preload(){
     song1 = loadSound("OMW.mp3");
     song2 = loadSound("Attention.mp3");
}

function setup(){
     canvas = createCanvas(600, 500);
     canvas.position(450,300);

     video = createCapture(VIDEO);
     video.hide();

     poseNet = ml5.poseNet(video, modelLoaded);
     poseNet.on('pose', gotPoses);
}

function modelLoaded(){
     console.log('Model Loaded!');
}

function gotPoses(results){
 if(results.length > 0){
      rightWristX = results[0].pose.rightWrist.x;
      rightWristY = results[0].pose.rightWrist.y;
      console.log('Right wrist X = '+ rightWristX + 'Right Wrist Y' + rightWristY);

      leftWristX = results[0].pose.leftWrist.x;
      leftWristY = results[0].pose.leftWrist.y;
      console.log('left wrist X = '+ leftWristX + 'left Wrist Y' + leftWristY);

      console.log(results);

      scoreLeftWrist = results[0].pose.keypoints[9].score;
      scoreRightWrist = results[0].pose.keypoints[10].score;
      console.log('Score Left Wrist = ' + scoreLeftWrist + 'Score Right Wrist =' + scoreRightWrist);
 }
}

function draw(){
     image(video, 0, 0, 600, 500);

     song1_status = song1.isPlaying();
     song2_status = song2.isPlaying();

     fill("#FF0000");
     stroke("#FF0000");
}

function play(){
     song.play();
     song.setVolume(1);
     song.rate(1);
}