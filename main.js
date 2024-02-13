function preload(){
  Mustache=loadImage("https://i.postimg.cc/1RfJWtvQ/Mustache.jpg")
}

function setup(){
   canvas = createCanvas(300, 300);
   canvas.center()
   video = createCapture(VIDEO)
   video.size(300, 300)
   video.hide()

   poseNet = ml5.poseNet(video, modelloaded)
   poseNet.on('pose', got_poses)
}

noseX=0;
noseY=0;

function draw(){
  image(video, 0, 0, 300, 300)
  //fill(255, 0, 0)
  //stroke(255, 0, 0)
   //circle(noseX, noseY, 20)
   image(Mustache, noseX, noseY, 30, 30)
}

function modelloaded(){
  console.log("Model has been loaded into the server.")
}

function got_poses(results){
  if(results.length >0){
     console.log(results)
     noseX=results[0].pose.nose.x
     noseY=results[0].pose.nose.y
     console.log("nosex= " + noseX)
     console.log("nosey= " + noseY)
  }
}

 function takeSnapshot(){
    save("png.png") 
 }