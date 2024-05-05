import { useEffect, useState } from "react";
// import geminiAi from "../../helpers/generateAi";
import { GoogleGenerativeAI } from "@google/generative-ai";


const AiVoice = () => {
  const [userInput, setUserInput] = useState("");

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const GEMINI_API_KEY = "AIzaSyA7sNNnlwg5lWUs1CJv4jlqsz3QEOgyrLA"
  const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

  async function run(event) {
    event.preventDefault();
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});
  
    const prompt = userInput
  
    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();
    synthesizeVoice(text)
    console.log(text);
  }

  // useEffect(() => {
  //   run();
  // })


  const synthesizeVoice = (response) => {

    let text = response

    // Create a new SpeechSynthesisUtterance
    let utterance = new SpeechSynthesisUtterance(text);
    
    // Set properties (optional)
    utterance.volume = 1; // 0 to 1
    utterance.rate = 1; // 0.1 to 10
    utterance.pitch = 1; // 0 to 2
    
    // Speak the utterance
    window.speechSynthesis.speak(utterance);
}

  return (
    <div>
      <div className="flex items-center justify-center h-96">
      <form>
                <label
                    htmlFor="search"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                    Search
                </label>
                <div className="relative">
                    <input
                        type="search"
                        id="search"
                        className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search"
                        required
                        value={userInput}
                        onChange={handleInputChange}
                    />
                    <button
                        type="submit"
                        onClick={run}
                        className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Send
                    </button>
                </div>
            </form>
       
      </div>
    </div>
  );
};

export default AiVoice;
