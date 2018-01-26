import TestBtn from '../../../src/app/sample/TestBtn';
import renderer from 'react-test-renderer';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow'; 
import ReactTestUtils from 'react-dom/test-utils'; // ES6
import {findDOMNode} from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import enzyme,{shallow,render} from  'enzyme';  




describe('Button component renders the button correctly renders correctly', () => {
    beforeEach(() => {
      enzyme.configure({ adapter: new Adapter() });
    });
    it('renders correctly', () => {
      const rendered = renderer.create(
        <TestBtn/>
      );
      expect(rendered.toJSON()).toMatchSnapshot();
    });
    it('items correctly', () => {
      const renderer = new ShallowRenderer();
      renderer.render(<TestBtn />);
      const result = renderer.getRenderOutput();
      expect(result.type).toBe('div');
      expect(result.props.children.type).toBe('button');
    });
    it('handles clicks correctly', () => {
      const app = ReactTestUtils.renderIntoDocument(<TestBtn/>);
      const appDOM = findDOMNode(app);
      const todoItem = appDOM.querySelector('button');
      ReactTestUtils.Simulate.click(todoItem);
    });
    it("renders correctly with enzyme", () => {
      const test = render(<TestBtn/>);
      expect(test).toMatchSnapshot();
    });
    it("test shallow with enzyme", () => {
      const wrapper = shallow(<TestBtn/>);
      wrapper.equals(<div/>) // => true
      expect(wrapper.find('.btn-default').equals('button'));
      expect(wrapper.find('.btn-default').text()).toEqual('Delete me!');
      wrapper.find('.btn-default').simulate('click');
    });
    it("test click with enzyme", () => {
      const wrapper = shallow(<TestBtn/>);
      wrapper.find('.btn-default').simulate('click');
    });
});  