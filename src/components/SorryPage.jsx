import { useState, useEffect } from "react";

const hearts = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  delay: `${Math.random() * 6}s`,
  duration: `${5 + Math.random() * 5}s`,
  size: `${16 + Math.random() * 18}px`,
}));

const messages = [
  "I am sorry, Akshatha. I really am 💔",
  "I know I hurt you and that kills me inside 😔",
  "You never deserved any of this pain 🌸",
  "Seeing you sad because of me breaks my heart 💜",
  "I love you more than words can ever say 🌹",
  "Please give me a chance to make it right ❤️",
];

const SorryPage = ({ onContinue }) => {
  const [step, setStep] = useState(0);
  const [visible, setVisible] = useState(true);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (step < messages.length - 1) {
      const t = setTimeout(() => {
        setVisible(false);
        setTimeout(() => {
          setStep((s) => s + 1);
          setVisible(true);
        }, 600);
      }, 3000);
      return () => clearTimeout(t);
    } else {
      setTimeout(() => setShowButton(true), 1000);
    }
  }, [step]);

  return (
    <div
      className="fixed inset-0 z-[300] flex flex-col items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0d0010 0%, #1a0020 40%, #2d0035 70%, #4a0050 100%)",
      }}
    >
      {/* Falling hearts */}
      {hearts.map((h) => (
        <div
          key={h.id}
          className="absolute pointer-events-none"
          style={{
            left: h.left,
            top: "-40px",
            fontSize: h.size,
            animation: `petalFall ${h.duration} ${h.delay} linear infinite`,
            opacity: 0.7,
          }}
        >
          💜
        </div>
      ))}

      {/* Glowing orb background */}
      <div
        className="absolute w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(180,0,255,0.15) 0%, transparent 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      <div className="relative z-10 text-center px-8 max-w-xl w-full overflow-y-auto max-h-screen py-6">
        {/* Broken heart animation */}
        <div className="text-6xl mb-4" style={{ animation: "pulse 2s ease-in-out infinite" }}>
          💜
        </div>

        <h1
          className="text-3xl md:text-4xl font-bold text-white mb-3"
          style={{ textShadow: "0 0 30px rgba(200,100,255,0.8)" }}
        >
          I&apos;m So Sorry, Baby
        </h1>

        {/* Cycling apology messages */}
        <div className="h-12 flex items-center justify-center mb-5">
          <p
            className="text-lg md:text-xl text-purple-200 transition-all duration-500"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(10px)",
            }}
          >
            {messages[step]}
          </p>
        </div>

        {/* Personal apology letter */}
        <div
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 mb-6 text-left border border-purple-400/30"
          style={{ boxShadow: "0 0 30px rgba(180,0,255,0.2)" }}
        >
          <p className="text-purple-100 text-sm leading-relaxed mb-2">
            My dearest Akshatha,
          </p>
          <p className="text-purple-200 text-xs leading-relaxed mb-2">
            I am sorry. I know I hurt you, and I am really, truly sorry about
            that. There is no excuse for making you feel the way I did, and I
            hate myself for it. You are the most innocent, pure-hearted person
            I have ever known — and you deserved none of the pain I caused you.
          </p>
          <p className="text-purple-200 text-xs leading-relaxed mb-2">
            Seeing you sad because of me is the worst feeling in the world. You
            are my everything, Akshatha. Your smile is what makes my days
            beautiful. Your voice is what calms my heart. And knowing that I am
            the reason your eyes have tears right now — that breaks me
            completely.
          </p>
          <p className="text-purple-200 text-xs leading-relaxed mb-2">
            I am not asking you to forget. I am just asking you to believe that
            I love you with every single piece of my heart, and I will spend
            every day making sure you never feel this way again. You are too
            precious, too beautiful, too kind to ever be hurt — especially by
            me.
          </p>
          <p className="text-purple-200 text-xs leading-relaxed mb-3">
            Please forgive me, baby. My world feels empty without your smile.
            You are my home, my peace, my reason. I am so deeply sorry. 🌸
          </p>
          <p className="text-purple-100 text-xs font-semibold">
            Yours always, no matter what — Jay ❤️
          </p>
        </div>

        {showButton && (
          <div
            className="transition-all duration-700 pb-4"
            style={{ opacity: showButton ? 1 : 0 }}
          >
            <p className="text-purple-300 text-sm mb-3 animate-pulse">
              I made something special for you...
            </p>
            <button
              onClick={onContinue}
              className="px-10 py-4 rounded-full text-white font-bold text-lg shadow-2xl transition-all duration-300 transform hover:scale-110"
              style={{
                background:
                  "linear-gradient(135deg, #9b59b6, #e91e8c, #9b59b6)",
                boxShadow: "0 0 30px rgba(155,89,182,0.6)",
              }}
            >
              See Your Surprise 💝
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SorryPage;
