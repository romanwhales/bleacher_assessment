import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import {shallow} from 'enzyme';
import App from './App';


describe('App',function(){
  let mountedAppComponent;
  beforeEach(()=>{
    mountedAppComponent = shallow(<App/>);
  })
  it('renders a Log Component',()=>{
    // let mountedApp = shallow(<App/>)
    const locators = mountedAppComponent.find('Log');
    
    expect(locators.length).toBe(1)
  })

})

