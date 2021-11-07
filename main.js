var SpeechRecognition = window.webkitSpeechRecognition;
var Recognition = new  SpeechRecognition(); 

function start()
{
    document.getElementById("textbox").innerHTML="";
    Recognition.start();
}

Recognition.onresult = function(event){
    console.log(event);
    var Content = event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("textbox").innerHTML=Content;
    speak();
}

function speak()
{
    var synth = window.speechSynthesis;
    var speakData = document.getElementById("textbox").value;
    var utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);
    Webcam.attach(Camera);
}

Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
});
Camera = document.getElementById("camera"); 