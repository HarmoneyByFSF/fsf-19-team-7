import React, { useState } from 'react';
import Expenses from './Expenses';

const Income = ({ name, occupation, age, gender }) => {
  const [salary, setSalary] = useState('');
  const [bonus, setBonus] = useState('');
  const [otherIncome, setOtherIncome] = useState('');
  const [showMenu, setShowMenu] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const salaryValue = salary;
    const bonusValue = bonus;
    const otherIncomeValue = otherIncome;

    console.log('Salary:', salaryValue);
    console.log('Bonus:', bonusValue);
    console.log('Other Income:', otherIncomeValue);

    setShowMenu(true);
  };

  return (
    <section className="bg-center bg-no-repeat bg-blend-multiply">
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
      
 {showMenu && (
            <Expenses
            name={name}
            occupation={occupation}
            age={age}
            gender={gender}
            salary={salary}
            bonus={bonus}
            otherIncome={otherIncome}
          />
        )}
        {!showMenu && (
          <>
            <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4" style={{ outline: '1px solid black' }}>
              <div className="mb-4">
                <h1 className="text-2xl font-bold mb-10">UNDERSTANDING YOUR FINANCIAL COMPENSATION</h1>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="salary">
                  Salary:
                </label>
                <input
                  type="text"
                  id="salary"
                  style={{ outline: '1px solid black' }}
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your salary"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bonus">
                  Bonus:
                </label>
                <input
                  type="text"
                  id="bonus"
                  style={{ outline: '1px solid black' }}
                  value={bonus}
                  onChange={(e) => setBonus(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your bonus"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="otherIncome">
                  Other Income:
                </label>
                <input
                  type="text"
                  style={{ outline: '1px solid black' }}
                  id="otherIncome"
                  value={otherIncome}
                  onChange={(e) => setOtherIncome(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter other income"
                  required
                />
              </div>
              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className="bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-10 rounded-xl focus:outline-none focus:shadow-outline shadow-lg"
                >
                  Next
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </section>
  );
};

export default Income;
