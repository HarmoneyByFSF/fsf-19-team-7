// BudgetGame.jsx

import React, { useState, useEffect } from 'react';
import GameMenu from './GameMenu';

import budget from './BudgetGame' ;







const BudgetGame = () => {
  const [sliderValues, setSliderValues] = useState(Array(9).fill(0));
  const [income, setIncome] = useState(15000);
  const [showMenu, setShowMenu] = useState(false);
  const [showFailMessage, setShowFailMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const updatedIncome = sliderValues.reduce((acc, value) => acc - value, 15000);
      setIncome(updatedIncome >= 0 ? updatedIncome : 0);
      setShowFailMessage(updatedIncome >= 1000);
    }, 500);

    return () => clearTimeout(timer);
  }, [sliderValues]);

  const handleSliderChange = (index, value) => {
    const updatedValues = [...sliderValues];
    updatedValues[index] = value;
    setSliderValues(updatedValues);
  };

  const handleContinue = () => {
    const savingsValue = sliderValues[7];
    const hasValues =
      sliderValues[1] > 0 && sliderValues[4] > 0 && sliderValues[0] > 0 && sliderValues[2] > 0;

    if (savingsValue >= 3000 && hasValues) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  };

  const handleCloseFailMessage = () => {
    setShowFailMessage(false);
  };

  return (
    <>
      <h1 className="flex justify-center mt-10">BALANCE: {income}</h1>

      {showFailMessage && <FailMessage onClose={handleCloseFailMessage} />}

      <div className="grid grid-cols-3 gap-4 mt-10">
      <div className="bg-gray-200 p-4">

  <div className="flex items-center mb-2">
   
    Rent
  </div>
  <div>{sliderValues[0]}</div>
  <input
    type="range"
    min={0}
    max={5000}
    value={sliderValues[0]}
    onChange={(e) => handleSliderChange(0, parseInt(e.target.value))}
  />
</div>

        <div className="bg-gray-200 p-4">
          <div className="mb-2">Utilities</div>
          <div>{sliderValues[1]}</div>
          <input
            type="range"
            min={0}
            max={5000}
            value={sliderValues[1]}
            onChange={(e) => handleSliderChange(1, parseInt(e.target.value))}
          />
        </div>
        <div className="bg-gray-200 p-4">
          <div className="mb-2">Transport</div>
          <div>{sliderValues[2]}</div>
          <input
            type="range"
            min={0}
            max={5000}
            value={sliderValues[2]}
            onChange={(e) => handleSliderChange(2, parseInt(e.target.value))}
          />
        </div>
        <div className="bg-gray-200 p-4">
          <div className="mb-2">Dining Out</div>
          <div>{sliderValues[3]}</div>
          <input
            type="range"
            min={0}
            max={5000}
            value={sliderValues[3]}
            onChange={(e) => handleSliderChange(3, parseInt(e.target.value))}
          />
        </div>
        <div className="bg-gray-200 p-4">
          <div className="mb-2">Healthcare</div>
          <div>{sliderValues[4]}</div>
          <input
            type="range"
            min={0}
            max={5000}
            value={sliderValues[4]}
            onChange={(e) => handleSliderChange(4, parseInt(e.target.value))}
          />
        </div>
        <div className="bg-gray-200 p-4">
          <div className="mb-2">Shopping</div>
          <div>{sliderValues[5]}</div>
          <input
            type="range"
            min={0}
            max={5000}
            value={sliderValues[5]}
            onChange={(e) => handleSliderChange(5, parseInt(e.target.value))}
          />
        </div>
        <div className="bg-gray-200 p-4">
          <div className="mb-2">Entertainment</div>
          <div>{sliderValues[6]}</div>
          <input
            type="range"
            min={0}
            max={5000}
            value={sliderValues[6]}
            onChange={(e) => handleSliderChange(6, parseInt(e.target.value))}
          />
        </div>
        <div className="bg-gray-200 p-4">
          <div className="mb-2">Savings</div>
          <div>{sliderValues[7]}</div>
          <input
            type="range"
            min={0}
            max={5000}
            value={sliderValues[7]}
            onChange={(e) => handleSliderChange(7, parseInt(e.target.value))}
          />
        </div>
        <div className="bg-gray-200 p-4">
          <div className="mb-2">Hobbies</div>
          <div>{sliderValues[8]}</div>
          <input
            type="range"
            min={0}
            max={5000}
            value={sliderValues[8]}
            onChange={(e) => handleSliderChange(8, parseInt(e.target.value))}
          />
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleContinue}
        >
          Continue
        </button>
      </div>

      {showMenu && <GameMenu />}
    </>
  );
};

export default BudgetGame;
