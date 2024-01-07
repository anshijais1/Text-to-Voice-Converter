let speech=new SpeechSynthesisUtterance();
const but=document.querySelector(".but");
but.addEventListener("click",()=>{
    console.log("clicked");
speech.text=document.querySelector("#text").value;
window.speechSynthesis.speak(speech);

});
let voices=[];
let select=document.querySelector("select");
window.speechSynthesis.onvoiceschanged=()=>{
    voices=window.speechSynthesis.getVoices();
    speech.voice=voices[0];
    voices.forEach((voice,i ) => (select.options[i]=new Option(voice.name,i))
)};