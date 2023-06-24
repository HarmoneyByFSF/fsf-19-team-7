import React, { useState, useEffect } from "react";
import GameMenu from "./GameMenu";
import rent from "../assets/rent.png";
import entertainment from "../assets/entertainment.png";
import healthcare from "../assets/healthcare.png";
import hobbies from "../assets/hobbies2.png";
import saving from "../assets/saving.png";
import shopping from "../assets/shopping2.png";
import utilities from "../assets/utilities2.png";
import transport from "../assets/transport.png";
import dining from "../assets/dining.png";
import "./BudgetGame.css";

const BudgetGame = () => {
  const [sliderValues, setSliderValues] = useState(Array(9).fill(0));
  const [income, setIncome] = useState(15000);
  const [showMenu, setShowMenu] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [Message, setMessage] = useState("TRY AGAIN?");
  const [showModal, setShowModal] = useState(false);
  const [showExpense, setExpense] = useState("");
  const [total, setTotal] = useState("");
  const [showSaving, setSaving] = useState("");
  const [showHobbies, setHobbies] = useState("");
  const [showEntertain, setEntertain] = useState("");
  const [showRent, setRent] = useState("");
  const [showBill, setBill] = useState("");
  const [showTransport, setTransport] = useState("");
  const [showFood, setFood] = useState("");
  const [showHealth, setHealth] = useState("");
  const [showShop, setShop] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      const updatedIncome = sliderValues.reduce(
        (acc, value) => acc - value,
        15000
      );
      setIncome(updatedIncome >= 0 ? updatedIncome : 0);
      setShowMessage(updatedIncome >= 1000);
    }, 500);

    return () => clearTimeout(timer);
  }, [sliderValues]);

  const handleSliderChange = (index, value) => {
    const updatedValues = [...sliderValues];
    updatedValues[index] = value;
    setSliderValues(updatedValues);
  };

  const handleContinue = () => {
    const totalExpenses = sliderValues.reduce((acc, value) => acc + value, 0);
    const total = 15000 - totalExpenses;
    setExpense(totalExpenses);
    setShowModal(true);
    setTotal(total);
    setFood(sliderValues[3]);
    setTransport(sliderValues[2]);
    setBill(sliderValues[1]);
    setRent(sliderValues[0]);
    setHealth(sliderValues[4]);
    setShop(sliderValues[5]);
    setEntertain(sliderValues[6]);
    setSaving(sliderValues[7]);
    setHobbies(sliderValues[8]);
    
  };

  return (
    <>
      <div className="budget-game">
        <div className="animated-background">
          <h1
            className="flex justify-center mt-10"
            style={{ fontSize: "24px", fontWeight: "bold", color: "white" }}
          >
            BALANCE: RS <span style={{ marginLeft: "8px" }}>{income}</span>
          </h1>

          

          <div
            className="grid grid-cols-3 gap-4 mt-10 justify-center items-center 
"
          >
            <div className=" p-4">
              <div className="flex items-center">
                <img src={rent} alt="Rent" className="mr-2 w-8 h-auto" />
                <span
                  style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  Rent
                </span>
              </div>
              <div>RS {sliderValues[0]}</div>
              <input
                type="range"
                min={0}
                max={5000}
                value={sliderValues[0]}
                onChange={(e) =>
                  handleSliderChange(0, parseInt(e.target.value))
                }
              />
            </div>
            <div className="p-4">
              <div className="flex items-center">
                <img src={utilities} alt="Rent" className="mr-2 w-8 h-auto" />
                <span
                  style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  Utilities
                </span>
              </div>
              <div>RS {sliderValues[1]}</div>
              <input
                type="range"
                min={0}
                max={5000}
                value={sliderValues[1]}
                onChange={(e) =>
                  handleSliderChange(1, parseInt(e.target.value))
                }
              />
            </div>
            <div className=" p-4">
              <div className="flex items-center">
                <img src={transport} alt="Rent" className="mr-2 w-8 h-auto" />
                <span
                  style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  Transport
                </span>
              </div>
              <div>RS {sliderValues[2]}</div>
              <input
                type="range"
                min={0}
                max={5000}
                value={sliderValues[2]}
                onChange={(e) =>
                  handleSliderChange(2, parseInt(e.target.value))
                }
              />
            </div>
            <div className=" p-4">
              <div className="flex items-center">
                <img src={dining} alt="Rent" className="mr-2 w-8 h-auto" />
                <span
                  style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  Dining Out
                </span>
              </div>
              <div>RS {sliderValues[3]}</div>
              <input
                type="range"
                min={0}
                max={5000}
                value={sliderValues[3]}
                onChange={(e) =>
                  handleSliderChange(3, parseInt(e.target.value))
                }
              />
            </div>
            <div className=" p-4">
              <div className="flex items-center">
                <img src={healthcare} alt="Rent" className="mr-2 w-8 h-auto" />
                <span
                  style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  Health Care
                </span>
              </div>
              <div>RS {sliderValues[4]}</div>
              <input
                type="range"
                min={0}
                max={5000}
                value={sliderValues[4]}
                onChange={(e) =>
                  handleSliderChange(4, parseInt(e.target.value))
                }
              />
            </div>
            <div className="p-4">
              <div className="flex items-center">
                <img src={shopping} alt="Rent" className="mr-2 w-8 h-auto" />
                <span
                  style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  Shopping
                </span>
              </div>
              <div>RS {sliderValues[5]}</div>
              <input
                type="range"
                min={0}
                max={5000}
                value={sliderValues[5]}
                onChange={(e) =>
                  handleSliderChange(5, parseInt(e.target.value))
                }
              />
            </div>
            <div className=" p-4">
              <div className="flex items-center">
                <img
                  src={entertainment}
                  alt="Rent"
                  className="mr-2 w-8 h-auto"
                />
                <span
                  style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  Entertainment
                </span>
              </div>
              <div>RS {sliderValues[6]}</div>
              <input
                type="range"
                min={0}
                max={5000}
                value={sliderValues[6]}
                onChange={(e) =>
                  handleSliderChange(6, parseInt(e.target.value))
                }
              />
            </div>
            <div className=" p-4">
              <div className="flex items-center">
                <img src={saving} alt="Rent" className="mr-2 w-8 h-auto" />
                <span
                  style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  Saving
                </span>
              </div>
              <div>RS {sliderValues[7]}</div>
              <input
                type="range"
                min={0}
                max={5000}
                value={sliderValues[7]}
                onChange={(e) =>
                  handleSliderChange(7, parseInt(e.target.value))
                }
              />
            </div>
            <div className=" p-4">
              <div className="flex items-center">
                <img src={hobbies} alt="Rent" className="mr-2 w-8 h-auto" />
                <span
                  style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  Hobbies
                </span>
              </div>
              <div>RS {sliderValues[8]}</div>
              <input
                type="range"
                min={0}
                max={5000}
                value={sliderValues[8]}
                onChange={(e) =>
                  handleSliderChange(8, parseInt(e.target.value))
                }
              />
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <button
              className="bg-green-500 animate-bounce hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleContinue}
            >
              VERIFY
            </button>
          </div>

          {showModal && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
              <div className="bg-white p-4 rounded shadow">
                <h2 className="text-lg font-bold mb-2">Results</h2>

                {showExpense > 15000 && (
                  <p className="text-red-500 font-bold mt-2">
                    Expenses exceed the balance, please review your expenses.
                  </p>
                )}
                {showSaving < 3000 && (
                  <p className="text-red-500 font-bold mt-2">
                    MINIMUM SAVING IS RS 3000
                  </p>
                )}
                <p>Total Expenses: RS {showExpense}</p>
                <p>BALANCE: RS {total}</p>
                <h2 className="text-lg font-bold mb-2">Recomendations:</h2>
                {showRent > 3000 && (
                  <p className="text-red-500 font-bold mt-2">
                    RENT : TRY TO REDUCE OTHER EXPENSES TO COMPENSATE WITH
                  </p>
                )}
                {showBill > 1500 && (
                  <p className="text-red-500 font-bold mt-2">
                    UTILITIES : TRY TO REDUCE OTHER EXPENSES TO COMPENSATE WITH
                    & TRY TO REDUCE CARBON EMISSIONS
                  </p>
                )}
                {showTransport > 1500 && (
                  <p className="text-red-500 font-bold mt-2">
                    TRANSPORT : TRY TO REDUCE OTHER EXPENSES TO COMPENSATE WITH
                    & TRY TO USE PUBLIC TRANSPORT MORE OFTEN
                  </p>
                )}
                {showFood > 1500 && (
                  <p className="text-red-500 font-bold mt-2">
                    FOOD : TRY TO REDUCE OTHER EXPENSES TO COMPENSATE WITH & TRY
                    TO LIMIT IT
                  </p>
                )}
                {showHealth > 1500 && (
                  <p className="text-red-500 font-bold mt-2">
                    HEALTH : TRY TO REDUCE OTHER EXPENSES TO COMPENSATE WITH
                  </p>
                )}
                {showShop > 2000 && (
                  <p className="text-red-500 font-bold mt-2">
                    SHOPPING : TRY TO REDUCE OTHER EXPENSES TO COMPENSATE WITH
                  </p>
                )}
                {showEntertain > 1000 && (
                  <p className="text-red-500 font-bold mt-2">
                    ENTERTAINMENT : TRY TO REDUCE OTHER EXPENSES TO COMPENSATE
                    WITH & REDUCE ENTERTAINMENT EXPENSES
                  </p>
                )}

                {showHobbies > 1000 && (
                  <p className="text-red-500 font-bold mt-2">
                    HOBBIES : TRY TO REDUCE OTHER EXPENSES TO COMPENSATE WITH &
                    REDUCE HOBBIES EXPENSES
                  </p>
                )}

                {showExpense <= 15000 &&
                  showSaving > 2999 &&
                  showRent < 3001 &&
                  showBill < 1501 &&
                  showTransport < 1501 &&
                  showFood < 1501 &&
                  showHealth < 1501 &&
                  showShop < 2001 &&
                  showEntertain < 1001 &&
                  showHobbies < 1001 && (
                   
                    <p className="text-green-500 font-bold mt-2 congrats-message">
                      CONGRATULATIONS, YOU SUCCESSFULLY PASSED THE CHALLENGE!
                    </p>
                   
                  )}
                <div className="flex justify-center">
                  <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
                    onClick={() => setShowModal(false)}
                  >
                    {Message}
                  </button>
                </div>
              </div>
            </div>
          )}

          {showMenu && <GameMenu />}
        </div>
      </div>
    </>
  );
};

export default BudgetGame;
