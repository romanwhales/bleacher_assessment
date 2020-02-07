import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Log from './components/Log';
import Command from './components/Command';

class App extends Component{
  constructor(props){
    super(props)
    this.a = React.createRef();
    this.b = React.createRef();
    this.c = React.createRef();
    this.d = React.createRef();
    this.e = React.createRef();
    this.f = React.createRef();
    this.g = React.createRef();

    this.state ={
      logText: '',
      playValues:''
    }
  }
  appendElement(e) {
    // logText:e.target.textContent
    let newtext = e.target.textContent
    
    this.setState((state,props) => ({
      logText: state.logText + newtext
    }))
  }
  handlePlayValuesChange=(event)=>{
    this.setState({
      playValues:event.target.value
    })
  }
  play=()=>{
    //Validation
    if(this.state.playValues.match('^([a-gA-G].?,?)+[a-gA-G]$')){
      // console.log(this.state.playValues.toLowerCase());
      let playValuesLowercase = this.state.playValues.toLowerCase();
      let playValuesArray = Array.from(this.state.playValues)
      let playValues = playValuesArray.filter(item => item !== ",");
      // console.log(`Play Values ${playValues}`);
      // console.log(Array.isArray(playValues));

      playValues.map((item,i) => {
        
        setTimeout(()=>{
          this[`${item}`].current.classList.add('active')
        },1000 *`${i}`+1)
        
        // setTimeout(()=>{
        //   this[`${item}`].current.classList.remove('active')
        // },2000 *`${i}`+1)
      })

    }else{
      alert("You have Entered an Invalid Character or you didnt put a comma between the letters");
    }
    return;
    
    // console.log(`State is `,this.state);
    // console.log(Array.from(this.state.playValues));
    // let playValuesArray = Array.from(this.state.playValues)
    // let playValues = playValuesArray.filter(item => item !== ",");
    // console.log(`Play Values ${playValues}`);
  }
  render(){
    return(
      <>
      <ul className="set">
      <li className="white e" onClick={(e)=> this.appendElement(e)} ref={this.c}><span className="letters">C</span></li>
      <li className="black ds"></li>
            <li className="white d" onClick={(e)=> this.appendElement(e)} ref={this.d}><span className="letters">D</span></li>
            <li className="black cs"></li>
            <li className="white c" onClick={(e)=> this.appendElement(e)} ref={this.e}><span className="letters">E</span></li>
        <li className="white b" onClick={(e)=> this.appendElement(e)} ref={this.f}><span className="letters">F</span></li>
        <li className="black as" ></li>
        <li className="white a" onClick={(e)=> this.appendElement(e)} ref={this.g}><span className="letters">G</span></li>
        <li className="black gs"></li>
        <li className="white g" onClick={(e)=> this.appendElement(e)} ref={this.a}><span className="letters">A</span></li>
        <li className="black fs"></li>
        <li className="white f" onClick={(e)=> this.appendElement(e)} ref={this.b}><span className="letters">B</span></li>
        
            
      </ul>
      <Log {...this.state}/>
      <Command {...this.state} onChange={this.handlePlayValuesChange} onClick={this.play}/>
      </>
    )
  }
}

export default App;
