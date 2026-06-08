import React from 'react';
import { Send, CheckCheck, Paperclip } from 'lucide-react';
import supplierAvatar from '../../assets/supplieravator.png';

const MessagesTab = () => {
  const activeThreads = [
    { id: 1, name: "David Chen", company: "Shenzhen Metals", text: "We are reviewing your last quote...", time: "14:22", active: true },
    { id: 2, name: "Sarah Miller", company: "Global Foods Inc.", text: "Thank you for the document upload.", time: "Yesterday", active: false },
    { id: 3, name: "Amare Tekle", company: "Addis Logistics Hub", text: "Are the transport certifications complete?", time: "May 24", active: false }
  ];

  return (
    <div className="messages-workspace-wrapper">
      {/* Thread History Column List */}
      <div className="messages-sidebar-panel">
        <div className="panel-search-header">
          <h3>Live Conversations</h3>
        </div>
        <div className="threads-vertical-stack">
          {activeThreads.map((thread) => (
            <div key={thread.id} className={`thread-card-row ${thread.active ? 'selected-active' : ''}`}>
              <div className="thread-avatar-container">
                <img src={supplierAvatar} alt={thread.name} />
                {thread.active && <span className="online-beacon-dot"></span>}
              </div>
              <div className="thread-meta-body">
                <div className="thread-header-line">
                  <h4>{thread.name}</h4>
                  <span className="thread-time-lbl">{thread.time}</span>
                </div>
                <span className="thread-company-sub">{thread.company}</span>
                <p className="thread-snippet-paragraph">{thread.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Targeted Active Chat Container */}
      <div className="chat-window-viewport">
        <header className="chat-window-header">
          <div>
            <h3>David Chen</h3>
            <span className="subtitle-company">Procurement Manager • Shenzhen Metals</span>
          </div>
        </header>

        <div className="chat-message-log-scroll">
          <div className="message-bubble bubble-incoming">
            <p>Hello, we reviewed the initial proposal regarding High-Grade Copper Ore allocation. Can you clarify if export tariffs are covered in your final unit quote?</p>
            <span className="bubble-timestamp">14:18</span>
          </div>
          
          <div className="message-bubble bubble-outgoing">
            <p>Hi David! Yes, all regional West African regulatory clearing tariffs are pre-calculated and integrated into the pricing matrix on your dashboard.</p>
            <div className="outgoing-status-meta">
              <span>14:21</span>
              <CheckCheck size={14} color="#036942" />
            </div>
          </div>
        </div>

        <footer className="chat-input-control-footer">
          <button className="chat-attach-trigger"><Paperclip size={18} /></button>
          <input type="text" placeholder="Type your message to buyer..." className="chat-text-field" />
          <button className="chat-send-trigger-btn"><Send size={16} /></button>
        </footer>
      </div>
    </div>
  );
};

export default MessagesTab;