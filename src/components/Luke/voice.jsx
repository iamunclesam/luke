import { useState, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import "../../AiVoice.css"; // Import CSS for styling
import Chat from "./chat";
import textToSpeech from "../../helpers/textToSpeech";

const AiVoice = () => {
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [audioUrl, setAudioUrl] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const GEMINI_API_KEY = "AIzaSyA7sNNnlwg5lWUs1CJv4jlqsz3QEOgyrLA";
  const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

  const run = async (event) => {
    setLoading(false);
    event.preventDefault();
    try {
      // For text-only input, use the gemini-pro model
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });

      const chat = model.startChat({
        history: [
          {
            role: "user",
            parts: [{ text: "Hello, I am a techie" }],
          },
          {
            role: "model",
            parts: [
              { text: "Great to meet you. What would you like to know?" },
            ],
          },
        ],
        generationConfig: {
          maxOutputTokens: 100,
        },
      });

      const prompt = userInput;

      const result = await chat.sendMessage(prompt);
      const response = result.response;
      const text = response.text();
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
      setLoading(true);
    } catch (error) {
      const errorMessage =
        "Cannot process your request at the moment. Uncle sam will fix it soon!";

      // Add the error message to the chat history
      setChatHistory((prevChatHistory) => [
        ...prevChatHistory,
        { sender: "system", message: errorMessage }, // Display as a system message
      ]);

      // Synthesize the error message
      synthesizeVoice(errorMessage);
    }
  };

  async function synthesizeVoice(text) {
    try {
      const newAudioUrl = await textToSpeech(text);
      setAudioUrl(newAudioUrl);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  useEffect(() => {
    // Cleanup function to revoke the object URL when the component unmounts
    return () => {
      if (audioUrl) {
        URL.revokeObjectURL(audioUrl);
      }
    };
  }, [audioUrl]);

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
              {isLoading ? (
                <svg
                  className="w-5 h-5 rotate-90 rtl:-rotate-90"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 20"
                >
                  {" "}
                  <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="2" r="0" fill="currentColor">
                    <animate
                      attributeName="r"
                      begin="0"
                      calcMode="spline"
                      dur="1s"
                      keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                      repeatCount="indefinite"
                      values="0;2;0;0"
                    />
                  </circle>
                  <circle
                    cx="12"
                    cy="2"
                    r="0"
                    fill="currentColor"
                    transform="rotate(45 12 12)"
                  >
                    <animate
                      attributeName="r"
                      begin="0.125s"
                      calcMode="spline"
                      dur="1s"
                      keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                      repeatCount="indefinite"
                      values="0;2;0;0"
                    />
                  </circle>
                  <circle
                    cx="12"
                    cy="2"
                    r="0"
                    fill="currentColor"
                    transform="rotate(90 12 12)"
                  >
                    <animate
                      attributeName="r"
                      begin="0.25s"
                      calcMode="spline"
                      dur="1s"
                      keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                      repeatCount="indefinite"
                      values="0;2;0;0"
                    />
                  </circle>
                  <circle
                    cx="12"
                    cy="2"
                    r="0"
                    fill="currentColor"
                    transform="rotate(135 12 12)"
                  >
                    <animate
                      attributeName="r"
                      begin="0.375s"
                      calcMode="spline"
                      dur="1s"
                      keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                      repeatCount="indefinite"
                      values="0;2;0;0"
                    />
                  </circle>
                  <circle
                    cx="12"
                    cy="2"
                    r="0"
                    fill="currentColor"
                    transform="rotate(180 12 12)"
                  >
                    <animate
                      attributeName="r"
                      begin="0.5s"
                      calcMode="spline"
                      dur="1s"
                      keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                      repeatCount="indefinite"
                      values="0;2;0;0"
                    />
                  </circle>
                  <circle
                    cx="12"
                    cy="2"
                    r="0"
                    fill="currentColor"
                    transform="rotate(225 12 12)"
                  >
                    <animate
                      attributeName="r"
                      begin="0.625s"
                      calcMode="spline"
                      dur="1s"
                      keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                      repeatCount="indefinite"
                      values="0;2;0;0"
                    />
                  </circle>
                  <circle
                    cx="12"
                    cy="2"
                    r="0"
                    fill="currentColor"
                    transform="rotate(270 12 12)"
                  >
                    <animate
                      attributeName="r"
                      begin="0.75s"
                      calcMode="spline"
                      dur="1s"
                      keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                      repeatCount="indefinite"
                      values="0;2;0;0"
                    />
                  </circle>
                  <circle
                    cx="12"
                    cy="2"
                    r="0"
                    fill="currentColor"
                    transform="rotate(315 12 12)"
                  >
                    <animate
                      attributeName="r"
                      begin="0.875s"
                      calcMode="spline"
                      dur="1s"
                      keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                      repeatCount="indefinite"
                      values="0;2;0;0"
                    />
                  </circle>
                </svg>
              )}

              <span className="sr-only">Send message</span>
            </button>
          </div>
        </form>
      </div>
      {/* 
      {audioUrl && (
        <audio controls autoPlay>
          <source src={audioUrl} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      )} */}

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
