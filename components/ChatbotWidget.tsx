'use client';

import { useState, useRef, useEffect } from 'react';

interface Message {
  type: 'user' | 'bot';
  text: string;
  time: string;
}

const SUGGESTIONS = [
  'Admissions 2026-27',
  'Fee Structure',
  'School Timings',
  'Facilities',
  'Contact Us',
];

function nowStr() {
  return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

// Static FAQ responses — no backend required
const FAQ: Record<string, string> = {
  'admissions': '**Admissions 2026-27 are OPEN!** 🎉\n\nWe admit students from **Nursery to Class XII**.\n\n**Process:**\n• Online enquiry → Document submission → Aptitude assessment → Orientation → Confirmation\n\n**Documents needed:** Birth Certificate, Previous Report Cards, Address Proof, Photos\n\n[Apply Now](/admissions) | Call us: **06115 – 235117**',
  'fee': '**Fee Structure (Annual):**\n\n• **Nursery – KG:** ₹45,000/year\n• **Classes I–V:** ₹55,000/year\n• **Classes VI–VIII:** ₹65,000/year\n• **Classes IX–XII:** ₹75,000/year\n\nHostel fees are separate. [Contact Us](/contact) for details.',
  'fees': '**Fee Structure (Annual):**\n\n• **Nursery – KG:** ₹45,000/year\n• **Classes I–V:** ₹55,000/year\n• **Classes VI–VIII:** ₹65,000/year\n• **Classes IX–XII:** ₹75,000/year\n\nHostel fees are separate. [Contact Us](/contact) for details.',
  'timing': '**School Timings:**\n\n• **Mon–Fri:** 8:00 AM – 2:30 PM\n• **Saturday:** 8:00 AM – 12:30 PM (Half-day)\n• **School Office:** 8:00 AM – 4:00 PM (Mon–Sat)\n• Closed on Sundays and national holidays.',
  'timings': '**School Timings:**\n\n• **Mon–Fri:** 8:00 AM – 2:30 PM\n• **Saturday:** 8:00 AM – 12:30 PM (Half-day)\n• **School Office:** 8:00 AM – 4:00 PM (Mon–Sat)\n• Closed on Sundays and national holidays.',
  'facilities': '**Our World-Class Facilities:** 🏫\n\n• Smart Classrooms with interactive digital boards\n• Science Labs (Physics, Chemistry, Biology)\n• Computer Lab with Robotics & AI\n• Library with 10,000+ books\n• Sports Complex (Cricket, Football, Basketball)\n• GPS-tracked School Buses\n• 24/7 CCTV security\n\n[Explore Facilities](/facilities)',
  'contact': '**Contact Gyan Niketan School:**\n\n📞 **Phone:** 06115 – 235117 / 235525\n📧 **Email:** gnspatna@rediffmail.com\n📍 **Address:** Vitthal Complex, Ranjan Path, Gola Road (Danapur Cantt.), Patna – 801503\n\n🕐 Office hours: Mon–Sat, 8 AM – 4 PM\n\n[Send a Message](/contact)',
  'hostel': '**Hostel at Gyan Niketan:**\n\nWe offer hostel facilities for students from **Std. I to XII**.\n\n• Separate blocks for boys and girls\n• Supervised study hours\n• Nutritious meals\n• 24/7 security\n\nFor hostel fees and availability, please [contact us](/contact) or call **06115 – 235117**.',
  'cbse': 'Gyan Niketan School is **CBSE affiliated** (Central Board of Secondary Education, New Delhi). We have been a CBSE school since 1990 and offer classes from **Nursery to Class XII**.',
  'established': 'Gyan Niketan School was **established in 1986** by Padma Shree Acharya Kishore Kunal, IPS, and Mrs. Anita Kunal under Manaviya Vibhava Vikas (M.V.V.) Nyas. We are ranked among the **Top 10 Schools in Patna**! 🏆',
  'about': 'Gyan Niketan, meaning **"Abode of Knowledge"**, was established in **1986**. We are a CBSE-affiliated English-medium school in Patna, Bihar.\n\n🌟 **Highlights:**\n• 120+ expert educators\n• 5-acre campus\n• Ranked Top 10 in Patna\n• 98% Board Pass Rate\n\n[Our Story](/about)',
};

function getStaticReply(input: string): string {
  const lower = input.toLowerCase();
  for (const [key, reply] of Object.entries(FAQ)) {
    if (lower.includes(key)) return reply;
  }
  return `Thank you for your question! 🙏 For the most accurate and up-to-date information, please:\n\n📞 **Call us:** 06115 – 235117 / 235525\n📧 **Email:** gnspatna@rediffmail.com\n\nOr [send us a message](/contact) and we'll get back to you shortly!\n\n*Ask me about:* Admissions, Fees, Timings, Facilities, Hostel, or Contact details.`;
}

function formatMarkdown(text: string) {
  let html = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="gi-msg-link">$1 <i class="fas fa-arrow-right" style="font-size:0.65em"></i></a>');
  html = html.replace(/\n/g, '<br>');
  return html;
}

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const timer = setTimeout(() => {
        setMessages([{
          type: 'bot',
          text: 'Namaste! 🙏 Welcome to **Gyan Niketan School**! I\'m **Gyanis AI**, your school guide.\n\nAsk me about admissions, fees, facilities, or anything else!',
          time: nowStr(),
        }]);
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [isOpen, messages.length]);

  function sendMessage(text: string) {
    if (!text.trim() || isTyping) return;
    const userMsg: Message = { type: 'user', text: text.trim(), time: nowStr() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);
    setShowSuggestions(false);

    // Simulate typing delay for natural feel
    const delay = 600 + Math.random() * 400;
    setTimeout(() => {
      const reply = getStaticReply(text.trim());
      setMessages(prev => [...prev, {
        type: 'bot',
        text: reply,
        time: nowStr(),
      }]);
      setIsTyping(false);
    }, delay);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  }

  return (
    <>
      {/* Launcher Button */}
      <div id="chatLauncher">
        <button
          className="chat-fab"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open chat"
        >
          <i className={`fas fa-${isOpen ? 'times' : 'robot'}`}></i>
          {!isOpen && <span className="chat-fab-badge">AI</span>}
        </button>
        {!isOpen && (
          <div className="chat-fab-tooltip">Chat with Gyanis AI</div>
        )}
      </div>

      {/* Chat Window */}
      <div id="chatWindow" className={isOpen ? 'open' : ''}>
        {/* Header */}
        <div className="chat-header">
          <div className="chat-header-avatar">
            <i className="fas fa-robot"></i>
          </div>
          <div className="chat-header-info">
            <h4>Gyanis AI</h4>
            <p>● Online · School Assistant</p>
          </div>
          <div className="chat-header-actions">
            <button onClick={() => setIsOpen(false)} title="Close">
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>

        {/* Suggestions */}
        {showSuggestions && (
          <div id="chatSuggestions">
            {SUGGESTIONS.map(s => (
              <button
                key={s}
                className="chat-suggestion"
                onClick={() => sendMessage(s)}
              >
                {s}
              </button>
            ))}
          </div>
        )}

        {/* Messages */}
        <div id="chatMessages" ref={messagesRef}>
          {messages.map((msg, i) => (
            <div key={i} className={`gi-message ${msg.type}`}>
              {msg.type === 'bot' ? (
                <div dangerouslySetInnerHTML={{ __html: formatMarkdown(msg.text) }} />
              ) : (
                msg.text
              )}
              <div style={{ fontSize: '0.65rem', opacity: 0.6, marginTop: 4, textAlign: msg.type === 'user' ? 'right' : 'left' }}>
                {msg.time}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="gi-typing">
              <span></span><span></span><span></span>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="chat-input-area">
          <textarea
            id="chatInput"
            ref={inputRef}
            placeholder="Ask me anything…"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            rows={1}
          />
          <button id="chatSend" onClick={() => sendMessage(input)} aria-label="Send">
            <i className="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </>
  );
}
