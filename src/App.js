import React from "react";
import "./style.css";
import SomethingRandom from './Components/SomethingRandom.js';
import Survey from './Components/Survey.js';

export default function App() {
  return (
    <div>
      <SomethingRandom itSays='Yippee' />
      <Survey title='My first survey' />
    </div>
  );
}
