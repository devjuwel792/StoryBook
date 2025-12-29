import React, { useState, useEffect, useRef } from "react";
import {
  IoArrowBack,
  IoBookmarkOutline,
  IoSettingsOutline,
  IoVolumeMedium,
} from "react-icons/io5";
import { useNavigate } from "react-router";

// Sample book data
const sampleBookData = {
  id: 1,
  title: "The Magical Forest",
  pages: [
    {
      pageNumber: 1,
      content: `It's been the Packer House before, up on top of our street. Out front, the Packers grew basil beside wild blueberries, kept hummingbird feeders full and dangling from their cedar-shingle porch, right above crayola-colored old buoys everyone flanked their exterior railings with. You could make out the Packers heading to the pool each morning by sound: their screen-door's spring stretching, their flip-flops smacking downhill like clucking tongues, their long swim parkas swooshing. The Packers had a pool, covered in their backyard, wrapped in brick and boxwoods and dumped on by pine needles. They preferred swimming at the club pool, though.Water here was always cold. People only swam in pools whose heat was paid for with membership dues, never personal pools or the ocean itself. Maybe in wetsuits. Or regret if naive, tourist, drunk, or all three.Like birds, the Packers headed where it was warmer. Florida. Too many slipping hazards here, especially in snow, and Mrs. Packer'd already broken her hip. Twice.`
    },
    {
      pageNumber: 2,
      content: `Once upon a time, in a magnificent forest filled with towering trees and sparkling streams, there lived a curious little fox named Luna. Luna loved to explore and discover new things every day. One sunny morning, Luna encountered a mysterious glowing stone near the ancient oak tree. The stone shimmered with beautiful colors and seemed to whisper secrets of the forest. Luna carefully picked it up and felt a warm, gentle energy flowing through her paws.`
    }
  ],
  totalPages: 2
};

