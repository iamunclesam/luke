// import axios from "axios";

const textToSpeech = async (text) => {
 

  const options = {
    method: 'POST',
    headers: {
      'xi-api-key': '938f0f4c2a487ef242729d3dec491c23',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      text: `${text}`,
      voice_settings: {
        stability: 1,
        similarity_boost: 1
      }
    })
  };

  try {
    const response = await fetch('https://api.elevenlabs.io/v1/text-to-speech/21m00Tcm4TlvDq8ikWAM', options);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const audioBlob = await response.blob();
    const audioUrl = URL.createObjectURL(audioBlob);
    // Now you can use the audio URL to play the audio
    console.log("Audio URL:", audioUrl);
    
    // Example: play the audio using an HTML audio element
    const audio = new Audio(audioUrl);
    audio.play();
  } catch (error) {
    console.error('Error:', error);
  }
};

export default textToSpeech;
