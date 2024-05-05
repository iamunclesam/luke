

// eslint-disable-next-line react/prop-types
const ChatHistoryItem = ({ sender, message }) => {
  return (
    <div className={`${sender === "user" ? "text-right" : "text-left"} mb-2`}>
      <div className="flex items-center">
        {sender === "ai" && (
          <svg
            className="w-4 h-4 mr-2 text-gray-400"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C6.475 2 2 6.475 2 12C2 17.525 6.475 22 12 22C17.525 22 22 17.525 22 12C22 6.475 17.525 2 12 2ZM12 20C7.4 20 4 16.6 4 12C4 7.4 7.4 4 12 4C16.6 4 20 7.4 20 12C20 16.6 16.6 20 12 20Z"
              fill="currentColor"
            />
            <path
              d="M12 16C13.105 16 14 15.105 14 14H10C10 15.105 10.895 16 12 16ZM12 12C12.55 12 13 11.55 13 11C13 10.45 12.55 10 12 10C11.45 10 11 10.45 11 11C11 11.55 11.45 12 12 12ZM15 9H9C9 9.55 9.45 10 10 10H14C14.55 10 15 9.55 15 9Z"
              fill="currentColor"
            />
          </svg>
        )}
        <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded-lg">
          {message}
        </div>
      </div>
    </div>
  );
};

export default ChatHistoryItem;
