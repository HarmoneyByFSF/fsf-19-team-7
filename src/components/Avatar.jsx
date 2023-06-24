import React, { useState } from 'react';
import Income from './Income'; // Import the Income componentr

const Avatar = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [occupation, setOccupation] = useState('');
  const [gender, setGender] = useState('');
  const [errors, setErrors] = useState({});
  const [showMenu, setShowMenu] = useState(false); // State for controlling the menu visibility

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    if (!name) {
      errors.name = 'Name is required';
    }

    if (!age) {
      errors.age = 'Age is required';
    }

    if (!occupation) {
      errors.occupation = 'Occupation is required';
    }

    if (!gender) {
      errors.gender = 'Gender is required';
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    // If all fields are filled, proceed with form submission
    console.log('Name:', name);
    console.log('Age:', age);
    console.log('Occupation:', occupation);
    console.log('Gender:', gender);

    // Reset form fields and errors
   

    // Show the menu component
    setShowMenu(true);
  };

  return (
  
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md">
      {showMenu ? (
        // Render the menu component if showMenu is true
        <Income name={name} occupation={occupation} age={age} gender={gender}/>
  
     
      ) : (
        <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4" style={{ outline: '1px solid black' }}>
          <div className="mb-4">
            <h1 className="text-2xl font-bold mb-10 text-green-400">WHO ARE YOU?</h1>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name:
            </label>
            <input
              type="text"
              id="name"
              value={name}
              style={{ outline: '1px solid black' }}
              onChange={(e) => setName(e.target.value)}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline ${
                errors.name ? 'border-red-500' : ''
              }`}
              placeholder="Enter your name"
              required
            />
            {errors.name && <p className="text-red-500 text-xs italic">{errors.name}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="age">
              Age:
            </label>
            <input
              type="text"
              id="age"
              style={{ outline: '1px solid black' }}
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.age ? 'border-red-500' : ''
              }`}
              placeholder="Enter your age"
              required
            />
            {errors.age && <p className="text-red-500 text-xs italic">{errors.age}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="occupation">
              Occupation:
            </label>
            <input
              type="text"
              id="occupation"
              style={{ outline: '1px solid black'}}
              value={occupation}
              onChange={(e) => setOccupation(e.target.value)}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.occupation ? 'border-red-500' : ''
              }`}
              placeholder="Enter your occupation"
              required
              
            />
            {errors.occupation && <p className="text-red-500 text-xs italic">{errors.occupation}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">
              Gender:
            </label>
            <div className="flex items-center ml-10">
              <label className="mr-2">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={gender === 'male'}
                  onChange={(e) => setGender(e.target.value)}
                  className="mr-1 font-bold"
                  required
                />
        
                <span className="font-bold text-black text-lg">♂</span>
              </label>
              <label className="mr-2">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={gender === 'female'}
                  onChange={(e) => setGender(e.target.value)}
                  className="mr-1"
                  required
                />
                <span className="font-bold text-black text-lg">♀</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="other"
                  checked={gender === 'other'}
                  onChange={(e) => setGender(e.target.value)}
                  className="mr-1"
                  required
                />
                
                <span className="text-lg font-normal">⚥</span>
              </label>
            </div>
            {errors.gender && <p className="text-red-500 text-xs italic">{errors.gender}</p>}
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
      )}
        </div>
    </div>
  
  );
};

export default Avatar;