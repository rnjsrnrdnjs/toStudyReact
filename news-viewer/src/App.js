import React,{useState} from 'react';
import axios from 'axios';

const App=()=>{
	const [data,setData]=useState(null);
	const onClick=async()=>{
		try{
			const response=await axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=766abfa7239b43ef92d0fe6c23e7be8c',);
			console.log(response);
			setData(response.data);			
		}catch(err){
			console.log(err);
		}
	};
	return (
		<div>
			<div>
				<button onClick={onClick}>불러오기</button>
			</div>
			{data && <textarea rows={7} value={JSON.stringify(data,null,2)} readOnly={true} />}
		</div>
	);
};

export default App;