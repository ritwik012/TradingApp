import React, { useState } from 'react';
import axios from 'axios';

const Notifications = () => {
  const [emailSettings, setEmailSettings] = useState({
    recipient: '',
    subject: '',
    body: ''
  });
  const [telegramSettings, setTelegramSettings] = useState({
    chatId: '',
    message: ''
  });

  const handleEmailSettingsChange = (e) => {
    setEmailSettings({ ...emailSettings, [e.target.name]: e.target.value });
  };

  const handleTelegramSettingsChange = (e) => {
    setTelegramSettings({ ...telegramSettings, [e.target.name]: e.target.value });
  };

  const sendEmailNotification = async () => {
    try {
      await axios.post('/api/notifications/email', emailSettings);
    } catch (error) {
      console.error('Error sending email notification:', error);
    }
  };

  const sendTelegramNotification = async () => {
    try {
      await axios.post('/api/notifications/telegram', telegramSettings);
    } catch (error) {
      console.error('Error sending Telegram notification:', error);
    }
  };

  return (
    <div>
      <h2>Notifications</h2>
      <div>
        <h3>Email Notifications</h3>
        <form onSubmit={sendEmailNotification}>
          <label>
            Recipient:
            <input type="email" name="recipient" value={emailSettings.recipient} onChange={handleEmailSettingsChange} />
          </label>
          <label>
            Subject:
            <input type="text" name="subject" value={emailSettings.subject} onChange={handleEmailSettingsChange} />
          </label>
          <label>
            Body:
            <textarea name="body" value={emailSettings.body} onChange={handleEmailSettingsChange} />
          </label>
          <button type="submit">Send Email</button>
        </form>
      </div>
      <div>
        <h3>Telegram Notifications</h3>
        <form onSubmit={sendTelegramNotification}>
          <label>
            Chat ID:
            <input type="text" name="chatId" value={telegramSettings.chatId} onChange={handleTelegramSettingsChange} />
          </label>
          <label>
            Message:
            <textarea name="message" value={telegramSettings.message} onChange={handleTelegramSettingsChange} />
          </label>
          <button type="submit">Send Telegram Message</button>
        </form>
      </div>
    </div>
  );
};

export default Notifications;