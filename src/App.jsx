import { useState, useEffect } from "react";
import lovesvg from "./assets/All You Need Is Love SVG Cut File.svg";
import lovesvg2 from "./assets/Love In The Air SVG Cut File.svg";

// Countdown Timer Component
const CountdownTimer = () => {
  const [timeElapsed, setTimeElapsed] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const startDate = new Date("2025-11-21T00:00:00");

    const updateTimer = () => {
      const now = new Date();
      const diff = now - startDate;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeElapsed({ days, hours, minutes, seconds });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-6 mt-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
        Our Journey Together ⏰
      </h2>
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
        <p className="text-center text-xl md:text-2xl mb-6 font-semibold">
          Since November 21, 2025
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center bg-gradient-to-br from-pink-100 to-rose-100 rounded-2xl p-6 shadow-md">
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
              {timeElapsed.days}
            </div>
            <div className="text-sm md:text-base text-gray-600 mt-2 font-semibold">Days</div>
          </div>
          <div className="text-center bg-gradient-to-br from-pink-100 to-rose-100 rounded-2xl p-6 shadow-md">
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
              {timeElapsed.hours}
            </div>
            <div className="text-sm md:text-base text-gray-600 mt-2 font-semibold">Hours</div>
          </div>
          <div className="text-center bg-gradient-to-br from-pink-100 to-rose-100 rounded-2xl p-6 shadow-md">
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
              {timeElapsed.minutes}
            </div>
            <div className="text-sm md:text-base text-gray-600 mt-2 font-semibold">Minutes</div>
          </div>
          <div className="text-center bg-gradient-to-br from-pink-100 to-rose-100 rounded-2xl p-6 shadow-md">
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
              {timeElapsed.seconds}
            </div>
            <div className="text-sm md:text-base text-gray-600 mt-2 font-semibold">Seconds</div>
          </div>
        </div>
        <p className="text-center text-lg md:text-xl mt-6 text-gray-700 font-medium">
          Every moment with you is a treasure 💕
        </p>
      </div>
    </div>
  );
};

// Typewriter Effect Component
const TypewriterText = ({ text, delay = 50 }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, delay]);

  return <span>{displayText}</span>;
};

// 100 Reasons Component
const LoveReasons = () => {
  const reasons = [
    "Your beautiful smile that lights up my world",
    "The way you care for everyone around you",
    "Your innocent and pure heart",
    "How you understand me without words",
    "Your kindness that knows no bounds",
    "The peace I feel when I'm with you",
    "Your gentle and loving nature",
    "How you make ordinary moments special",
    "Your unwavering support and trust",
    "The way you inspire me every day",
    "Your beautiful eyes that speak volumes",
    "How patient and understanding you are",
    "Your adorable laugh that makes me smile",
    "The warmth of your presence",
    "How you believe in me",
    "Your compassionate soul",
    "The way you listen to me",
    "Your thoughtfulness in everything",
    "How you make me want to be better",
    "Your strength and resilience",
    "The comfort of your embrace",
    "How you brighten my darkest days",
    "Your genuine and honest nature",
    "The way you love unconditionally",
    "Your beautiful personality",
    "How you make me feel safe",
    "Your positive outlook on life",
    "The way you care about my dreams",
    "Your sweet and gentle voice",
    "How you never give up on us",
    "Your loyalty and dedication",
    "The way you make me laugh",
    "Your wisdom beyond your years",
    "How you accept me as I am",
    "Your beautiful soul",
    "The way you show your love",
    "Your creativity and imagination",
    "How you make every day better",
    "Your respect for others",
    "The way you handle challenges",
    "Your forgiving nature",
    "How you celebrate my successes",
    "Your humility and grace",
    "The way you make me feel loved",
    "Your determination and drive",
    "How you bring out the best in me",
    "Your sense of humor",
    "The way you care for your family",
    "Your honesty and integrity",
    "How you make me feel special",
    "Your beautiful heart",
    "The way you surprise me",
    "Your patience with my flaws",
    "How you make me feel complete",
    "Your loving gestures",
    "The way you remember little things",
    "Your empathy and understanding",
    "How you make me feel valued",
    "Your positive energy",
    "The way you encourage me",
    "Your beautiful spirit",
    "How you make life meaningful",
    "Your selflessness",
    "The way you show gratitude",
    "Your open-mindedness",
    "How you make me feel confident",
    "Your gentle touch",
    "The way you communicate",
    "Your respect for my opinions",
    "How you make me feel heard",
    "Your beautiful presence",
    "The way you handle emotions",
    "Your maturity and wisdom",
    "How you make me feel important",
    "Your loving words",
    "The way you show affection",
    "Your understanding nature",
    "How you make me feel cherished",
    "Your beautiful mind",
    "The way you support my goals",
    "Your patience and kindness",
    "How you make me feel appreciated",
    "Your loving actions",
    "The way you make me smile",
    "Your caring nature",
    "How you make me feel blessed",
    "Your beautiful laugh",
    "The way you show compassion",
    "Your gentle spirit",
    "How you make me feel grateful",
    "Your loving presence",
    "The way you make me feel alive",
    "Your beautiful energy",
    "How you make me feel hopeful",
    "Your sweet nature",
    "The way you make me feel lucky",
    "Your beautiful essence",
    "How you make me feel whole",
    "Your loving soul",
    "The way you complete me",
    "And simply because you are YOU! 💕"
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 mt-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
        100 Reasons Why I Love You 💝
      </h2>
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex items-start space-x-3 p-3 rounded-xl hover:bg-pink-50 transition-colors"
            >
              <span className="text-pink-500 font-bold text-lg flex-shrink-0">
                {index + 1}.
              </span>
              <span className="text-gray-700">{reason}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Surprise Popup Component
const SurprisePopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 10000); // Show after 10 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-[100] bg-black/50 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl p-8 max-w-md mx-4 shadow-2xl transform animate-scaleIn">
        <div className="text-center">
          <div className="text-6xl mb-4 animate-bounce">💕</div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
            Hey Beautiful! 
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            I know you&apos;re still reading... Just wanted to remind you that you mean the world to me. Every second with you is a blessing. I can&apos;t wait to spend forever with you! 🌹
          </p>
          <button
            onClick={() => setShowPopup(false)}
            className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            I Love You Too! ❤️
          </button>
        </div>
      </div>
    </div>
  );
};

