import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessList from '../guess-list';
let guesses = [1,2,3,4,5];

describe('<GuessList />', () => {
  it('Should render GuessList given an Array{guesses}', () => {
    shallow(<GuessList guesses={guesses}/>);
  });
})
