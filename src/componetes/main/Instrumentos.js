import React from 'react';
export default class Instrumentos extends React.Component{

	render(){
		return(
			<div className="instrumentos">
				<div className= "inst-single">
					<img src="/img/violao-1.png"alt="violao" />
					<h2>violao</h2>
				</div>
				<div className= "inst-single">
					<img src="/img/teclado-1.png"alt="tecladoo" />
					<h2>teclado</h2>
				</div>
				<div className= "inst-single">
					<img src="/img/MSe-1.png"alt="guitarra"/>
					<h2>guitarra</h2>
				</div>
				<div className= "inst-single">
					<img src="/img/violao-1.png" />
					<h2>violao</h2>
				</div>
			</div>
		)
	}

} 