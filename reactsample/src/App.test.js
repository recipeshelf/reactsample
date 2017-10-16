import React from 'react';
import App from './App';
import Number from './Number';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { mount } from 'enzyme';
import { createWaitForElement } from 'enzyme-wait';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('App tests', () => {
    let mockAdapter = new MockAdapter(axios);
    mockAdapter.onAny().reply(200, null);

    it('renders without crashing', () => {
        const wrapper = mount(<App />);
        expect(wrapper).toMatchSnapshot();
    });

    it('increments a number', () => {
        const wrapper = mount(<Number initialNumber={5} />);
        wrapper.find('#incrementButton').simulate('click');
        const waitForSample = createWaitForElement('#currentNumberSpan');
        waitForSample(wrapper).then(c => c.text().toEqual('6'));
    });

    it('decrements a number', () => {
        const wrapper = mount(<Number initialNumber={3} />);
        wrapper.find('#decrementButton').simulate('click');
        const waitForSample = createWaitForElement('#currentNumberSpan');
        waitForSample(wrapper).then(c => c.text().toEqual('2'));
    });
});