// Floating Hearts Component
const FloatingHearts = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute text-4xl animate-float opacity-70"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${8 + Math.random() * 4}s`,
          }}
        >
          {["❤️", "💕", "💖", "💗", "💝"][Math.floor(Math.random() * 5)]}
        </div>
      ))}
    </div>
  );
};

// Confetti Component
const Confetti = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 animate-confetti"
          style={{
            left: `${Math.random() * 100}%`,
            top: "-10px",
            backgroundColor: ["#ff69b4", "#ff1493", "#ff69b4", "#ffc0cb", "#ff6b9d"][i % 5],
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );
};

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  // Add your photos here - put them in src/assets folder
  const photos = [
    { src: "/photo1.jpg", caption: "You light up my world ✨" },
    { src: "/photo3.jpg", caption: "Every moment with you is precious 💫" },
    { src: "/photo4.jpg", caption: "My heart belongs to you forever 💕" },
    { src: "/photo5.jpg", caption: "Together is my favorite place to be 🌹" },
    { src: "/photo6.jpg", caption: "You make my heart skip a beat 💓" },
    { src: "/photo7.jpg", caption: "Forever grateful for you 🌟" },
  ];

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "Really sure?",
      "Think again!",
      "Last chance!",
      "Surely not?",
      "You might regret this!",
      "Give it another thought!",
      "Are you absolutely certain?",
      "This could be a mistake!",
      "Have a heart!",
      "Don't be so cold!",
      "Change of heart?",
      "Wouldn't you reconsider?",
      "Is that your final answer?",
      "You're breaking my heart ;(",
      "Is that your final answer?",
      "You're breaking my heart ;(",
      "Plsss? :( You're breaking my heart",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="overflow-y-auto flex flex-col items-center justify-center pt-4 min-h-screen selection:bg-rose-600 selection:text-white text-zinc-900 bg-gradient-to-br from-pink-50 via-rose-50 to-red-50 relative">
      <FloatingHearts />
      <SurprisePopup />
      {yesPressed ? (
        <>
          <Confetti />
          <div className="py-8 pb-20 relative z-10">
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" className="mx-auto rounded-full shadow-2xl border-4 border-pink-300" />
          <div className="text-4xl md:text-6xl font-bold my-4 text-center bg-gradient-to-r from-pink-500 via-red-500 to-rose-500 bg-clip-text text-transparent animate-pulse">
            I Love You Akshatha! 💕
          </div>
          <div className="max-w-2xl mx-auto px-6 text-center space-y-4 text-lg md:text-xl leading-relaxed bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
            <p className="font-semibold text-2xl">
              <TypewriterText text="Akshatha, my love," delay={80} />
            </p>
            <p>
              <TypewriterText 
                text="From the moment you came into my life, everything began to feel more beautiful and meaningful. You didn't just enter my world — you changed it in the most gentle and magical way. Loving you feels natural, peaceful, and right, like my heart always knew it was waiting for you." 
                delay={30} 
              />
            </p>
            <p>
              <TypewriterText 
                text="What I love most about you is your innocence and your kind nature. The way you care, the way you understand without words, and the purity in your heart make you so incredibly special. Your smile has the power to calm my worries, and your presence alone brings me peace. You make the simplest moments feel precious just by being you." 
                delay={30} 
              />
            </p>
            <p>
              <TypewriterText 
                text="Since you became a part of my life, I see the world differently. Life feels warmer, happier, and more hopeful. You inspire me to be a better person every single day, and I'm endlessly grateful for your love, your patience, and your trust in me." 
                delay={30} 
              />
            </p>
            <p>
              <TypewriterText 
                text="I don't just love you for who you are today — I love the future I see with you. I want to walk beside you through every joy, every challenge, every dream. I want to protect your heart, respect your soul, and love you more deeply with each passing day." 
                delay={30} 
              />
            </p>
            <p className="font-semibold text-xl bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
              <TypewriterText 
                text="Akshatha, you are not just my love — you are my forever. Will you marry me and choose to spend your life with me?" 
                delay={40} 
              />
            </p>
            <p className="font-bold text-2xl bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
              <TypewriterText text="Forever yours, Jay ❤️" delay={80} />
            </p>
          </div>

          {/* 100 Reasons List */}
          <LoveReasons />

          {/* Countdown Timer */}
          <CountdownTimer />

          {/* Voice Message */}
          <div className="max-w-4xl mx-auto px-6 mt-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
              A Message From My Heart 🎙️
            </h2>
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
              <div className="flex flex-col items-center">
                <div className="text-6xl mb-4">💝</div>
                <p className="text-center text-gray-700 mb-6 text-lg">
                  Press play to hear something special...
                </p>
                <audio controls className="w-full max-w-md">
                  <source src="/voice-message.mp3" type="audio/mpeg" />
                  <source src="/voice-message.m4a" type="audio/mp4" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            </div>
          </div>

          {/* Video Section */}
          <div className="max-w-4xl mx-auto px-6 mt-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
              Our Story in Motion 🎬
            </h2>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white/90 backdrop-blur-sm p-4">
              <video
                className="w-full rounded-xl"
                controls
                autoPlay
                loop
                muted
              >
                <source src="/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Photo Gallery */}
          <div className="max-w-6xl mx-auto px-6 mt-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
              Our Beautiful Moments Together 💖
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {photos.map((photo, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white/90 backdrop-blur-sm"
                >
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-600/90 via-rose-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white text-lg font-semibold p-4 w-full">
                      {photo.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          </div>
        </>
      ) : (
        <div className="relative z-10 flex flex-col items-center justify-center">
          <img
            src={lovesvg}
            className="fixed animate-pulse top-10 md:left-24 left-6 md:w-40 w-28"
          />
          <img
            src={lovesvg2}
            className="fixed bottom-16 -z-10 animate-pulse md:right-24 right-10 md:w-40 w-32"
          />
          <img
            className="h-[230px] rounded-lg shadow-lg mx-auto"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.webp"
          />
          <h1 className="text-4xl md:text-6xl my-4 text-center bg-gradient-to-r from-pink-600 via-rose-600 to-red-600 bg-clip-text text-transparent font-bold px-4">
            Akshatha, Will you be my Valentine?
          </h1>
          <div className="flex flex-wrap justify-center gap-2 items-center">
            <button
              className={`bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold py-2 px-4 rounded-lg mr-4 shadow-lg hover:shadow-xl transition-all transform hover:scale-110`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 rounded-lg text-white font-bold py-2 px-4 shadow-lg hover:shadow-xl transition-all"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

const Footer = () => {
  return (
    <a
      className="fixed bottom-2 right-2 backdrop-blur-md opacity-80 hover:opacity-95 border p-1 rounded border-rose-300"
      href="https://github.com/jayishnu30/Valentine-"
      target="__blank"
    >
      Made with{" "}
      <span role="img" aria-label="heart">
        Love By Your Baby Boy❤️ 
      </span>
    </a>
  );
};
