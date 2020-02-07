import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import {shallow} from 'enzyme';
import Command from '../Command';


describe('Command',function(){
    let mountedCommandComponent;
    beforeEach(()=>{
        mountedCommandComponent = shallow(<Command/>);
    })
    it('renders a Button',()=>{
      // let mountedApp = shallow(<App/>)
      const button = mountedCommandComponent.find('button')
      
      expect(button.length).toBe(1)
    })
  
  })