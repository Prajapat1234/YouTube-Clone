// import React from 'react'

// export default function Speech1() {


//     const recognition = new webkitSpeechRecognition() || new SpeechRecognition();
//     recognition.lang = 'en-US';
//     recognition.interimResults = true;
    
//     recognition.onresult = (event) =>{
//         const transcript = event.results[0][0].transcript;
//         console.log(transcript);
//     };
    
//     recognition.onend =()=> {
//         console.log("Speech end");
    
//     };
    
//     function fun(){
//         console.log("listening....")
//         recognition.start();
//     }




//     return (
//     <div>
//       <button onClick={()=>fun()}>add</button>
//     </div>
//   )
// }
