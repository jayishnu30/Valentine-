import { useState } from "react";
import lovesvg from "./assets/All You Need Is Love SVG Cut File.svg";
import lovesvg2 from "./assets/Love In The Air SVG Cut File.svg";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

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
    <div className="overflow-y-auto flex flex-col items-center justify-center pt-4 min-h-screen selection:bg-rose-600 selection:text-white text-zinc-900">
      {yesPressed ? (
        <div className="py-8 pb-20">
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" className="mx-auto" />
          <div className="text-4xl md:text-6xl font-bold my-4 text-center">
            I Love You Akshatha! 💕
          </div>
          <div className="max-w-2xl mx-auto px-6 text-center space-y-4 text-lg md:text-xl leading-relaxed">
            <p className="font-semibold text-2xl">Akshatha, my love,</p>
            <p>From the moment you came into my life, everything began to feel more beautiful and meaningful. You didn&apos;t just enter my world — you changed it in the most gentle and magical way. Loving you feels natural, peaceful, and right, like my heart always knew it was waiting for you.</p>
            <p>What I love most about you is your innocence and your kind nature. The way you care, the way you understand without words, and the purity in your heart make you so incredibly special. Your smile has the power to calm my worries, and your presence alone brings me peace. You make the simplest moments feel precious just by being you.</p>
            <p>Since you became a part of my life, I see the world differently. Life feels warmer, happier, and more hopeful. You inspire me to be a better person every single day, and I&apos;m endlessly grateful for your love, your patience, and your trust in me.</p>
            <p>I don&apos;t just love you for who you are today — I love the future I see with you. I want to walk beside you through every joy, every challenge, every dream. I want to protect your heart, respect your soul, and love you more deeply with each passing day.</p>
            <p className="font-semibold text-xl">Akshatha, you are not just my love — you are my forever. Will you marry me and choose to spend your life with me?</p>
            <p className="font-bold text-2xl">Forever yours, Jay ❤️</p>
          </div>
        </div>
      ) : (
        <>
          <img
            src={lovesvg}
            className="fixed animate-pulse top-10 md:left-24 left-6 md:w-40 w-28"
          />
          <img
            src={lovesvg2}
            className="fixed bottom-16 -z-10 animate-pulse md:right-24 right-10 md:w-40 w-32"
          />
          <img
            className="h-[230px] rounded-lg shadow-lg"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.webp"
          />
          <h1 className="text-4xl md:text-6xl my-4 text-center">
            Akshatha, Will you be my Valentine?
          </h1>
          <div className="flex flex-wrap justify-center gap-2 items-center">
            <button
              className={`bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mr-4`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" bg-rose-500 hover:bg-rose-600 rounded-lg text-white font-bold py-2 px-4"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
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
