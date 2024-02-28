const textarea = document.querySelector("textarea"); 
const button = document.querySelector("button");
let isSpeaking=true;

const textToSpeech = () => {
    const synth = window.speechSynthesis;
    const text = textarea.value; 
    if(!synth.speaking && text){
    const utter = new SpeechSynthesisUtterance(text);
    synth.speak(utter);
    }
    if(text.length>50){
        if(synth.speaking && isSpeaking){
            button.innerHTML="Pause"; // it chnage the value
            synth.resume(); //it runs when synth.speaking && isSpeaking is true and if already running it has no effect
            isSpeaking=false; // as you click the value change synth.speaking && isSpeaking and it becomes false and the else loop runs.

        }else{
            button.innerHTML="Resume";
            synth.pause();
            isSpeaking=true;

        }


    }
    setInterval(()=>{
        if(!synth.speaking && !isSpeaking){
               button.innerHTML="Covert";
        }
    },2000);
};

button.addEventListener("click", textToSpeech);
