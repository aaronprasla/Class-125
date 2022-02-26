nosex = 0;
nosey = 0;

lwx = 0;
lwy = 0;

rwx = 0;
rwy = 0;

distance = 0;

function setup() {
	canvas = createCanvas(550, 550);
	canvas.position(560, 150);

	video = createCapture(VIDEO);
	video.size(550, 500);

	posenet = ml5.poseNet(video, modelLoaded);
	posenet.on('pose', gotResults);
}

function draw() {
	background('gray');

	fill('blue');
	square(nosex, nosey, distance);

}

function modelLoaded() {
	console.log('model loaded');
}
//Don't forget to ctrl + f for the word result.
function gotResults(results) {
	nosex = results[0].pose.nose.x;
	nosey = results[0].pose.nose.y;

	rwx = results[0].pose.rightWrist.x;
	lwx = results[0].pose.leftWrist.x;

	distance = Math.floor(Math.abs(rwx - lwx));

	document.getElementById('widthHeightSpan').innerHTML = 'The width and height of the square is = ' + distance + 'px';
}