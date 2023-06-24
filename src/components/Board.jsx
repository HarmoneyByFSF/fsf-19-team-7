import React, { useState } from 'react';
import Reports from './Reports';
import { Bar } from "react-chartjs-2";
import { CategoryScale, LinearScale, BarElement, Chart } from "chart.js";
import BudgetGame from './BudgetGame';

Chart.register(CategoryScale, LinearScale, BarElement);
const Board = ({ name, occupation, age, gender, salary, otherIncome, bonus, retirementSavings, otherSavings, emergencyFunds, formValues, formValues1 }) => {
  const [showExpenseMenu, setShowExpenseMenu] = useState(false);
  const [showIncomeMenu, setShowIncomeMenu] = useState(false);
  const [showMainIntro, setShowMainIntro] = useState(false);
  const allFormValues = { ...formValues, ...formValues1 };

  // Calculate the sum of all values
  const totalSum = Object.values(allFormValues).reduce((sum, value) => {
    const parsedValue = parseFloat(value);
    return isNaN(parsedValue) ? sum : sum + parsedValue;
  }, 0);
  const handleExpenseClick = () => {
    setShowExpenseMenu(!showExpenseMenu);
    setShowIncomeMenu(false);
  };

  const handleIncomeClick = () => {
    setShowIncomeMenu(!showIncomeMenu);
    setShowExpenseMenu(false);
  };
  const handleLaunchGameClick = () => {
    setShowMainIntro(true);
  };

  return (
    <>
    {!showMainIntro && (
      <>
 <div className="flex flex-col items-center">
    <h1 className="text-4xl font-bold my-8" style={{ position: 'relative',top:'590px', right:'500px' }}>Welcome, {name}!</h1>

    
    <div className="w-full max-w-3xl">




      <div className="flex justify-between mb-4">
        <div className="flex flex-col items-start">
          
          
        </div>
      </div>

    
     

      <div className="border-2 bg-white p-6 rounded-lg shadow-lg" style={{ position: 'relative', right: '500px', top: '590px' }}>
      <h5 className="mb-2 text-2xl text-start font-bold tracking-tight text-gray-900">USER DASHBOARD</h5>
      <h1>Total Sum: {totalSum}</h1>
        <p className="mb-2">Occupation: {occupation}</p>
        <p className="mb-2">Age: {age}</p>
        <p className="mb-2">Gender: {gender}</p>
        <p className="mb-2">Salary: {salary}</p>
        <p className="mb-2">Bonus: {bonus}</p>
        <p className="mb-2">Other Income: {otherIncome}</p>
        <p className="mb-2">Retirement Savings: {retirementSavings}</p>
        <p className="mb-2">Emergency Funds: {emergencyFunds}</p>
        <p className="mb-2">Other Savings: {otherSavings}</p>
        <p className="mb-2">Mortgage: {formValues.rentMortgage}</p>
        <p className="mb-2">Utilities: {formValues.utilities}</p>
        <p className="mb-2">Maintenance Costs: {formValues.maintenanceCosts}</p>
        <p className="mb-2">Car Payments: {formValues.carPayments}</p>
        <p className="mb-2">Fuel: {formValues.fuel}</p>
        <p className="mb-2">Insurance: {formValues.insurance}</p>
        <p className="mb-2">Groceries: {formValues.groceries}</p>
        <p className="mb-2">Dining Out: {formValues.diningOut}</p>
        <p className="mb-2">Movies: {formValues.movies}</p>
        <p className="mb-2">Concert: {formValues.concert}</p>
        <p className="mb-2">Hobbies: {formValues.hobbies}</p>
        <p className="mb-2">Medical Bills: {formValues.medicalBills}</p>
        <p className="mb-2">Prescription Costs: {formValues.prescriptionCosts}</p>
        <p className="mb-2">Toiletries: {formValues.toiletries}</p>
        <p className="mb-2">Haircuts: {formValues.haircuts}</p>
        <p className="mb-2">Clothing: {formValues.clothing}</p>

 

        

      </div>

    </div>

    

    <div style={{ position: 'relative', left: '400px', bottom: '420px' }}>

      <Reports totalSum={totalSum}/>
      <div className="relative bottom-24">
<h2 className="font-bold mb-12">Breakdown:</h2>
<p className="mb-3">Total: <span className="ml-14">Rs 15000</span></p>
<p className="mb-3">Housing: <span className="ml-10">Rs 4000</span></p>
<p className="mb-3">Health: <span className="ml-14">Rs 2000</span></p>
<p className="mb-3">Transportation: <span className="ml-1">Rs 2000</span></p>
<p className="mb-3">Personal Care: Rs 2000</p>
<p className="mb-3">Food: <span className="ml-16">Rs 1000</span></p>
<p className="mb-3">Entertainment: <span className="ml-2">Rs 1000</span></p>
<p className="mb-3">Savings: <span className="ml-12">Rs 3000</span></p>
<a href="https://fsc-game.netlify.app/">
<button className="w-32 h-12 bg-green-500 text-white font-bold rounded" >
Launch Game
</button>
</a>
</div>














    </div>
  
  
  
    

  </div>
      </>
        )}
    
    {showMainIntro && <BudgetGame />}

    </>
    );

    };
   

export default Board;
