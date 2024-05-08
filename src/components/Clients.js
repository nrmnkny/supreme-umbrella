import React from 'react';

const Clients = () => {
  const clients = ['Adien', 'Midtur', 'Nokicmg'];
  return (
    <div className="flex space-x-4 p-4">
      {clients.map((client, index) => (
        <div key={index} className="bg-gray-300 p-2">
          {client}
        </div>
      ))}
    </div>
  );
}

export default Clients;
