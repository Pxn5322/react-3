import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

function App() {
  const [number, setNumber] = useState(0);
  const [inputValue, setInputValue] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  function addNumber() {
    const parseNumber = parseInt(inputValue);
    if (!parseNumber || isNaN(parseNumber) || parseNumber < 1) {
      setErrorMessage("Please enter a valid number of glasses.");
      return;
    }

    setErrorMessage('');

    setNumber(number + parseNumber);
    setInputValue('');
  }

  return (
    <>
      <h1 className="text-center">Daily Water Tracker</h1>
      <div className="container">
        <div className="d-flex justify-content-center">
          <label className="mx-2" htmlFor="water-drank">
            Glasses of water drank:
          </label>
          <input id="water-drank" type="number" min="1" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
        </div>
        <div className="d-flex justify-content-center my-3">
          <Button variant="primary" value={inputValue} onClick={addNumber}>
            Add
          </Button>
        </div>
      </div>
      <p className="text-center text-danger">{errorMessage}</p>
      <p className="text-center">You have drunk {number} glass(es) of water today.</p>
      <p className="text-center">
        {number >= 8 ? ("Great job! You reached your daily goal.") : (`Keep going! You need ${8 - number} more glass(es) to reach your goal.`)}
      </p>
    </>
  );
}

export default App;
