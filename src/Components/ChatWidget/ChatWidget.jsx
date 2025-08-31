import React, { useState, useRef } from "react";
import "./ChatWidget.css";

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef();
  const messagesRef = useRef();

  const appendMessage = (msg, sender) => {
    setMessages((prev) => [...prev, { msg, sender }]);
    setTimeout(() => {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }, 100);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text && !file) return;

    const formData = new FormData();
    if (text) {
      formData.append("text", text);
      appendMessage(text, "user");
    }
    if (file) {
      formData.append("file", file);
      appendMessage(`📎 File: ${file.name}`, "user");
    }

    setText("");
    setFile(null);
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/ask", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      setLoading(false);

      if (res.ok) {
        appendMessage(data.reply, "bot");
      } else {
        appendMessage(`Error: ${data.error || "Something went wrong"}`, "bot");
      }
    } catch (err) {
      setLoading(false);
      appendMessage("Failed to connect to server", "bot");
    }
  };

  return (
    <>
      <button className="chat-toggle" onClick={() => setOpen(!open)}>💬</button>

      <div className={`chat-box ${open ? "open" : ""}`}>
        <div className="chat-header">Smart Assistance</div>

        <div className="chat-messages" ref={messagesRef}>
          {messages.map((m, i) => (
            <div key={i} className={`message ${m.sender}`}>{m.msg}</div>
          ))}
          {loading && (
            <div className="message bot loading">
              <div className="loader"></div>
            </div>
          )}
        </div>

        <form className="chat-input" onSubmit={handleSubmit}>
          <button
            type="button"
            className={`attachment-icon ${file ? "active" : ""}`}
            onClick={() => fileInputRef.current.click()}
          >
            📎
          </button>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={2}
            placeholder="Type your message..."
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </>
  );
};

export default ChatWidget;
