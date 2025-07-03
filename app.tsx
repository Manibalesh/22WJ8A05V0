import React, { useState } from 'react';
import axios from 'axios';

const App: React.FC = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async () => {
    try {
      const res = await axios.post('http://localhost:4000/api/data', { message });
      setResponse(res.data.echo);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Logging Middleware Demo</h1>
      <input
        type="text"
        placeholder="Enter a message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={{ padding: 8, width: '60%' }}
      />
      <button onClick={handleSubmit} style={{ marginLeft: 10, padding: 8 }}>
        Send to Backend
      </button>
      <p>Response from backend: {response}</p>
    </div>
  );
};

export default App;
