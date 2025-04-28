export default function ChatHistory({ messages }) {
    return (
      <div className="p-4 bg-gray-100 rounded-lg">
        <h2 className="text-lg font-semibold mb-2">Chat History</h2>
        <div className="max-h-40 overflow-y-auto">
          {messages.map((msg, index) => (
            <div key={index} className="text-sm">
              <strong>{msg.sender === 'user' ? 'You' : 'Bot'}:</strong> {msg.text}
            </div>
          ))}
        </div>
      </div>
    );
  }