import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import "../../AiVoice.css"; // Import CSS for styling
import Chat from "./chat";

const AiVoice = () => {
  const [userInput, setUserInput] = useState("");
  const [isSpeaking, setIsSpeaking] = useState(false); // State to track speaking state
  const [chatHistory, setChatHistory] = useState([]);

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const GEMINI_API_KEY = "AIzaSyA7sNNnlwg5lWUs1CJv4jlqsz3QEOgyrLA";
  const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

  const run = async (event) => {
    event.preventDefault();
    try {
      // For text-only input, use the gemini-pro model
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });

      const prompt = userInput;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = await response.text();
      synthesizeVoice(text);
      // Add user input and AI response to chat history
      setChatHistory((prevChatHistory) => [
        ...prevChatHistory,
        { sender: "user", message: userInput },
        { sender: "ai", message: text },
      ]);

      // Clear user input after submitting
      setUserInput(""); // Call synthesizeVoice function with the response text
      console.log(text);
    } catch (error) {
      const errorMessage =
        "Cannot process your request at the moment. Unclesam is fixing me!";

      // Add the error message to the chat history
      setChatHistory((prevChatHistory) => [
        ...prevChatHistory,
        { sender: "system", message: errorMessage }, // Display as a system message
      ]);

      // Synthesize the error message
      synthesizeVoice(errorMessage);
    }
  };

  const synthesizeVoice = (text) => {
    setIsSpeaking(true); // Set speaking state to true when synthesizing voice

    // Create a new SpeechSynthesisUtterance
    let utterance = new SpeechSynthesisUtterance(text);

    // Set properties (optional)
    utterance.volume = 1; // 0 to 1
    utterance.rate = 1; // 0.1 to 10
    utterance.pitch = 1; // 0 to 2

    // Speak the utterance
    window.speechSynthesis.speak(utterance);

    // Reset speaking state after speech synthesis completes
    utterance.onend = () => {
      setIsSpeaking(false);
    };
  };

  return (
    <div>
      <div className="fixed bottom-0 w-full">
        <form>
          <label htmlFor="chat" className="sr-only">
            Your message
          </label>
          <div className="flex items-center px-3 py-2 bg-gray-50 dark:bg-gray-700">
            <textarea
              id="chat"
              rows="1"
              className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Your message..."
              value={userInput}
              onChange={handleInputChange}
            ></textarea>
            <button
              type="submit"
              className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
              onClick={run}
            >
              <svg
                className={`w-5 h-5 rotate-90 rtl:-rotate-90 ${
                  isSpeaking ? "animate-pulse" : "" // Apply pulse animation if speaking
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 20"
              >
                <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
              </svg>
              <span className="sr-only">Send message</span>
            </button>
          </div>
        </form>
      </div>

      {/* Chat history */}
      <div className="mt-4 px-3">
        {chatHistory.map((message, index) => (
          <Chat
            key={index}
            sender={message.sender}
            message={message.message}
            isError={message.sender === "system"} // Check if the message is an error
          />
        ))}
      </div>
    </div>
  );
};

export default AiVoice;
