import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import EmojiPicker from "emoji-picker-react";
import {
  ArrowLeft,
  Check,
  Copy,
  Lightbulb,
  RotateCcw,
  Save,
  Send,
  Share2,
  Sparkles,
  WandSparkles,
  X,
} from "lucide-react";
import owlAnimation from "../../assets/owl2.json";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function StoryCreatorStudio() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [showEmoji, setShowEmoji] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm your Story Helper! 🌟 I can help you write amazing stories. What would you like to write about today?",
      sender: "ai",
    },
  ]);
  const [savedStories, setSavedStories] = useState([
    {
      id: 1,
      title: "The Rainbow Adventure",
      timestamp: Date.now() - 172800000,
    },
    {
      id: 2,
      title: "My Pet Dragon",
      timestamp: Date.now() - 432000000,
    },
  ]);

  const [showClearConfirm, setShowClearConfirm] = useState(false);
  const [showShareToast, setShowShareToast] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const messageIdRef = useRef(2);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickQuestions = [
    "Help me start a story about space",
    "What's a good word for happy?",
    "Give me ideas for a character",
    "How should my story end?",
  ];

  const handleSendMessage = (text) => {
    if (!text.trim()) return;

    const newMsg = { id: messageIdRef.current++, text: text, sender: "user" };
    setMessages((prev) => [...prev, newMsg]);
    setChatInput("");

    setTimeout(() => {
      let reply = "That sounds wonderful! Tell me more about it.";
      const lowerText = text.toLowerCase();
      if (lowerText.includes("space")) {
        reply =
          "Great choice! How about starting with: 'The stars twinkled brightly as Captain Alex prepared for the biggest adventure of their life...' You can continue from there!";
      } else if (lowerText.includes("happy")) {
        reply =
          "Some synonyms for happy are: joyful, cheerful, delighted, or ecstatic!";
      } else if (lowerText.includes("character")) {
        reply =
          "How about a brave squirrel who is afraid of heights? or a robot who loves to garden?";
      } else if (lowerText.includes("end")) {
        reply =
          "Maybe it ends with a surprise party, or waking up from a dream, or finding a hidden treasure!";
      }
      const aiMsgId = messageIdRef.current++;
      setMessages((prev) => [
        ...prev,
        { id: aiMsgId, text: reply, sender: "ai" },
      ]);
    }, 1000);
  };

  const getWordCount = (text) => {
    return text.split(/\s+/).filter((word) => word.length > 0).length;
  };

  const handleClear = () => {
    setShowClearConfirm(true);
  };

  const confirmClear = () => {
    setTitle("");
    setContent("");
    setChatInput("");
    setMessages([
      {
        id: 1,
        text: "Hi! I'm your Story Helper! 🌟 I can help you write amazing stories. What would you like to write about today?",
        sender: "ai",
      },
    ]);
    messageIdRef.current = 2;
    setShowClearConfirm(false);
  };

  const handlePublish = () => {
    setShowShareToast(true);
  };

  const handleCopyLink = () => {
    const link = "https://storybook.app/share/story-123";
    navigator.clipboard.writeText(link);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleSave = () => {
    const newStory = {
      id: Date.now(),
      title: title || "Untitled Story",
      timestamp: Date.now(),
    };
    setSavedStories((prev) => [newStory, ...prev]);
  };

  const getTimeAgo = (timestamp) => {
    const seconds = Math.floor((Date.now() - timestamp) / 1000);
    if (seconds < 60) return `${seconds} seconds ago`;
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes} minutes ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} hours ago`;
    const days = Math.floor(hours / 24);
    return `${days} days ago`;
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#FFF0F5] to-white p-20">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate(-1)}
            className="h-12 w-12 rounded-full bg-white shadow flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <ArrowLeft color="#364153" />
          </button>
          <WandSparkles size={40} color="#FFB6C1" />
          <h1 className="text-gray-800 text-4xl font-bold">
            Story Creator Studio
          </h1>
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleClear}
            className="px-4 py-2 bg-white rounded-full shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.10)] outline outline-2 outline-offset-[-2px] outline-sky-300 transition-colors hover:bg-sky-50 flex items-center gap-2 text-gray-800 text-base font-bold"
          >
            <RotateCcw size={16} color="#2D3748" />
            Clear
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-gradient-to-br from-[#FFE87C] to-[#FFDAB9] rounded-full shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.10)] transition-all hover:shadow-md hover:brightness-105 flex items-center gap-2 text-gray-800 text-base font-bold"
          >
            <Save size={16} color="#2D3748" />
            Save
          </button>
          <button
            onClick={handlePublish}
            className="px-4 py-2 bg-gradient-to-br from-[#87CEEB] to-[#98D8C8] rounded-full shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.10)] transition-all hover:shadow-md hover:brightness-105 flex items-center gap-2 text-white text-base font-bold"
          >
            <Share2 size={16} color="#ffffff" />
            Publish
          </button>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-12 gap-6">
        {/* Editor */}
        <div className="col-span-8 rounded-2xl shadow-sm bg-white border">
          <div className="p-6 pb-2">
            <input
              placeholder="Give your story a title…"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border-b pb-2 focus:outline-none text-neutral-950/50 text-3xl font-bold font-nunito"
            />
          </div>

          <div className="p-6 pt-0">
            <textarea
              placeholder="Once upon a time…"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="min-h-[420px] w-full resize-none text-gray-700 text-lg font-normal font-nunito focus:outline-none bg-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(transparent 31px, #E2E8F0 32px)",
                backgroundSize: "100% 32px",
                lineHeight: "32px",
              }}
            />

            <div className="flex items-center justify-between">
              {/* Emoji */}
              <div className="relative mt-4">
                <button
                  className="text-sm text-gray-600 font-bold hover:bg-gray-100 px-3 py-2 rounded-md flex items-center gap-2"
                  onClick={() => setShowEmoji(!showEmoji)}
                >
                  <Sparkles size={16} color="#4A5565" /> Add Stickers & Emojis
                </button>

                {showEmoji && (
                  <div className="absolute z-10 mt-2">
                    <EmojiPicker
                      onEmojiClick={(e) => setContent((prev) => prev + e.emoji)}
                    />
                  </div>
                )}
              </div>

              <div className="text-right text-base font-normal font-nunito text-gray-500 mt-2">
                {getWordCount(content)} words
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="col-span-4 space-y-4">
          <div>
            <div className="rounded-2xl bg-gradient-to-br from-[#87CEEB] to-[#98D8C8] shadow-sm">
              <div className="p-6 space-y-3 flex flex-col items-center">
                <DotLottieReact
                  data={owlAnimation}
                  loop={true}
                  autoplay={true}
                  style={{ width: 150, height: 120 }}
                />
                <p className="text-white text-xl font-bold font-nunito">
                  Hi! I'm Owlbert!
                </p>
                <p className="text-white text-base font-normal font-nunito">
                  Your friendly writing assistant
                </p>
                <div className="w-96 h-20 bg-white/20 rounded-2xl inline-flex flex-col justify-start items-start p-4 gap-1">
                  <p className="justify-start text-white text-sm font-bold font-nunito">
                    Need help?
                  </p>
                  <p className="w-80 h-7 justify-start text-white text-xs font-normal font-nunito">
                    I can suggest ideas, help you spell words, or give you
                    inspiration!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Sparkles size={20} color="#7C3AED" />
            <p className="text-gray-700 text-base font-normal">Story Helper</p>
          </div>
          {/* Chatbox */}
          <div className="w-full h-[540px] bg-white rounded-[20px] shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.10)] outline outline-2 outline-offset-[-2px] outline-black/10 flex flex-col overflow-hidden">
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] px-4 py-3 text-sm font-nunito leading-6 ${
                      msg.sender === "user"
                        ? "bg-violet-600 text-white rounded-2xl rounded-tr-sm shadow-sm"
                        : "bg-slate-200 text-gray-700 rounded-2xl rounded-tl-sm"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {messages.length === 1 && (
                <div className="mt-4">
                  <p className="text-xs text-slate-500 font-nunito mb-3 ml-1">
                    Quick questions:
                  </p>
                  <div className="flex flex-col gap-2">
                    {quickQuestions.map((q, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSendMessage(q)}
                        className="w-fit text-left px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-full text-xs text-gray-700 font-nunito transition-colors border border-black/5"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 bg-white border-t border-black/5">
              <div className="flex gap-2 items-center bg-white rounded-2xl outline outline-2 outline-offset-[-2px] outline-black/10 px-2 py-1 focus-within:outline-violet-500/50 transition-all">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyDown={(e) =>
                    e.key === "Enter" && handleSendMessage(chatInput)
                  }
                  placeholder="Ask me anything..."
                  className="flex-1 px-3 py-2 text-sm text-gray-700 font-nunito placeholder-slate-400 focus:outline-none bg-transparent"
                />
                <button
                  onClick={() => handleSendMessage(chatInput)}
                  className="w-10 h-10 flex items-center justify-center bg-violet-600 hover:bg-violet-700 rounded-xl shadow-sm transition-colors"
                >
                  <Send size={16} className="text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mt-6">
        {/* Card 1 */}
        <div className="p-7 bg-white rounded-3xl shadow-[0px_8px_10px_-6px_rgba(0,0,0,0.10)] outline outline-4 outline-offset-[-4px] outline-amber-200/30 inline-flex flex-col justify-start items-start gap-4">
          <div className="flex items-center gap-2">
            <Lightbulb color="#FFD700" />
            <h1 className="text-gray-800 text-xl font-bold">Writing Prompt</h1>
          </div>
          <div className="w-full p-4 bg-gradient-to-b from-[#FFF8E6] to-[#FFF0F5] rounded-2xl inline-flex flex-col justify-start items-start">
            <p className="justify-start text-gray-700 text-base font-normal font-nunito leading-6">
              What if you could fly for one day?
            </p>
          </div>
          <button className="self-stretch h-10 w-full bg-gradient-to-b from-amber-200 to-orange-200 rounded-full shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.10)] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.10)] flex justify-center items-center text-gray-800 text-base font-bold font-nunito leading-6 hover:brightness-105 transition-all">
            Get New Idea ✨
          </button>
        </div>
        {/* Card 2 */}
        <div className="p-7 bg-white rounded-3xl shadow-[0px_8px_10px_-6px_rgba(0,0,0,0.10)] outline outline-4 outline-offset-[-4px] outline-emerald-200/30  inline-flex flex-col justify-start items-start gap-4">
          <div className="flex items-center gap-2">
            <h1 className="text-gray-800 text-xl font-bold">Quick Tips 📝</h1>
          </div>
          <div className="flex flex-col items-start justify-center gap-3">
            <div className="flex items-center gap-2">
              <div className="justify-start text-sky-300 text-base font-bold font-nunito leading-6">
                •
              </div>
              <div className="justify-start text-gray-600 text-sm font-normal font-nunito leading-5">
                Start with "Once upon a time..."
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="justify-start text-emerald-200 text-base font-bold font-nunito leading-6">
                •
              </div>
              <div className="justify-start text-gray-600 text-sm font-normal font-nunito leading-5">
                Describe what you see and feel
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="justify-start text-red-200 text-base font-bold font-nunito leading-6">
                •
              </div>
              <div className="justify-start text-gray-600 text-sm font-normal font-nunito leading-5">
                Give your characters fun names
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="justify-start text-amber-200 text-base font-bold font-nunito leading-6">
                •
              </div>
              <div className="justify-start text-gray-600 text-sm font-normal font-nunito leading-5">
                Don't forget a happy ending!
              </div>
            </div>
          </div>
        </div>
        {/* Card 3 */}
        <div
          onClick={() => navigate("/myStories")}
          className="w-full p-6 bg-gradient-to-b from-red-200 to-orange-200 rounded-3xl shadow-[0px_8px_10px_-6px_rgba(0,0,0,0.10)] inline-flex flex-col justify-start items-start gap-3 cursor-pointer hover:shadow-lg transition-all hover:brightness-105"
        >
          <div className="justify-start text-white text-xl font-bold font-nunito leading-7">
            My Saved Stories
          </div>
          {savedStories.slice(0, 2).map((story) => (
            <div
              key={story.id}
              className="w-full p-3 bg-white/20 rounded-2xl inline-flex flex-col justify-start items-start"
            >
              <p className="self-stretch justify-start text-white text-sm font-bold font-nunito leading-5 truncate">
                {story.title}
              </p>
              <p className="self-stretch justify-start text-white/90 text-xs font-normal font-nunito leading-4">
                Last edited {getTimeAgo(story.timestamp)}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Clear Confirmation Toast */}
      {showClearConfirm && (
        <div className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-white px-6 py-4 rounded-2xl shadow-[0px_8px_30px_rgba(0,0,0,0.12)] border border-gray-100 z-50 flex flex-col items-center gap-3">
          <p className="text-gray-800 font-bold font-nunito text-sm">
            Are you sure you want to clear everything?
          </p>
          <div className="flex gap-3">
            <button
              onClick={() => setShowClearConfirm(false)}
              className="px-4 py-1.5 rounded-xl text-gray-600 hover:bg-gray-50 font-bold text-xs font-nunito border border-gray-200 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={confirmClear}
              className="px-4 py-1.5 rounded-xl bg-red-500 text-white hover:bg-red-600 font-bold text-xs font-nunito shadow-sm transition-colors"
            >
              Yes, Clear All
            </button>
          </div>
        </div>
      )}

      {/* Share Toast */}
      {showShareToast && (
        <div className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-white px-6 py-4 rounded-2xl shadow-[0px_8px_30px_rgba(0,0,0,0.12)] border border-gray-100 z-50 flex flex-col items-center gap-3 w-80">
          <div className="flex justify-between items-center w-full">
            <p className="text-gray-800 font-bold font-nunito text-sm">
              Share your story! 🚀
            </p>
            <button
              onClick={() => setShowShareToast(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <X size={16} />
            </button>
          </div>

          <div className="flex items-center gap-2 w-full bg-slate-50 p-2 rounded-xl border border-gray-200">
            <p className="text-xs text-gray-500 font-nunito truncate flex-1 select-all">
              https://storybook.app/share/story-123
            </p>
            <button
              onClick={handleCopyLink}
              className="p-1.5 bg-white rounded-lg shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors"
            >
              {isCopied ? (
                <Check size={14} className="text-green-500" />
              ) : (
                <Copy size={14} className="text-gray-600" />
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
