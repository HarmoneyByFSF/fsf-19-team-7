import React, { useState } from 'react';
import Savings from './Savings'; 

// Import the Savings component

const Expenses = ({name, occupation, age, gender, salary, bonus, otherIncome}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [formValues, setFormValues] = useState({});
  const [showSavings, setShowSavings] = useState(false); // State to toggle showing the Savings component

  const cards = [
    {
      title: (
        <div className="flex items-center">
          <span className="text-3xl" style={{ fontSize: '6rem' }}>🏠</span>
          
        </div>
      ),
      fields: [
        {
          label: 'Rent/Mortgage',
          name: 'rentMortgage',
          placeholder: 'Rent/mortgage expense',
        },
        {
          label: 'Utilities',
          name: 'utilities',
          placeholder: 'Utilities expense',
        },
        {
          label: 'Maintenance Costs',
          name: 'maintenanceCosts',
          placeholder: 'Maintenance costs expense',
        },
      ],
    },
    {
      title: (
        <div className="flex items-center">
          <span className="text-3xl" style={{ fontSize: '6rem' }}>🚗</span>
          
        </div>
      ),
      fields: [
        {
          label: 'Car Payments',
          name: 'carPayments',
          placeholder: 'Car payments expense',
        },
        {
          label: 'Fuel',
          name: 'fuel',
          placeholder: 'Fuel expense',
        },
        {
          label: 'Insurance',
          name: 'insurance',
          placeholder: 'Insurance expense',
        },
        {
          label: 'Maintenance Costs',
          name: 'transportationMaintenance',
          placeholder: 'Maintenance costs expense',
        },
      ],
    },
    {
      title: (
        <div className="flex items-center">
          <span className="text-3xl" style={{ fontSize: '6rem' }}>🍔</span>
          
        </div>
      ),
      fields: [
        {
          label: 'Groceries',
          name: 'groceries',
          placeholder: 'Groceries expense',
        },
        {
          label: 'Dining Out',
          name: 'diningOut',
          placeholder: 'Dining out expense',
        },
      ],
    },
    {
      title: (
        <div className="flex items-center">
          <span className="text-3xl" style={{ fontSize: '6rem' }}>🪩</span>
          
        </div>
      ),
      fields: [
        {
          label: 'Movies',
          name: 'movies',
          placeholder: 'Movies expense',
        },
        {
          label: 'Concert',
          name: 'concert',
          placeholder: 'Concert expense',
        },
        {
          label: 'Hobbies',
          name: 'hobbies',
          placeholder: 'Hobbies expense',
        },
      ],
    },
    {
      title: (
        <div className="flex items-center">
          <span className="text-3xl" style={{ fontSize: '6rem' }}>💊</span>
          
        </div>
      ),
      fields: [
        {
          label: 'Insurance',
          name: 'healthInsurance',
          placeholder: 'Insurance expense',
        },
        {
          label: 'Medical Bills',
          name: 'medicalBills',
          placeholder: 'Medical bills expense',
        },
        {
          label: 'Prescription Costs',
          name: 'prescriptionCosts',
          placeholder: 'Prescription costs expense',
        },
      ],
    },
    {
      title: (
        <div className="flex items-center">
          <span className="text-3xl" style={{ fontSize: '6rem' }}>🧴</span>
          
        </div>
      ),
      fields: [
        {
          label: 'Toiletries',
          name: 'toiletries',
          placeholder: 'Toiletries expense',
        },
        {
          label: 'Haircuts',
          name: 'haircuts',
          placeholder: 'Haircuts expense',
        },
        {
          label: 'Clothing',
          name: 'clothing',
          placeholder: 'Clothing expense',
        },
      ],
    },
   
    // Add more cards and form details as needed
  ];

  const handleCardClick = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Values:', formValues);
    setShowSavings(true); // Set showSavings to true to render the Savings component
  };

  if (showSavings) {
    return <Savings 
    name={name} occupation={occupation} age={age} gender={gender} salary={salary} bonus={bonus} otherIncome={otherIncome} formValues={formValues}
   
        
        />;
  }

  return (
    <section className="bg-center bg-no-repeat bg-blend-multiply">
    <div className="px-1 mx-auto max-w-screen-xl text-center py-2 lg:py-56">
      <div className="relative overflow-hidden">
        <div className="flex flex-wrap justify-center -mx-20">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`${
                activeIndex === index ? 'opacity-100 lg:w-3/5 xl:w-1/2' : 'opacity-90'
              } flex-shrink-0 w-full sm:w-auto md:w-1/2 lg:w-1/4 xl:w-1/5 bg-white overflow-hidden rounded-md transition-opacity duration-300 m-4`}
            >
              <div
                className={`h-16 lg:h-24 text-white font-extrabold flex items-center justify-center cursor-pointer px-4 ${
                  activeIndex === index ? 'text-3xl' : 'text-lg'
                }`}
                onClick={() => handleCardClick(index)}
              >
                {card.title}
              </div>
              {activeIndex === index && (
                <div className="p-4">
                  <form onSubmit={handleSubmit}>
                    {card.fields &&
                      card.fields.map((field, fieldIndex) => (
                        <div className="mb-4" key={fieldIndex}>
                          <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor={`expense-${index}-${fieldIndex}`}
                          >
                            {field.label}:
                          </label>
                          <input
                            type="text"
                            style={{ outline: '1px solid black' }}
                            id={`expense-${index}-${fieldIndex}`}
                            name={field.name}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder={field.placeholder}
                            value={formValues[field.name] || ''}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      ))}
                  </form>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4">
          <button
           className="bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-10 rounded-xl focus:outline-none focus:shadow-outline shadow-lg"
           onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  </section>
  
  

  );
};

export default Expenses;
