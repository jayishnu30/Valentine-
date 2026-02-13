import { useState } from "react";

const ValentineLetter = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-4xl mx-auto px-6 mt-16">
      <div className="bg-gradient-to-br from-red-100 via-pink-100 to-rose-100 rounded-3xl p-8 shadow-2xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
            💌 A Special Valentine's Letter For You 💌
          </h2>
          <p className="text-lg text-gray-700">
            My heart has something to tell you...
          </p>
        </div>

        {!isOpen ? (
          <div className="flex flex-col items-center">
            <div 
              className="relative cursor-pointer transform transition-all hover:scale-105"
              onClick={() => setIsOpen(true)}
            >
              {/* Envelope */}
              <div className="relative w-80 h-56">
                {/* Envelope body */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-pink-500 rounded-lg shadow-2xl">
                  <div className="absolute inset-4 bg-white/20 rounded"></div>
                </div>
                
                {/* Envelope flap */}
                <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-br from-red-500 to-pink-600 transform origin-top transition-transform duration-700 hover:-translate-y-2"
                  style={{
                    clipPath: 'polygon(0 0, 50% 60%, 100% 0)',
                  }}
                >
                </div>

                {/* Heart seal */}
                <div className="absolute top-16 left-1/2 transform -translate-x-1/2 text-6xl animate-pulse">
                  ❤️
                </div>

                {/* Letter peeking out */}
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-64 h-40 bg-gradient-to-br from-pink-50 to-white rounded shadow-lg">
                  <div className="p-4 text-center">
                    <p className="text-sm text-gray-600 italic">To My Beautiful Baby...</p>
                    <div className="mt-2 space-y-1">
                      <div className="h-2 bg-pink-200 rounded w-3/4 mx-auto"></div>
                      <div className="h-2 bg-pink-200 rounded w-full mx-auto"></div>
                      <div className="h-2 bg-pink-200 rounded w-2/3 mx-auto"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-8 text-lg font-semibold text-red-600 animate-pulse">
              Click the envelope to open your letter 💕
            </p>
          </div>
        ) : (
          <div className="animate-scaleIn">
            <div className="bg-gradient-to-br from-pink-50 to-white rounded-2xl p-8 md:p-12 shadow-xl border-4 border-pink-200">
              {/* Letter header */}
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">💝</div>
                <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent mb-2">
                  Happy Valentine's Day, My Beautiful Baby
                </h3>
                <p className="text-sm text-gray-500 italic">February 14, 2026</p>
              </div>

              {/* Letter content */}
              <div className="space-y-6 text-lg text-gray-800 leading-relaxed">
                <p className="font-semibold text-xl text-center text-pink-600">
                  My Dearest Akshatha,
                </p>

                <p>
                  As I write this letter, my heart is overflowing with emotions that words can barely capture. Today, on our first Valentine's Day together, I want you to know just how incredibly special you are to me and how deeply you've changed my life.
                </p>

                <p>
                  From the moment you entered my world, everything transformed. Colors became brighter, music sounded sweeter, and life gained a meaning I never knew existed. You didn't just become a part of my life – you became my life, my reason to smile, my source of happiness, and my greatest blessing.
                </p>

                <p>
                  Baby, when I'm with you, I feel complete. Your innocent smile melts away all my worries. Your gentle touch brings me peace. Your loving words fill my heart with joy. The way you care for me, understand me, and love me makes me feel like the luckiest person alive.
                </p>

                <p>
                  Every moment we've shared – from our first meeting at Regenta Hotel on November 21st to every laugh, every conversation, every precious second together – has been a treasure I hold close to my heart. You've given me memories that I'll cherish forever.
                </p>

                <p className="font-semibold text-pink-700">
                  Today, I want to make you a promise from the depths of my heart:
                </p>

                <p className="pl-6 border-l-4 border-pink-400 italic">
                  I promise to love you more with each passing day. I promise to be there for you through every joy and every challenge. I promise to make you smile, to protect your heart, and to cherish every moment we share. I promise to celebrate not just this Valentine's Day, but every single Valentine's Day for the rest of our lives together.
                </p>

                <p>
                  Baby, I don't want to spend a single Valentine's Day without you. I want to grow old with you, creating beautiful memories year after year. I want to celebrate our love not just on February 14th, but every single day of our forever.
                </p>

                <p>
                  You are my today and all of my tomorrows. You are my dream come true, my answered prayer, my soulmate. Your pure heart, your kind nature, your beautiful soul – everything about you makes me fall deeper in love with you every single day.
                </p>

                <p className="font-bold text-xl text-center text-red-600">
                  I love you more than words can express, more than actions can show, and more than you could ever imagine.
                </p>

                <p>
                  Thank you for being mine. Thank you for loving me. Thank you for making my life so incredibly beautiful. You are my forever Valentine, my eternal love, my everything.
                </p>

                <p className="text-center font-semibold text-2xl text-pink-600 mt-8">
                  Happy Valentine's Day, My Love! 💕
                </p>

                <div className="text-center mt-8 space-y-2">
                  <p className="text-xl font-bold">Forever and Always Yours,</p>
                  <p className="text-2xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                    Your Jayishnu ❤️
                  </p>
                </div>
              </div>

              {/* Decorative hearts */}
              <div className="flex justify-center gap-4 mt-8 text-4xl">
                <span className="animate-pulse">💕</span>
                <span className="animate-pulse" style={{ animationDelay: '0.2s' }}>💖</span>
                <span className="animate-pulse" style={{ animationDelay: '0.4s' }}>💗</span>
                <span className="animate-pulse" style={{ animationDelay: '0.6s' }}>💝</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ValentineLetter;
