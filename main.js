nosex = 0;
nosey = 0;
leftwristx = 0;
rightwristx = 0;
diference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 450);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('posenetinicialisando');
}
function gotPoses(results){
    if (results.length > 0){
        console.log(results);
        
        nosex = results[0].pose.nose.x;
        nosey = results[0].pose.nose.y;
        console.log("nosex = "+nosex+" nosey = "+nosey);

        leftwristx = results[0].pose.leftWrist.x;
        rightwristx = results[0].pose.rightWrist.x;
        diference = floor(leftwristx - rightwristx);
    }
}

function draw(){
    background('#969A97');
    fill('#F90093');
    stroke('#F90093');
    square(nosex, nosey, diference);

}