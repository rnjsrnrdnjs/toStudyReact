import React,{useState} from 'react';
import Counter from './Counter';

const App=()=>{
	
	return <Counter/>
	/*
	const [visible,setVisible]=useState(false);
	return (
	<div>
		<button onClick={()=>{setVisible(!visible);}}>{visible ? '숨기기':'보이기'}</button>
			<hr></hr>
			{visible && <Info/>	}
		</div>
	)	;*/
};

export default App;
