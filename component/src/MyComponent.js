import React from 'react';

const MyComponent=props=>{
	return (
		<div>my name is {props.name} .
			<br/> children is
		</div>
	);
}
MyComponent.defaultProps={
	name:'기본 이름'
};
export default MyComponent;