import React from 'react';
import ColorBox from './components/ColorBox';
import {ColorProvider} from './contexts/color';
import SelectColors from './components/SelectColors';

const App=()=>{
	return (
		<ColorProvider>
			<div>
				<SelectColors/>
				<ColorBox></ColorBox>
			</div>
		</ColorProvider>
	);
};
export default App;