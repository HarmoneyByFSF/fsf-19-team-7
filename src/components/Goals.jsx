import React, { useState } from 'react';
import Board from './Board'; // Import the Savings component

const Expenses = ({ name, occupation, age, gender, salary, otherIncome, bonus, retirementSavings, otherSavings, emergencyFunds, formValues }) => {
  const [formValues1, setFormValues1] = useState({});
  const [showSavings, setShowSavings] = useState(false); // State to toggle showing the Savings component

  const card = {
    title: 'GOALS',
    fields: [
      {
        label: 'Goals',
        name: 'goal1',
        placeholder: 'Enter your goals',
      },
      // Add more fields as needed
    ],
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues1((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Values:', formValues1);
    setShowSavings(true); // Set showSavings to true to render the Savings component
  };

  if (showSavings) {
    return (
      <Board
        name={name}
        occupation={occupation}
        age={age}
        gender={gender}
        salary={salary}
        bonus={bonus}
        otherIncome={otherIncome}
        card={card}
        retirementSavings={retirementSavings}
        emergencyFunds={emergencyFunds}
        otherSavings={otherSavings}
        formValues={formValues}
        formValues1={formValues1}
      />
    );
  }

  return (
    <section className="bg-center bg-no-repeat bg-blend-multiply -mx-32">
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Goals</h1>

        <div className="relative overflow-hidden">
          <div className="flex justify-center">
            <div className="flex-shrink-0 w-full sm:w-auto bg-white overflow-hidden shadow-md rounded-md transition-opacity duration-300 mx-2">
              <div className="h-16 bg-green-900 text-white font-extrabold flex items-center justify-center cursor-pointer px-4">
                {card.title}
              </div>
              <div className="p-4">
                <form onSubmit={handleSubmit} className="space-y-4">
                  {card.fields &&
                    card.fields.map((field, fieldIndex) => (
                      <div className="mb-4" key={fieldIndex}>
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor={`expense-${fieldIndex}`}
                        >
                          {field.label}:
                        </label>
                        <input
                          type="text"
                          id={`expense-${fieldIndex}`}
                          name={field.name}
                          style={{ outline: '1px solid black' }}
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          placeholder={field.placeholder}
                          value={formValues1[field.name] || ''}
                          onChange={handleInputChange}
                          required // The required attribute
                        />
                      </div>
                    ))}
                </form>
                <div className="flex justify-center mt-4">
                  <button
                    className="bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expenses;