const ViewBook = () => {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [selectedWord, setSelectedWord] = useState("");
  const [wordDefinition, setWordDefinition] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate()
  const currentPage = sampleBookData.pages[currentPageIndex];
  
  // Handle word selection
  const handleWordClick = async (word) => {
    const cleanWord = word.replace(/[.,!?;:'"()]/g, '').toLowerCase().trim();
    
    if (!cleanWord || cleanWord.length < 2) return;
    
    setSelectedWord(cleanWord);
    setIsLoading(true);
    
    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${cleanWord}`);
      
      if (!response.ok) {
        throw new Error('Word not found');
      }
      
      const data = await response.json();
      
      if (data && data.length > 0) {
        const wordData = data[0];
        const meanings = wordData.meanings || [];
        
        const definition = meanings.length > 0 && meanings[0].definitions.length > 0 
          ? meanings[0].definitions[0].definition 
          : "Definition not available";
        
        const phonetics = wordData.phonetics?.[0]?.text || "";
        
        setWordDefinition({
          word: cleanWord,
          definition: definition,
          phonetics: phonetics,
          partOfSpeech: meanings[0]?.partOfSpeech || "",
          example: meanings[0]?.definitions[0]?.example || ""
        });
      }
    } catch (error) {
      setWordDefinition({
        word: cleanWord,
        definition: "Definition not found. Try another word.",
        phonetics: "",
        partOfSpeech: "",
        example: ""
      });
    } finally {
      setIsLoading(false);
    }
  };
  

  const renderContent = (content) => {
    return content.split(/(\s+)/).map((word, index) => {
      const cleanWord = word.replace(/[.,!?;:'"()]/g, '').toLowerCase().trim();
      const isClickable = cleanWord.length >= 2;
      
      return (
        <React.Fragment key={index}>
          {isClickable ? (
            <span
              className={`cursor-pointer hover:text-blue-600 hover:bg-yellow-100 px-1 rounded transition-colors ${
                selectedWord === cleanWord ? 'bg-blue-100 text-blue-700 font-medium' : ''
              }`}
              onClick={() => handleWordClick(word)}
              title={`Click to look up "${cleanWord}"`}
            >
              {word}
            </span>
          ) : (
            <span>{word}</span>
          )}
        </React.Fragment>
      );
    });
  };
  
  const handleNextPage = () => {
    if (currentPageIndex < sampleBookData.pages.length - 1) {
      setCurrentPageIndex(currentPageIndex + 1);
      setSelectedWord("");
      setWordDefinition(null);
    }
  };
  
  const handlePrevPage = () => {
    if (currentPageIndex > 0) {
      setCurrentPageIndex(currentPageIndex - 1);
      setSelectedWord("");
      setWordDefinition(null);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#FFF6EA] to-[#FFFDF9]">
      <div className="w-[80vw] mx-auto py-16 space-y-10">
    
        <header className="flex items-center justify-between">
          <button onClick={()=> navigate(-1)} className="p-2 bg-white rounded-full shadow-md">
            <IoArrowBack />
          </button>

          <h2 className="font-semibold text-gray-800 text-xl">
            {sampleBookData.title}
          </h2>

          <div className="flex gap-3">
            <button className="p-2 bg-white shadow-lg rounded-full ">
              <IoBookmarkOutline size={24} />
            </button>
            <button className="p-2 bg-white rounded-full shadow-lg">
              <IoSettingsOutline />
            </button>
          </div>
        </header>

    
        <div className="flex gap-8 h-[calc(100vh-200px)]">
 
          <div className="flex-1 flex flex-col">
            <div className="bg-white rounded-2xl shadow-xl p-8 leading-relaxed text-gray-700 flex-1 overflow-y-auto">
              <div className="space-y-6">
                <p className="text-lg whitespace-pre-wrap">
                  {renderContent(currentPage.content)}
                </p>
              </div>
            </div>

  
            <div className="flex items-center justify-between mt-8">
              <button 
                onClick={handlePrevPage}
                disabled={currentPageIndex === 0}
                className={`px-6 py-3 rounded-full bg-gradient-to-r from-pink-300 to-rose-300 text-white shadow hover:opacity-90 transition ${
                  currentPageIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                ← Previous Page
              </button>

              <span className="text-sm text-gray-500">
                Page {currentPage.pageNumber} of {sampleBookData.totalPages}
              </span>

              <button
                onClick={handleNextPage}
                disabled={currentPageIndex === sampleBookData.pages.length - 1}
                className={`px-6 py-3 rounded-full text-white shadow hover:opacity-90 transition ${
                  currentPageIndex === sampleBookData.pages.length - 1 ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                style={{
                  background: "linear-gradient(90deg, #213C2D 0%, #98D8C8 100%)",
                }}
              >
                Next Page →
              </button>
            </div>
          </div>

          {/* Right Sidebar - Fixed height container for sticky */}
          <div className="w-80 flex flex-col space-y-6 h-full">
            <div className="sticky top-6 space-y-6">
       
              <WordHelper 
                selectedWord={selectedWord}
                wordDefinition={wordDefinition}
                isLoading={isLoading}
                onClear={() => {
                  setSelectedWord("");
                  setWordDefinition(null);
                }}
              />
              <ReadingTip />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};



const WordHelper = ({ selectedWord, wordDefinition, isLoading, onClear }) => {
    const [isSpeaking,setIsSpeaking] = useState(false)

  const speakWord = () => {
    if (!selectedWord) return;
    
    if ('speechSynthesis' in window) {
      // Cancel any ongoing speech
      speechSynthesis.cancel();
      
      setIsSpeaking(true);
      
      const utterance = new SpeechSynthesisUtterance(selectedWord);
      
      utterance.rate = 0.8;
      utterance.pitch = 1;
      utterance.volume = 1;
      
      const voices = speechSynthesis.getVoices();
      const preferredVoice = voices.find(voice => 
        voice.name.includes('Female') || 
        voice.name.includes('Samantha') || 
        voice.name.includes('Karen')
      );
      
      if (preferredVoice) {
        utterance.voice = preferredVoice;
      }
      
      // Set up event listeners
      utterance.onend = () => {
        setIsSpeaking(false);
      };
      
      utterance.onerror = () => {
        setIsSpeaking(false);
      };
      
      speechSynthesis.speak(utterance);
      
    } else {
      alert("Text-to-speech is not supported in your browser. Please try Chrome, Edge, or Safari.");
    }
  };


  if (!selectedWord) {
    return (
      <div className="bg-white rounded-2xl shadow p-6 space-y-4">
        <div className="flex justify-between items-center">
          <h4 className="text-sm font-medium text-gray-500">Word Helper 📘</h4>
          <button className="text-gray-400 hover:text-gray-600 opacity-0 cursor-default">✕</button>
        </div>

        <h3 className="text-lg font-semibold text-gray-800">Select a word</h3>

        <div className="bg-purple-50 rounded-lg p-3 text-sm text-gray-700">
          Click any word in the story to see its definition
        </div>

        <button
          onClick={speakWord}
          className="flex items-center gap-2 justify-center w-full rounded-full bg-gradient-to-r from-[#213C2D] to-[#98D8C8] text-white py-3 text-sm hover:opacity-90 transition"
        >
          <IoVolumeMedium />
          Hear it
        </button>

        <button className="w-full rounded-full border border-gray-200 py-3 text-sm text-gray-600 hover:bg-gray-50 transition">
          Add to Vocabulary
        </button>
      </div>
    );
  }


  console.log(isSpeaking,'sss')

  return (
    <div className="bg-white rounded-2xl shadow p-6 space-y-4">
      <div className="flex justify-between items-center">
        <h4 className="text-sm font-medium text-gray-500">Word Helper 📘</h4>
        <button 
          onClick={onClear}
          className="text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>
      </div>

      {isLoading ? (
        <>
          <h3 className="text-lg font-semibold text-gray-800 capitalize">{selectedWord}</h3>
          <div className="bg-purple-50 rounded-lg p-3 text-sm text-gray-700">
            <div className="animate-pulse space-y-2">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </div>
          </div>
        </>
      ) : (
        <>
          <h3 className="text-lg font-semibold text-gray-800 capitalize">
            {wordDefinition?.word || selectedWord}
          </h3>

          <div className="bg-purple-50 rounded-lg p-3 text-sm text-gray-700">
            {wordDefinition?.definition || "Definition not available"}
          </div>
        </>
      )}

      <button
        onClick={speakWord}
        className="flex items-center gap-2 justify-center w-full rounded-full bg-gradient-to-r from-[#213C2D] to-[#98D8C8] text-white py-3 text-sm hover:opacity-90 transition"
      >
        <IoVolumeMedium />
       {isSpeaking ? (
<div>
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{animationDelay: '0.1s'}}></div>
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
              </div>
</div>
        ): (
            <div>
<p>Hear it</p>
            </div>
        )}
      </button>

      <button className="w-full rounded-full border border-gray-200 py-3 text-sm text-gray-600 hover:bg-gray-50 transition">
        Add to Vocabulary
      </button>

    </div>
  );
};

const ReadingTip = () => (
  <div className="bg-white rounded-2xl shadow p-6 space-y-2 border border-purple-200">
    <h4 className="flex items-center gap-2 font-semibold text-purple-700">
      💡 Reading Tip
    </h4>
    <p className="text-sm text-gray-600">
      Take your time and imagine the story in your mind. What do you think will
      happen next?
    </p>
  </div>
);

export default ViewBook;