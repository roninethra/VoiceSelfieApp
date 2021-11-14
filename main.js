var SpeechRecognition= window.webkitSpeechRecognition;
var Recognition= new SpeechRecognition();

function startfunction(){
document.getElementById("textbox").innerHTML= "";
Recognition.start();
}
Recognition.onresult= 
function result(event){
console.log(event);
content= event.results[0][0].transcript;
document.getElementById("textbox").innerHTML= content;
if(content== 'take my selfie'){
    speak();
}

}

function speak(){
    var Synth= window.speechSynthesis;
    var data= document.getElementById("textbox").value;
    var speech_data= "Taking Selfie in five seconds";
var Utter= new SpeechSynthesisUtterance(speech_data);
Synth.speak(Utter);
Webcam.attach(camera);
setTimeout(
function(){
    takeselfie();
    save();
}, 5000
)
}

function takeselfie(){
Webcam.snap(
    function (data_uri){
        document.getElementById("result").innerHTML= "<img id= 'selfie_img' src= '"+data_uri+"'>"
    }
)
}

function save(){
    var imagelink= document.getElementById("imagelink");
    var image= document.getElementById("selfie_img").src;
    imagelink.href= image;
    imagelink.click();
}
var camera= document.getElementById("camera");
Webcam.set({
    width: 300, height: 200, image_format: "jpeg", jpeg_quality: 100
})
