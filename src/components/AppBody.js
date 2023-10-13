import React from 'react';
import { useState } from 'react';
import './AppBody.css';

function AppBody() {
    const [inputText, setInputText] = useState('');

    const handleInputChange = (e) => {
    setInputText(e.target.value);
    };

    const countCharacters = () => {
        return inputText.length;
    };


  return (
    <div className="app-body">
      <div className="text-container">
        <label className='font-bold' htmlFor="inputText">Enter Text or Paragraphs:</label>
        <textarea
          id="inputText"
          rows="4"  // You can adjust the number of rows to control the initial size of the textarea.
          value={inputText}
          onChange={handleInputChange}
        ></textarea>
        <p>Character Count: {countCharacters()}</p>
      </div>
    </div>
  );
}

export default AppBody;