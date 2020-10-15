import React from 'react';
import './App.scss';
import { Button } from 'components/Button'

function App() {
  return (
    <div className="App">
      <div
        style={{
          padding: 5
        }}>
        <Button
          fullWidth={true}
          color={`primary`}
          variant={`outlined`}
          disabled={false}
        >
            My First Button
        </Button>
      </div>
    </div>
  );
}

export default App;
