import React from 'react';
export default class Pesquisa extends React.Component{

	render(){
		return(
			<div classMame="centro">
				
				<img classMame="logo" src="/img/logo.png" alt="logo marca"/>
				<input className="search" type="search" placeholder="Busque aqui..."></input>
				<img className="pesquisa" src="/img/pesquisa.png"alt="pesquisa"/>
				<img className="address" src="/img/whatsapp.png" alt="whatsapp"/> <strong className="telefone">(11)99999-9999</strong>
			
			</div>
		);
	};

}; 