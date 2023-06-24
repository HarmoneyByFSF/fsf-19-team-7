import React, { useState, useEffect } from 'react';
import BudgetGame from './BudgetGame';
import './BudgetGame.css'

const MainIntro = () => {
  const [text, setText] = useState('');
  const fullText =
    "Through immersive gameplay, interactive challenges, and expert guidance, you'll learn to budget, invest wisely, manage risks, and achieve your financial goals.";
  const typingDelay = 100; // Delay between typing each character
  const deletingDelay = 50; // Delay between deleting each character
  const newTextDelay = 2000; // Delay before starting to type again
  const [isGameStarted, setIsGameStarted] = useState(false);
 


  
  useEffect(() => {
    let currentIndex = 0;
    let isDeleting = false;

    const type = () => {
      const currentText = fullText.substring(0, currentIndex);

      setText(currentText);

      if (!isDeleting && currentIndex < fullText.length) {
        currentIndex++;
        setTimeout(type, typingDelay);
      } else if (isDeleting && currentIndex > 0) {
        currentIndex--;
        setTimeout(type, deletingDelay);
      } else if (currentIndex === fullText.length) {
        isDeleting = true;
        setTimeout(type, newTextDelay);
      } else {
        isDeleting = false;
        setTimeout(type, typingDelay);
      }
    };

    setTimeout(type, typingDelay);

    return () => {
      clearTimeout();
    };
  }, []);

  const handleLaunchGame = () => {
    setIsGameStarted(true);
  };

 

  return (
    <>
     {!isGameStarted && (
      <>
    <div className="budget-game">
      <div className="animated-background"></div>
    <div className="flex flex-col items-center justify-center h-screen">
    <div className="typewriter text-white font-bold text-4xl" style={{ fontFamily: 'Roboto, sans-serif' }}>{text}</div>


      <button className="animate-bounce px-4 py-2 bg-green-400 text-white rounded mt-24" onClick={handleLaunchGame}>
        CONTINUE
      </button>
      
    </div>
    </div>
    </>
     )}
    {isGameStarted && <BudgetGame />}
</>
  );
    
   
};

export default MainIntro;
