import React from 'react';
import {shallow, mount} from 'enzyme';

import StatusSection from '../status-section';
let guesses = [1,2,3,4,5];
let guessCount = guesses.length;
let auralStatus = "This is a string";

describe('<StatusSection />', () => {
  it('Renders without crashing', () => {
    shallow(<StatusSection
      GuessCount guessCount={guessCount}
      GuessList guesses={guesses}
      AuralStatus auralStatus={auralStatus}
       />);
  });
})
