import React, { useState } from 'react';
import Goals from './Goals'; // Import the Goals component

const Savings = ({ name, occupation, age, gender, salary, otherIncome, bonus, formValues }) => {
  const [retirementSavings, setRetirementSavings] = useState('');
  const [emergencyFunds, setEmergencyFunds] = useState('');
  const [otherSavings, setOtherSavings] = useState('');
  const [showMenu, setShowMenu] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const retirementSavingsValue = retirementSavings;
    const emergencyFundsValue = emergencyFunds;
    const otherSavingsValue = otherSavings;

    console.log('Retirement Savings:', retirementSavingsValue);
    console.log('Emergency Funds:', emergencyFundsValue);
    console.log('Other Savings:', otherSavingsValue);

  
    setShowMenu(true);
  };

 

  return (
    <section className="bg-center bg-no-repeat bg-blend-multiply">
      <div className="px-4 mx-auto max-w-screen-xl text-center py-48 lg:py-72">
      {showMenu && (
          <Goals
          name={name} occupation={occupation} age={age} gender={gender} salary={salary} bonus={bonus} otherIncome={otherIncome} retirementSavings={retirementSavings} emergencyFunds={emergencyFunds} otherSavings={otherSavings} formValues={formValues} 
          />
        )}
        {!showMenu && (
          <>
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
              Savings
            </h1>
  
            <form onSubmit={handleSubmit}  className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4" style={{ outline: '1px solid black' }}>
              <div className="mb-6">
              <h1 className="text-2xl font-bold mb-10">SAVING</h1>
                <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="retirementSavings">
                  Retirement Savings:
                </label>
                <input
                  type="text"
                  style={{ outline: '1px solid black' }}
                  id="retirementSavings"
                  value={retirementSavings}
                  onChange={(e) => setRetirementSavings(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-lg"
                  placeholder="Enter your retirement savings"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="emergencyFunds">
                  Emergency Funds:
                </label>
                <input
                  type="text"
                  style={{ outline: '1px solid black' }}
                  id="emergencyFunds"
                  value={emergencyFunds}
                  onChange={(e) => setEmergencyFunds(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-lg"
                  placeholder="Enter your emergency funds"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="otherSavings">
                  Other Savings:
                </label>
                <input
                  type="text"
                  style={{ outline: '1px solid black' }}
                  id="otherSavings"
                  value={otherSavings}
                  onChange={(e) => setOtherSavings(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-lg"
                  placeholder="Enter other savings"
                  required
                />
              </div>
              <div className="flex items-center justify-center">
                {/* Add any additional form elements */}
              </div>
              <button
                type="submit"
                className="mt-10 hover:bg-green-700 text-white font-bold py-2 px-8 rounded-full bg-green-400 focus:outline-none focus:shadow-outline"
              >
                Next
              </button>
            </form>
          </>
        )}
      </div>
    </section>
  );
  
};

export default Savings;
