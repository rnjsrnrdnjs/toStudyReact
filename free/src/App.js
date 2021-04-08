import React from 'react';
import {Route,Link,Switch} from 'react-router-dom';
import About from './About';
import Home from './home';
import Profiles from './Profiles'
import HistorySample from './HistorySample';

const App=()=>{
	return (
		<div>
			<ul>
				<li>
					<Link to="/">홈</Link>
				</li>
				<li>
					<Link to="/about">소개</Link>
				</li>
				<li>
					<Link to="/profiles">select 프로필</Link>
				</li>
				<li>
					<Link to="/history">history 예제</Link>
				</li>
				
			</ul>
			<Switch>
			<Route path="/" component={Home} exact={true}/>
			<Route path={['/about','/info']} component={About}/>
			<Route path="/profiles" component={Profiles}/>
			<Route path="/history" component={HistorySample}/>
				<Route render={({location})=>(
					<div>
						<h2>이 페이지는 존재하지않아요..</h2>
							<p>{location.pathname}</p>
						</div>
				)}/>
			</Switch>
		</div>
	);
};
export default App;