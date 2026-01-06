import { useState, useRef, useEffect, useMemo, useCallback } from "react";
import { useNavigate, useLocation, ScrollRestoration } from "react-router-dom";
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
  Upload,
  WandSparkles,
  X,
} from "lucide-react";
import owlAnimation from "../../../../assets/owl2.json";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

// Extracted constants
const QUICK_QUESTIONS = [
  "Help me start a story about space",
  "What's a good word for happy?",
  "Give me ideas for a character",
  "How should my story end?",
];

const INITIAL_MESSAGES = [
  {
    id: 1,
    text: "Hi! I'm your Story Helper! 🌟 I can help you write amazing stories. What would you like to write about today?",
    sender: "ai",
  },
];

const INITIAL_SAVED_STORIES = [
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
];

// Extracted helper functions
const getWordCount = (text) => {
  return text.split(/\s+/).filter((word) => word.length > 0).length;
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

// Extracted UI Components
const Header = ({ onClear, onSave, onPublish }) => (
  <div className="flex items-center justify-between mb-6">
    <div className="flex items-center gap-2">
      <button
        onClick={() => window.history.back()}
        className="h-12 w-12 rounded-full bg-white shadow flex items-center justify-center hover:bg-gray-50 transition-colors"
        aria-label="Go back"
      >
        <ArrowLeft color="#364153" />
      </button>
      <WandSparkles size={40} color="#FFB6C1" aria-hidden="true" />
      <h1 className="text-gray-800 text-2xl font-bold headerFont">Story Creator Studio</h1>
    </div>
    <div className="flex gap-2 headerFont">
      <button
        onClick={onClear}
        className="px-4 py-2 bg-white rounded-full shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.10)] outline outline-2 outline-offset-[-2px] outline-sky-300 transition-colors hover:bg-sky-50 flex items-center gap-2 text-gray-800 text-sm font-bold"
      >
        <RotateCcw size={16} color="#2D3748" />
        Clear
      </button>
      <button
        onClick={onSave}
        className="px-4 py-2 bg-gradient-to-br from-[#FFE87C] to-[#FFDAB9] rounded-full shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.10)] transition-all hover:shadow-md hover:brightness-105 flex items-center gap-2 text-gray-800 text-sm font-bold"
      >
        <Save size={16} color="#2D3748" />
        Save
      </button>
      <button
        onClick={onPublish}
        className="px-4 py-2 bg-gradient-to-br from-[#87CEEB] to-[#98D8C8] rounded-full shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.10)] transition-all hover:shadow-md hover:brightness-105 flex items-center gap-2 text-white text-sm font-bold"
      >
        <Share2 size={16} color="#ffffff" />
        Publish
      </button>
    </div>
  </div>
);

const Editor = ({
  title,
  content,
  onTitleChange,
  onContentChange,
  wordCount,
  showEmoji,
  onToggleEmoji,
  onEmojiSelect,
}) => (
  <div className="col-span-8 rounded-2xl shadow-sm bg-white border">
    <div className="p-6 pb-2">
      <input
        placeholder="Give your story a title…"
        value={title}
        onChange={onTitleChange}
        className="w-full border-b pb-2 focus:outline-none text-neutral-950/50 text-xl font-bold headerFont"
        aria-label="Story title"
      />
    </div>

    <div className="p-6 pt-0">
      <textarea
        placeholder="Once upon a time…"
        value={content}
        onChange={onContentChange}
        className="min-h-[420px] w-full resize-none text-gray-700 text-lg font-normal focus:outline-none bg-transparent normalFont"
        style={{
          backgroundImage: "linear-gradient(transparent 31px, #E2E8F0 32px)",
          backgroundSize: "100% 32px",
          lineHeight: "32px",
        }}
        aria-label="Story content"
      />

      <div className="flex items-center justify-between">
        <div className="relative mt-4">
          <button
            className="text-xs text-gray-600 font-bold hover:bg-gray-100 px-3 py-2 rounded-md flex items-center gap-2 headerFont"
            onClick={onToggleEmoji}
            aria-label="Add emojis and stickers"
          >
            <Sparkles size={16} color="#4A5565" /> Add Stickers & Emojis
          </button>

          {showEmoji && (
            <div className="absolute z-10 mt-2 bottom-full mb-2">
              <EmojiPicker onEmojiClick={(e) => onEmojiSelect(e.emoji)} />
            </div>
          )}
        </div>

        <div className="text-right text-xs font-normal text-gray-500 mt-2 headerFont">
          {wordCount} words
        </div>
      </div>
    </div>
  </div>
);

const ChatMessage = ({ message }) => (
  <div
    className={`flex ${
      message.sender === "user" ? "justify-end" : "justify-start"
    }`}
  >
    <div
      className={`max-w-[85%] px-4 py-3 text-sm leading-6 ${
        message.sender === "user"
          ? "bg-[#213C2D]/80 text-white rounded-2xl rounded-tr-sm shadow-sm"
          : "bg-slate-200 text-gray-700 rounded-2xl rounded-tl-sm"
      }`}
    >
      {message.text}
    </div>
  </div>
);

const ChatBox = ({
  messages,
  chatInput,
  onInputChange,
  onSendMessage,
  showQuickQuestions,
  messagesEndRef,
}) => {
  return (
    <div className="w-full h-[540px] bg-white rounded-[20px] shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.10)] outline outline-2 outline-offset-[-2px] outline-black/10 flex flex-col overflow-hidden normalFont">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <ChatMessage key={msg.id} message={msg} />
        ))}

        {showQuickQuestions && (
          <div className="mt-4">
            <p className="text-[10px] text-slate-500 mb-3 ml-1 headerFont">Quick questions:</p>
            <div className="flex flex-col gap-2">
              {QUICK_QUESTIONS.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => onSendMessage(q)}
                  className="w-fit text-left px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-full text-xs text-gray-700 transition-colors border border-black/5"
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
        <div className="flex gap-2 items-center bg-white rounded-2xl outline outline-2 outline-offset-[-2px] outline-black/10 px-2 py-1 focus-within:outline-[#213C2D]/50 transition-all">
          <input
            type="text"
            value={chatInput}
            onChange={onInputChange}
            onKeyDown={(e) => e.key === "Enter" && onSendMessage(chatInput)}
            placeholder="Ask me anything..."
            className="flex-1 px-3 py-2 text-sm text-gray-700 placeholder-slate-400 focus:outline-none bg-transparent"
            aria-label="Chat input"
          />
          <button
            onClick={() => onSendMessage(chatInput)}
            className="w-10 h-10 flex items-center justify-center bg-[#213C2D] hover:bg-[#213C2D]/80 rounded-xl shadow-sm transition-colors"
            aria-label="Send message"
          >
            <Send size={16} className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

const WritingPromptCard = () => (
  <div className="p-7 bg-white rounded-3xl shadow-[0px_8px_10px_-6px_rgba(0,0,0,0.10)] outline outline-4 outline-offset-[-4px] outline-amber-200/30 inline-flex flex-col justify-start items-start gap-4">
    <div className="flex items-center gap-2">
      <Lightbulb color="#FFD700" />
      <h1 className="text-gray-800 text-xl font-bold">Writing Prompt</h1>
    </div>
    <div className="w-full p-4 bg-gradient-to-b from-[#FFF8E6] to-[#FFF0F5] rounded-2xl inline-flex flex-col justify-start items-start">
      <p className="justify-start text-gray-700 text-base font-normal leading-6">
        What if you could fly for one day?
      </p>
    </div>
    <button className="self-stretch h-10 w-full bg-gradient-to-b from-amber-200 to-orange-200 rounded-full shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.10)] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.10)] flex justify-center items-center text-gray-800 text-base font-bold leading-6 hover:brightness-105 transition-all">
      Get New Idea ✨
    </button>
  </div>
);

const QuickTipsCard = () => (
  <div className="p-7 bg-white rounded-3xl shadow-[0px_8px_10px_-6px_rgba(0,0,0,0.10)] outline outline-4 outline-offset-[-4px] outline-emerald-200/30 inline-flex flex-col justify-start items-start gap-4">
    <div className="flex items-center gap-2">
      <h1 className="text-gray-800 text-xl font-bold">Quick Tips 📝</h1>
    </div>
    <div className="flex flex-col items-start justify-center gap-3">
      {[
        { color: "text-sky-300", tip: "Start with 'Once upon a time...'" },
        { color: "text-emerald-200", tip: "Describe what you see and feel" },
        { color: "text-red-200", tip: "Give your characters fun names" },
        { color: "text-amber-200", tip: "Don't forget a happy ending!" },
      ].map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <div
            className={`justify-start ${item.color} text-base font-bold leading-6`}
          >
            •
          </div>
          <div className="justify-start text-gray-600 text-sm font-normal leading-5">
            {item.tip}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const SavedStoriesCard = ({ savedStories }) => (
  <div className="w-full p-6 bg-white rounded-3xl shadow-[0px_8px_10px_-6px_rgba(0,0,0,0.10)] outline outline-4 outline-offset-[-4px] outline-[#FFEAED] inline-flex flex-col justify-start items-start gap-3">
    <div className="w-full flex items-center justify-between">
      <h1 className="justify-start text-gray-800 text-xl font-bold leading-7">
        My Saved Stories
      </h1>
      <p className="text-gray-800 text-base font-bold">
        <a href="/myStories">View All</a>
      </p>
    </div>
    {savedStories.slice(0, 2).map((story) => (
      <div
        key={story.id}
        className="w-full p-3 bg-[#4A5565]/5 rounded-2xl inline-flex flex-col justify-start items-start"
      >
        <p className="self-stretch justify-start text-[#4A5565] text-sm font-bold leading-5 truncate">
          {story.title}
        </p>
        <p className="self-stretch justify-start text-[#4A5565] text-xs font-normal leading-4">
          Last edited {getTimeAgo(story.timestamp)}
        </p>
      </div>
    ))}
  </div>
);

const OwlAssistantCard = () => (
  <div className="rounded-2xl bg-gradient-to-br from-[#87CEEB] to-[#98D8C8] shadow-sm">
    <div className="p-6 space-y-3 flex flex-col items-center">
      <DotLottieReact
        data={owlAnimation}
        loop={true}
        autoplay={true}
        style={{ width: 150, height: 120 }}
      />
      <p className="text-white text-base font-bold headerFont">Hi! I'm Owlbert!</p>
      <p className="text-white text-base font-normal normalFont">
        Your friendly writing assistant
      </p>
      <div className="w-96 h-20 bg-white/20 rounded-2xl inline-flex flex-col justify-start items-start p-4 gap-1">
        <p className="justify-start text-white text-[10px] font-bold headerFont">Need help?</p>
        <p className="w-80 h-7 justify-start text-white text-xs font-normal normalFont">
          I can suggest ideas, help you spell words, or give you inspiration!
        </p>
      </div>
    </div>
  </div>
);

const ClearConfirmationToast = ({ onConfirm, onCancel }) => (
  <div className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-white px-6 py-4 rounded-2xl shadow-[0px_8px_30px_rgba(0,0,0,0.12)] border border-gray-100 z-50 flex flex-col items-center gap-3">
    <p className="text-gray-800 font-bold text-sm">
      Are you sure you want to clear everything?
    </p>
    <div className="flex gap-3">
      <button
        onClick={onCancel}
        className="px-4 py-1.5 rounded-xl text-gray-600 hover:bg-gray-50 font-bold text-xs border border-gray-200 transition-colors"
      >
        Cancel
      </button>
      <button
        onClick={onConfirm}
        className="px-4 py-1.5 rounded-xl bg-red-500 text-white hover:bg-red-600 font-bold text-xs shadow-sm transition-colors"
      >
        Yes, Clear All
      </button>
    </div>
  </div>
);

const ShareToast = ({ onClose, onCopyLink, isCopied }) => (
  <div className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-white px-6 py-4 rounded-2xl shadow-[0px_8px_30px_rgba(0,0,0,0.12)] border border-gray-100 z-50 flex flex-col items-center gap-3 w-80">
    <div className="flex justify-between items-center w-full">
      <p className="text-gray-800 font-bold text-sm">Share your story! 🚀</p>
      <button
        onClick={onClose}
        className="text-gray-400 hover:text-gray-600"
        aria-label="Close share toast"
      >
        <X size={16} />
      </button>
    </div>

    <div className="flex items-center gap-2 w-full bg-slate-50 p-2 rounded-xl border border-gray-200">
      <p className="text-xs text-gray-500 truncate flex-1 select-all">
        https://storybook.app/share/story-123
      </p>
      <button
        onClick={onCopyLink}
        className="p-1.5 bg-white rounded-lg shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors"
        aria-label="Copy link"
      >
        {isCopied ? (
          <Check size={14} className="text-green-500" />
        ) : (
          <Copy size={14} className="text-gray-600" />
        )}
      </button>
    </div>
  </div>
);

// Main Component
export default function AdminStoryCreatorStudio() {
  const [uploadedImage, setUploadedImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageDivClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const isValidType = ["image/png", "image/jpeg", "image/jpg"].includes(
      file.type
    );
    if (!isValidType) {
      alert("Only PNG and JPG files are allowed.");
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      alert("File size must be less than 10MB.");
      return;
    }
    setUploadedImage(file);
  };
  const navigate = useNavigate();
  const location = useLocation();
  const [title, setTitle] = useState(location.state?.title || "");
  const [content, setContent] = useState(location.state?.story || "");
  const [showEmoji, setShowEmoji] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [savedStories, setSavedStories] = useState(INITIAL_SAVED_STORIES);
  const [showClearConfirm, setShowClearConfirm] = useState(false);
  const [showShareToast, setShowShareToast] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const messageIdRef = useRef(2);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSendMessage = useCallback((text) => {
    if (!text.trim()) return;

    const newMsg = { id: messageIdRef.current++, text: text, sender: "user" };
    setMessages((prev) => [...prev, newMsg]);
    setChatInput("");
    setTimeout(scrollToBottom, 100);

    setTimeout(() => {
      let reply = "That sounds wonderful! Tell me more about it.";
      const lowerText = text.toLowerCase();

      const responses = {
        space:
          "Great choice! How about starting with: 'The stars twinkled brightly as Captain Alex prepared for the biggest adventure of their life...' You can continue from there!",
        happy:
          "Some synonyms for happy are: joyful, cheerful, delighted, or ecstatic!",
        character:
          "How about a brave squirrel who is afraid of heights? or a robot who loves to garden?",
        end: "Maybe it ends with a surprise party, or waking up from a dream, or finding a hidden treasure!",
      };

      for (const [key, response] of Object.entries(responses)) {
        if (lowerText.includes(key)) {
          reply = response;
          break;
        }
      }

      const aiMsgId = messageIdRef.current++;
      setMessages((prev) => [
        ...prev,
        { id: aiMsgId, text: reply, sender: "ai" },
      ]);
      setTimeout(scrollToBottom, 100);
    }, 1000);
  }, []);

  const handleClear = useCallback(() => {
    setShowClearConfirm(true);
  }, []);

  const confirmClear = useCallback(() => {
    setTitle("");
    setContent("");
    setChatInput("");
    setMessages(INITIAL_MESSAGES);
    messageIdRef.current = 2;
    setShowClearConfirm(false);
  }, []);

  const handlePublish = useCallback(() => {
    setShowShareToast(true);
  }, []);

  const handleCopyLink = useCallback(() => {
    navigator.clipboard.writeText("https://storybook.app/share/story-123");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  }, []);

  const handleSave = useCallback(() => {
    const newStory = {
      id: Date.now(),
      title: title || "Untitled Story",
      timestamp: Date.now(),
    };
    setSavedStories((prev) => [newStory, ...prev]);
  }, [title]);

  const wordCount = useMemo(() => getWordCount(content), [content]);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#FFF0F5] to-white p-20">
      <ScrollRestoration />
      <Header
        onClear={handleClear}
        onSave={handleSave}
        onPublish={handlePublish}
      />

      {/* Main Grid */}
      <div className="grid grid-cols-12 gap-6">
        <Editor
          title={title}
          content={content}
          onTitleChange={(e) => setTitle(e.target.value)}
          onContentChange={(e) => setContent(e.target.value)}
          wordCount={wordCount}
          showEmoji={showEmoji}
          onToggleEmoji={() => setShowEmoji(!showEmoji)}
          onEmojiSelect={(emoji) => setContent((prev) => prev + emoji)}
        />

        {/* Sidebar */}
        <div className="col-span-4 space-y-4">
          <OwlAssistantCard />

          <div className="flex items-center gap-2">
            <Sparkles size={20} color="#7C3AED" />
            <p className="text-gray-700 text-xs font-normal headerFont">Story Helper</p>
          </div>

          <ChatBox
            messages={messages}
            chatInput={chatInput}
            onInputChange={(e) => setChatInput(e.target.value)}
            onSendMessage={handleSendMessage}
            showQuickQuestions={messages.length === 1}
            messagesEndRef={messagesEndRef}
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mt-6">
        {/* Card 1 */}
        <div className="p-7 bg-white rounded-3xl shadow-[0px_8px_10px_-6px_rgba(0,0,0,0.10)] outline outline-4 outline-offset-[-4px] outline-amber-200/30 inline-flex flex-col justify-start items-start gap-4">
          <div className="flex items-center gap-2">
            <Lightbulb color="#FFD700" />
            <h1 className="text-gray-800 text-base font-bold headerFont">Upload image</h1>
          </div>
          <div
            className="w-full p-4 bg-gradient-to-b from-[#FFF8E6] to-[#FFF0F5] rounded-2xl inline-flex flex-col justify-start items-center cursor-pointer hover:brightness-95 transition normalFont"
            onClick={handleImageDivClick}
          >
            <Upload color="#99A1AF" strokeWidth={3} />
            <p className="justify-start text-gray-700 text-sm font-normal leading-6">
              Upload Story Image
            </p>
            <p className="justify-start text-gray-700 text-xs font-normal leading-6">
              PNG, JPG files (Max 10MB)
            </p>
            <input
              type="file"
              accept="image/png, image/jpeg, image/jpg"
              style={{ display: "none" }}
              ref={fileInputRef}
              onChange={handleImageChange}
            />
            {uploadedImage && (
              <p className="mt-2 text-green-600 text-xs font-bold">
                {uploadedImage.name} selected
              </p>
            )}
          </div>
          <button className="self-stretch h-10 w-full bg-gradient-to-b from-amber-200 to-orange-200 rounded-full shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.10)] flex justify-center items-center text-gray-800 text-[10px] headerFont font-bold leading-6 hover:brightness-105 transition-all">
            {uploadedImage ? "Uploaded" : "Upload"}
          </button>
        </div>
        {/* Card 2 */}
        <div className="p-7 bg-white rounded-3xl shadow-[0px_8px_10px_-6px_rgba(0,0,0,0.10)] outline outline-4 outline-offset-[-4px] outline-emerald-200/30  inline-flex flex-col justify-start items-start gap-4">
          <div className="flex items-center gap-2">
            <h1 className="text-gray-800 text-base font-bold headerFont">Quick Tips 📝</h1>
          </div>
          <div className="flex flex-col items-start justify-center gap-3 normalFont">
            <div className="flex items-center gap-2">
              <div className="justify-start text-sky-300 text-base font-bold leading-6">
                •
              </div>
              <div className="justify-start text-gray-600 text-sm font-normal leading-5">
                Start with "Once upon a time..."
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="justify-start text-emerald-200 text-base font-bold leading-6">
                •
              </div>
              <div className="justify-start text-gray-600 text-sm font-normal leading-5">
                Describe what you see and feel
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="justify-start text-red-200 text-base font-bold leading-6">
                •
              </div>
              <div className="justify-start text-gray-600 text-sm font-normal leading-5">
                Give your characters fun names
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="justify-start text-amber-200 text-base font-bold leading-6">
                •
              </div>
              <div className="justify-start text-gray-600 text-sm font-normal leading-5">
                Don't forget a happy ending!
              </div>
            </div>
          </div>
        </div>
        {/* Card 3 */}
        <div className="w-full p-6 bg-white rounded-3xl shadow-[0px_8px_10px_-6px_rgba(0,0,0,0.10)] outline outline-4 outline-offset-[-4px] outline-[#FFEAED] inline-flex flex-col justify-start items-start gap-3">
          <div className="w-full flex items-center justify-between">
            <h1 className="justify-start text-gray-800 text-base font-bold leading-7 headerFont">
              My Saved Stories
            </h1>
            <p className="text-gray-800 text-base font-bold normalFont">
              <a href="/dashboard/storyLibrary">View All</a>
            </p>
          </div>
          {savedStories.slice(0, 2).map((story) => (
            <div
              key={story.id}
              className="w-full p-3 bg-[#4A5565]/5 rounded-2xl inline-flex flex-col justify-start items-start"
            >
              <p className="self-stretch justify-start text-[#4A5565] text-[10px] font-bold leading-5 truncate headerFont">
                {story.title}
              </p>
              <p className="self-stretch justify-start text-[#4A5565] text-xs font-normal leading-4 normalFont">
                Last edited {getTimeAgo(story.timestamp)}
              </p>
            </div>
          ))}
        </div>
      </div>

      {showClearConfirm && (
        <ClearConfirmationToast
          onConfirm={confirmClear}
          onCancel={() => setShowClearConfirm(false)}
        />
      )}

      {showShareToast && (
        <ShareToast
          onClose={() => setShowShareToast(false)}
          onCopyLink={handleCopyLink}
          isCopied={isCopied}
        />
      )}
    </div>
  );
}
