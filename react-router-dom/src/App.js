import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
//import notify from './notify';

function App() {
  const [SplitMe,setSplitMe]=useState(null);
	handleClick=async()=>{
		const loadedModule=await import('./SplitMe');
		setSplitMe()
	};
  const onClick=()=>{
	  import('./notify').then(result => result.default());
	  //notify();
  };
	
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick}> hello react;
        </p>
      </header>
    </div>
  );
}

export default App;
