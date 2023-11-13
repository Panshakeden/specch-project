

if ('webkitSpeechRecognition' in window) {
  const recognition = new webkitSpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.lang = 'en-US';

  let activeInput = null;
  document.getElementById('name').addEventListener('focus', () => {
    activeInput = 'name';
  });
  document.getElementById('email').addEventListener('focus', () => {
    activeInput = 'email';
  });
  document.getElementById('password').addEventListener('focus', () => {
    activeInput = 'password';
  });



  recognition.onresult = (e) => {
    let speechResult = e.results[0][0].transcript;
  
    switch (speechResult.toLowerCase().trim()) {
      // ... Your recognized commands ...

    //   case 'check':
    //   // Navigate to the check mails section
    //   window.location.href = '/checkMail';
    //   break;
    // case 'compose':
    //   // Navigate to the compose section
    //   window.location.href = '/';
    //   break;
      
      // Navigate to the exist section
      case 'sign in':
        window.location.href='/login'
        break;

        case 'sign up':
          window.location.href='/register'
          break;
          
        case 'name':
          window.location.href='#name'
          break;
                 
        // Navigate to the inbox section
        case 'inbox':
          window.location.href='/inbox'
          break;

          case 'password' :
          window.location.href='#password'

          break;

          case 'email':
          window.location.href='#email'
          break;

          case 'subject':
          window.location.href='#subject'
          break;

          case 'create':
          window.location.href='#create'
          break;

          case 'reset':
            document.getElementById(activeInput).value =''
          break;

            case 'register':
        document.getElementById('signButton').click();
          break;

          case 'log':
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
} 

else {
console.error('Web Speech API is not supported in this browser.');
}