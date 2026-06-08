import React from 'react';
import supplierAvatar from '../../assets/supplieravator.png';

const RecentChatsWidget = () => {
  const mockChats = [
    {
      id: 1,
      name: "David Chen",
      company: "SHENZHEN METALS",
      text: "We are reviewing your last quote for the Copper Ore. Can you provide...",
      time: "14:22",
      badge: true
    },
    {
      id: 2,
      name: "Sarah Miller",
      company: "GLOBAL FOODS INC.",
      text: "Thank you for the document upload. We will process it within...",
      time: "Yesterday"
    }
  ];

  return (
    <div className="dashboard-block-section block-gray-chat">
      <div className="block-section-header">
        <div className="chat-header-title-row">
          <h3>Recent Chats</h3>
          <span className="chat-notification-count-badge">2 New</span>
        </div>
      </div>

      <div className="chats-widget-list-stack">
        {mockChats.map((chat) => (
          <div key={chat.id} className="widget-chat-row-item">
            <div className="chat-item-avatar-wrapper">
              <img src={supplierAvatar} alt={chat.name} className="chat-row-avatar" />
              {chat.badge && <span className="active-online-dot"></span>}
            </div>
            <div className="chat-item-body-content">
              <div className="chat-row-top-meta">
                <h4>{chat.name}</h4>
                <span className="chat-row-timestamp">{chat.time}</span>
              </div>
              <span className="chat-row-company-lbl">{chat.company}</span>
              <p className="chat-row-snippet-text">{chat.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="block-section-footer">
        <button className="footer-view-all-btn chat-center-btn">Open Message Center</button>
      </div>
    </div>
  );
};

export default RecentChatsWidget;