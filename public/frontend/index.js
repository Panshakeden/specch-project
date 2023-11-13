

if ('webkitSpeechRecognition' in window) {
  const recognition = new webkitSpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.lang = 'en-US';

  // setting text-to-speech on input field
  let activeInput = null;
  const welcomeMessage = new SpeechSynthesisUtterance('say subject');
  const welcomeReceive = new SpeechSynthesisUtterance(' receiver');
  const welcomeCompose = new SpeechSynthesisUtterance('compose message');

  document.getElementById('subject').addEventListener('focus', () => {
    console.log('focused on subject');
    window.speechSynthesis.speak(welcomeMessage);
    activeInput = 'subject';
  });

  document.getElementById('receive').addEventListener('focus', () => {
    window.speechSynthesis.speak(welcomeReceive);
    activeInput = 'receive';
  });
  document.getElementById('create').addEventListener('focus', () => {
    window.speechSynthesis.speak(welcomeCompose);
    activeInput = 'create';
  });
 

  recognition.onresult = (e) => {
    let speechResult = e.results[0][0].transcript;
  
    switch (speechResult.toLowerCase().trim()) {
      // ... Your recognized commands ...

      case 'check':
      // Navigate to the check mails section
      window.location.href = '/checkMail';
      break;
    case 'compose':
      // Navigate to the compose section
      window.location.href = '/';
      break;
      
      // Navigate to the exist section
      case 'sign in':
        window.location.href='/login'
        break;

        // Navigate to the register section
        case 'register':
          window.location.href='/register'
          break;
          
        case 'name':
          window.location.href='#name'
          break;
                 
        // Navigate to the inbox section
        case 'inbox':
          window.location.href='/inbox'
          break;
          
         // getting the password id
          case 'password' :
          window.location.href='#password'
         
          // navigate to the quit section
          break;
          case 'quit' :
          window.location.href='/command'

          break;
           
          // getting the email id
          case 'email':
          window.location.href='#email'
          break;
         // getting subject id
          case 'subject':
          window.location.href='#subject'
          break;
         // getting create id
          case 'create':
          window.location.href='#create'
          break;
          // reset input field
          case 'reset':
            document.getElementById(activeInput).value =''
          break;

          case 'send':
            // Trigger the form submission
            document.getElementById('submitButton').click();
            break;

            case 'sign up':
        document.getElementById('signButton').click();
          break;

          case 'login':
            document.getElementById('buttonSign').click();
            break;
          
          // case 'send':
          // window.location.href= Submit();
          // break;

          case 'receive':
          window.location.href='#receive';
          const receiveInput = document.getElementById('receive');
          receiveInput.value = receiveInput.value.trim() + '@gmail.com';
          break;


  
      default:
        // Set the value of the currently focused input field to the unrecognized word
        if (activeInput) {
          document.getElementById(activeInput).value = speechResult;
        }
        break;
    }
  };


  recognition.onstart = () => {
    // Interval for continuous listening
    let counter = 0;
    let interval = setInterval(function () {
      counter++;
    }, 500000);

    recognition.onend = function () {
      if (counter <= 5 * 60) recognition.start();
      else clearInterval(interval);
    };
  };

  recognition.start();
} else {
console.error('Web Speech API is not supported in this browser.');
}


































// if ('webkitSpeechRecognition' in window) {
//   // Create SpeechRecognition objects for each input field
//   const recognition3 = new webkitSpeechRecognition();
//   const recognition4 = new webkitSpeechRecognition();
//   const recognition5 = new webkitSpeechRecognition();

//   // Set recognition options
//   recognition3.continuous = false; // Continuous listening
//   recognition3.interimResults = false;
//   recognition3.lang = 'en-US';

//   recognition4.continuous = false; // Continuous listening
//   recognition4.interimResults = false;
//   recognition4.lang = 'en-US';

//   recognition5.continuous = false; // Continuous listening
//   recognition5.interimResults = false;
//   recognition5.lang = 'en-US';

//   // Determine which input is currently active
//   let activeInput = null;

//   document.getElementById('receive').addEventListener('focus', () => {
//       console.log('Input Field receive focused');
//     activeInput = 'receive';

//     // recognition3.start();
//   });

//   document.getElementById('subject').addEventListener('focus', () => {
//       console.log('Input Field subject focused');
//     activeInput = 'subject';

//     // recognition4.start();
//   });

//   document.getElementById('create').addEventListener('focus', () => {
//       console.log('Input Field create focused');
//     activeInput = 'create';

//     // recognition5.start();
//   });


//   recognition3.onstart = () => {
//     // action.innerHTML = "Listening...";


//     //interval

//     recognition3.onend = function() {
//      recognition3.start();
//     }

//     let counter = 0;
// let interval = setInterval(function(){
//       counter++;
// },500000)


// recognition3.onend = function() {
//  if(counter <= 5 * 60)
//   recognition3.start();
//  else
//    clearInterval(interval)
// }
    
//  }



//  //recognition4
//  recognition4.onstart = () => {
//   // action.innerHTML = "Listening...";


//   //interval

//   recognition4.onend = function() {
//     recognition4.start();
//   }

//   let counter = 0;
// let interval = setInterval(function(){
//     counter++;
// },500000)


// recognition4.onend = function() {
// if(counter <= 5 * 60)
// recognition4.start();
// else
//  clearInterval(interval)
// }
  
// }



// recognition5.onstart = () => {
//   // action.innerHTML = "Listening...";


//   //interval

//   recognition5.onend = function() {
//     recognition5.start();
//   }

//   let counter = 0;
// let interval = setInterval(function(){
//     counter++;
// },500000)


// recognition5.onend = function() {
// if(counter <= 5 * 60)
// recognition5.start();
// else
//  clearInterval(interval)
// }
  
// }


//   // Add event listeners for when speech is recognized
//   recognition3.onresult = (event) => {
//     const speechResult = event.results[0][0].transcript;

//     if (activeInput === 'receive') {
//       document.getElementById('receive').value = speechResult;
//     }

//     if (speechResult.toLowerCase() === 'send') {
//       document.getElementById('submitButton').click(); // Trigger form submission
//     }
//   };

//   recognition4.onresult = (event) => {
//     const speechResult = event.results[0][0].transcript;

//     if (activeInput === 'subject') {
//       document.getElementById('subject').value = speechResult;
//     }

//     if (speechResult.toLowerCase() === 'send') {
//       document.getElementById('submitButton').click(); // Trigger form submission
//     }
//   };

//   recognition5.onresult = (event) => {
//     const speechResult = event.results[0][0].transcript;

//     if (activeInput === 'create') {
//       document.getElementById('create').value = speechResult;
//     }

//     if (speechResult.toLowerCase() === 'send') {
//       document.getElementById('submitButton').click(); // Trigger form submission
//     }
//   };

//   // Start continuous listening for all recognition instances
//   recognition3.start();
//   recognition4.start();
//   recognition5.start();
 
 
// } else {
//   // Web Speech API not supported
//   console.error('Web Speech API is not supported in this browser.');
// }

















