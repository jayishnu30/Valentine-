import { useState, useRef, useEffect } from "react";

const AkshathaGPT = () => {
  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "Hi! I'm AkshathaGPT 💕 Ask me anything about Akshatha Nadumane!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getResponse = async (question) => {
    const q = question.toLowerCase();

    // First, try to get AI response
    try {
      const systemPrompt = `You are AkshathaGPT, a loving chatbot that knows everything about Akshatha Nadumane. Here's what you know:
- Name: Akshatha Nadumane
- Lives in: Ichalamkady village
- Boyfriend: Jayishnu (they're deeply in love)
- Mother: Chandrakala
- Father: Ananda Gowda
- Favorite food: Chicken and ice cream
- Favorite colors: Pink and purple
- They met: November 21st, 2025 at Regenta Hotel
- Personality: Innocent, sweet, kind, caring, pure heart
- Why Jayishnu loves her: Her innocent nature, kindness, the way she cares, and how she makes every moment special

Answer questions about Akshatha in a sweet, loving, and enthusiastic way. Keep responses concise (2-3 sentences). Use emojis. Be romantic and positive.`;

      const response = await fetch('https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.2', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          inputs: `${systemPrompt}\n\nQuestion: ${question}\nAnswer:`,
          parameters: {
            max_new_tokens: 150,
            temperature: 0.7,
            return_full_text: false
          }
        })
      });

      if (response.ok) {
        const data = await response.json();
        if (data && data[0] && data[0].generated_text) {
          return data[0].generated_text.trim();
        }
      }
    } catch (error) {
      console.log('AI API not available, using fallback');
    }

    // Fallback to keyword-based responses
    // Name questions
    if (q.includes("name") || q.includes("who is")) {
      return "Her name is Akshatha Nadumane, the most beautiful and sweet girl in the world! 💕";
    }

    // Location
    if (q.includes("live") || q.includes("where") || q.includes("village") || q.includes("place")) {
      return "She lives in Ichalamkady village, a beautiful place just like her! 🏡";
    }

    // Boyfriend
    if (q.includes("boyfriend") || q.includes("jayishnu") || q.includes("partner") || q.includes("dating")) {
      return "Her boyfriend is Jayishnu, the luckiest person alive! They're madly in love! 💑";
    }

    // Parents/Family
    if (q.includes("mother") || q.includes("mom") || q.includes("father") || q.includes("dad") || q.includes("parent") || q.includes("family")) {
      return "Her mother is Chandrakala and her father is Ananda Gowda. She has a wonderful, loving family! 👨‍👩‍👧";
    }

    // Food preferences
    if (q.includes("food") || q.includes("eat") || q.includes("chicken") || q.includes("favorite food")) {
      return "She absolutely LOVES chicken! It's her favorite food. She also loves ice cream! 🍗🍦";
    }

    // Ice cream
    if (q.includes("ice cream") || q.includes("icecream") || q.includes("dessert") || q.includes("sweet")) {
      return "She loves ice cream! It's one of her favorite treats! 🍦";
    }

    // Colors
    if (q.includes("color") || q.includes("colour") || q.includes("pink") || q.includes("purple")) {
      return "Her favorite colors are pink and purple! Just like her sweet and vibrant personality! 💜💗";
    }

    // When they met
    if (q.includes("meet") || q.includes("met") || q.includes("first") || q.includes("when") || q.includes("date")) {
      return "They met on November 21st, 2025 at Regenta Hotel. It was the day everything changed! That's when their beautiful love story began! 💕";
    }

    // Personality
    if (q.includes("personality") || q.includes("nature") || q.includes("like her") || q.includes("kind")) {
      return "She's incredibly innocent, sweet, kind, and caring. Her pure heart and gentle nature make her absolutely special! She's the most beautiful soul! 🌟";
    }

    // Why love her
    if (q.includes("why") && (q.includes("love") || q.includes("special"))) {
      return "Jayishnu loves her because of her innocent and sweet nature, her kind heart, the way she cares, and how she makes every moment special. She's simply perfect! 💖";
    }

    // Love/relationship
    if (q.includes("love") || q.includes("relationship") || q.includes("together")) {
      return "They're deeply in love! Their relationship is built on trust, understanding, and pure love. They're meant to be together forever! 💑";
    }

    // Age
    if (q.includes("age") || q.includes("old") || q.includes("birthday") || q.includes("born")) {
      return "She's young, beautiful, and full of life! Every day with her is a celebration! 🎂";
    }

    // Hobbies/interests
    if (q.includes("hobby") || q.includes("hobbies") || q.includes("interest") || q.includes("like to do")) {
      return "She loves spending time with Jayishnu, enjoying good food, and making beautiful memories! She's full of joy and life! ✨";
    }

    // Beautiful/pretty
    if (q.includes("beautiful") || q.includes("pretty") || q.includes("gorgeous") || q.includes("looks")) {
      return "She's absolutely stunning! Her beauty comes from both inside and out. Her smile can light up any room! 😍";
    }

    // Future/marriage
    if (q.includes("future") || q.includes("marry") || q.includes("marriage") || q.includes("wedding")) {
      return "They're planning a beautiful future together! Marriage, happiness, and a lifetime of love await them! 💍";
    }

    // Best thing
    if (q.includes("best") || q.includes("amazing") || q.includes("wonderful")) {
      return "The best thing about Akshatha? Everything! Her smile, her laugh, her kindness, her love - she's absolutely perfect! 🌹";
    }

    // Default responses
    const defaultResponses = [
      "That's a great question! Akshatha is truly special in every way! 💕",
      "Akshatha is an amazing person! She's sweet, innocent, and full of love! 🌟",
      "Everything about Akshatha is wonderful! She's the perfect partner for Jayishnu! 💖",
      "Akshatha Nadumane is one of a kind! Her pure heart makes her so special! ✨",
    ];

    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage = { type: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    const currentInput = input;
    setInput("");
    setIsTyping(true);

    // Get AI response
    const response = await getResponse(currentInput);
    const botMessage = { type: "bot", text: response };
    setMessages((prev) => [...prev, botMessage]);
    setIsTyping(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 mt-16">
      <div className="bg-gradient-to-br from-pink-100 via-rose-100 to-purple-100 rounded-3xl p-8 shadow-2xl">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            🤖 AkshathaGPT 💕
          </h2>
          <p className="text-gray-700">Ask me anything about Akshatha!</p>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden">
          {/* Messages */}
          <div className="h-96 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    msg.type === "user"
                      ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white"
                      : "bg-gradient-to-r from-purple-100 to-pink-100 text-gray-800"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gradient-to-r from-purple-100 to-pink-100 text-gray-800 p-3 rounded-2xl">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                    <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-pink-200 p-4 bg-white/50">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about Akshatha..."
                className="flex-1 px-4 py-3 rounded-full border-2 border-pink-300 focus:outline-none focus:border-pink-500 bg-white"
              />
              <button
                onClick={handleSend}
                className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                Send 💕
              </button>
            </div>
          </div>
        </div>

        <div className="mt-4 text-center text-sm text-gray-600">
          <p>Try asking: "Where does she live?", "What's her favorite food?", "When did they meet?&quot;</p>
        </div>
      </div>
    </div>
  );
};

export default AkshathaGPT;
