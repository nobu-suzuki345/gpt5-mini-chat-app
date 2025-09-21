'use client';
import { useState } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function ChatApp() {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message.trim()) return;
    
    setLoading(true);
    const userMessage: Message = { role: 'user', content: message };
    setChat(prev => [...prev, userMessage]);
    
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
      });
      
      if (!response.ok) {
        throw new Error('APIエラーが発生しました');
      }
      
      const data = await response.json();
      setChat(prev => [...prev, { role: 'assistant', content: data.reply }]);
    } catch (error) {
      console.error('Error:', error);
      setChat(prev => [...prev, { 
        role: 'assistant', 
        content: 'エラーが発生しました。もう一度お試しください。' 
      }]);
    } finally {
      setLoading(false);
      setMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 h-screen flex flex-col">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          🤖 GPT-4o-mini チャットアプリ
        </h1>
        <p className="text-gray-600">
          AIとチャットしてみましょう！何でも質問してください。
        </p>
      </div>
      
      <div className="flex-1 border border-gray-300 rounded-lg p-4 overflow-y-auto mb-4 bg-gray-50">
        {chat.length === 0 && (
          <div className="text-center text-gray-500 mt-8">
            <p className="text-lg">👋 こんにちは！</p>
            <p>何か質問があれば、下のテキストボックスに入力してください。</p>
          </div>
        )}
        
        {chat.map((msg, index) => (
          <div key={index} className={`mb-4 ${
            msg.role === 'user' ? 'text-right' : 'text-left'
          }`}>
            <div className={`inline-block p-3 rounded-lg max-w-xs md:max-w-md lg:max-w-lg ${
              msg.role === 'user' 
                ? 'bg-blue-500 text-white' 
                : 'bg-white border border-gray-200 text-gray-800'
            }`}>
              <div className="whitespace-pre-wrap">{msg.content}</div>
            </div>
          </div>
        ))}
        
        {loading && (
          <div className="text-left mb-4">
            <div className="inline-block p-3 rounded-lg bg-white border border-gray-200">
              <div className="flex items-center space-x-2">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-600"></div>
                <span className="text-gray-600">考え中...</span>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <div className="flex gap-3">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="メッセージを入力..."
          disabled={loading}
        />
        <button
          onClick={sendMessage}
          disabled={loading || !message.trim()}
          className="bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 disabled:cursor-not-allowed"
        >
          送信
        </button>
      </div>
    </div>
  );
}

