import React, { useState } from 'react';
import axios from 'axios';

const Shortener: React.FC = () => {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleShorten = async () => {
    const res = await axios.post('http://localhost:3000/shorten', { longUrl });
    setShortUrl(res.data.shortUrl);
  };

  return (
    <div>
      <input value={longUrl} onChange={(e) => setLongUrl(e.target.value)} />
      <button onClick={handleShorten}>Shorten</button>
      {shortUrl && <p>Short URL: <a href={shortUrl}>{shortUrl}</a></p>}
    </div>
  );
};

export default Shortener;
