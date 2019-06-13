import React from 'react';
import './App.css';
import CustomDatepicker from './CustomDatepicker';
import CustomDatepicker2Month from './CustomDatepicker2Month';
import "react-datepicker/dist/react-datepicker.css";

const App: React.FC = () => {
  return (
    <div className="App" style={{
      display: "flex",
    }}>
      <div style={{ width: "300px" }}>
        <p>Changing year &amp; month</p>
        <CustomDatepicker />
      </div>
      <div style={{ width: "600px" }}>
        <p>2 months &amp; filtered dates</p>
        <CustomDatepicker2Month />
      </div>
    </div>
  );
}

export default App;
