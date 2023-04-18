import React, { useState } from 'react';

const GuestList: React.FC = () => {
  const [name, setName] = useState('');
  const [guests, setGuest] = useState<string[]>([]);

  const handleClick = () => {
    setName(''); //this one is for cleaning the input value
    setGuest([...guests, name]);
  };
  return (
    <div>
      <h1>Guest List</h1>
      <ul>
        {guests.map((guest) => (
          <li key={guest}>{guest}</li>
        ))}
      </ul>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button
        onClick={() => {
          handleClick();
        }}
      >
        Add guest
      </button>
    </div>
  );
};

export default GuestList;
