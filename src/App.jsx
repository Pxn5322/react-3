import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

function InfoText({ number }) {
  let text1 = '';
  let text2 = '';
  let tempNumber = number;

  if (number < 0 || number) {
    text1 = 'You have drunk 0 glass(es) of water today.';
    text2 = 'Please enter a valid number of glasses.';
  } else if (number < 8) {
    text1 = 'You have drunk ' + number + ' glass(es) of water today.';
    text2 =
      'Keep going! You need ' +
      (8 - tempNumber) +
      ' more glass(es) to reach your goal.';
  } else if (number >= 8) {
    text2 = 'Great job! You reached your daily goal.';
  }
  return (
    <>
      <p className="text-center">{text1}</p>
      <p className="text-center">{text2}</p>
    </>
  );
}

function App() {
  const [number, setNumber] = useState(0);

  function addNumber() {
    setNumber(number + 1);
  }

  return (
    <>
      <h1 className="text-center">Daily Water Tracker</h1>
      <div className="container">
        <div className="d-flex justify-content-center">
          <label className="mx-2" for="water-drank">
            Glasses of water drank:{' '}
          </label>
          <input type="number" min="1" />
        </div>
        <div className="d-flex justify-content-center my-3">
          <Button variant="primary" onClick={addNumber}>
            Add
          </Button>
        </div>
      </div>
      <InfoText number={number} />
    </>
  );
}

export default App;
