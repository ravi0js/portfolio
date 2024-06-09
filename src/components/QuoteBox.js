import React, { useState, useEffect } from 'react';
import quotes from './assets/quotes.json';


function QuoteBox() {
  const [currentQuote, setCurrentQuote] = useState({});
  const [displayedQuote, setDisplayedQuote] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const getRandomQuote = () => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setCurrentQuote(quotes[randomIndex]);
      setIsAnimating(true); // Start animation on quote change
      setCurrentIndex(0); // Reset currentIndex
      setDisplayedQuote(''); // Reset displayedQuote
    };

    const intervalId = setInterval(getRandomQuote, 10000); // Update every 10 seconds

    getRandomQuote();

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    const typeNextLetter = () => {
      if (currentIndex < currentQuote.quote.length) {
        setDisplayedQuote(prev => prev + currentQuote.quote[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      } else {
        setIsAnimating(false); // Stop animation after quote is fully typed
      }
    };

    if (isAnimating) {
      const timeoutId = setTimeout(typeNextLetter, 25); // Type each letter every 50 milliseconds
      return () => clearTimeout(timeoutId);
    }
  }, [isAnimating, currentQuote, currentIndex]);

  return (
    <div
      className={`bg-blue-400 p-4  flex rounded flex-row-reverse shadow-md ${
        isAnimating ? 'animate-fade' : ''
      }`}
    >
      <p className='ml-10 text-white' >{currentQuote.author} </p>
      <p className="font-bold text-white"> {displayedQuote}✒</p>
      {currentQuote.author && (
        <p className="text-sm italic mt-2"></p>
      )}
      
    </div>
  );
}

export default QuoteBox;
