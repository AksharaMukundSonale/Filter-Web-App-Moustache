moustache_x = 0;
moustache_y = 0;

function preload(){
    moustache = loadImage('https://i.postimg.cc/3x3QzSGq/m.png')
}

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPose);
}

function draw(){
    image(video,0,0,300,300);
    image(moustache,moustache_x,moustache_y,60,45);
}

function take_snapshot()
{
    save('myMoustacheFilter.png');
}

function modelLoaded(){
    console.log('poseNet is initialized');
}

function gotPose(results){
    if(results.length > 0){
        console.log(results);
        moustache_x = results[0].pose.nose.x - 25;
        moustache_y = results[0].pose.nose.y + 5;
    }
}