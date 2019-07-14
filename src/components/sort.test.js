import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import App from '../App';
import Age from './Age';
import Name from './Name';
import Points from './Points';
import Rank from './Rank';
import { configure } from 'enzyme';
import { Link } from 'react-router-dom';
import { MemoryRouter } from 'react-router'
import Adapter from 'enzyme-adapter-react-16';
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import {spy} from 'sinon';

configure({ adapter: new Adapter() });

describe("Test Sorting Components", () => {
  it('button click function should be passed as a prop to all', () => {
    let age = shallow(<Age handleClick={mockFn}/>);
    console.log('age test', age)
    expect(mockFn).toHaveBeenCalled();
    let rank = shallow(<Rank handleClick={mockFn}/>);
    expect(mockFn).toHaveBeenCalled();
    let points = shallow(<Points handleClick={mockFn}/>);
    expect(mockFn).toHaveBeenCalled();
    let name = shallow(<Name handleClick={mockFn}/>);
    expect(mockFn).toHaveBeenCalled();
});
