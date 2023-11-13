if ('webkitSpeechRecognition' in window && 'speechSynthesis' in window) {
    let SpeechRecognition = window.webkitSpeechRecognition;
    let recognition = new SpeechRecognition();
    // const textToRead = document.getElementById('textToRead');
    
    recognition.continuous = true;
    recognition.lang = 'en-US'; // Set the recognition language
    
  
    
    
  // Check if the browser supports the SpeechSynthesis API
  if ('speechSynthesis' in window) {
    const textToRead = document.getElementById('textToRead');
    const readButton = document.getElementById('readButton');
  
    // Add an event listener for the "Read Aloud" button
    readButton.addEventListener('click', () => {
      const content = textToRead.innerText; // Get the inner text of the element
  
      // Create a SpeechSynthesisUtterance object
      const utterance = new SpeechSynthesisUtterance();
      utterance.text = content;
  
      // Speak the content using the speech synthesis
      window.speechSynthesis.speak(utterance);
    });
  } else {
    // SpeechSynthesis API not supported
    console.error('SpeechSynthesis API is not supported in this browser.');
  }
  
  }
  