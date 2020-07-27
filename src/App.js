import React from 'react';
import './App.css';
import Header from './componetes/Header' 
import Main from './componetes/Main' 
import Footer from './componetes/Footer' 

export default class App extends React.Component{

	render(){
		return(
			<div>
				<Header/>
				<Main/>
				<Footer/>
			</div>
		);
	};


};