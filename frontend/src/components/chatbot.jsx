import React, { useState } from "react";
import { findResourceReply } from "../data/chatbotData";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const appendMessage = (content, user = false) => {
    setMessages((prev) => [...prev, { content, user }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    appendMessage(input, true);
    const reply = findResourceReply(input);
    setTimeout(() => appendMessage(reply, false), 600);
    setInput("");
  };

  return (
    <>
      {/* Bubble */}
      {!open && (
        <div
          id="chatbot-bubble"
          className="chatbot-bubble"
          onClick={() => setOpen(true)}
        >
          <span role="img" aria-label="chat">💬</span>
        </div>
      )}

      {/* Chat Container */}
      {open && (
        <div id="chatbot-container" className="chatbot-container">
          <div className="chatbot-header">
            <span>RealConnect Bot</span>
            <button aria-label="Close" onClick={() => setOpen(false)}>×</button>
          </div>

          <div id="chatbot-messages" className="chatbot-messages">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`chatbot-message${m.user ? " user" : ""}`}
                dangerouslySetInnerHTML={{ __html: m.content }}
              />
            ))}
          </div>

          <form onSubmit={handleSubmit} className="chatbot-form">
            <input
              type="text"
              placeholder="Ask for resources…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              required
              autoComplete="off"
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </>
  );
}
