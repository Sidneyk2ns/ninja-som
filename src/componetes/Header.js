import React from 'react';
import MenuMob from './header/MenuMob';
import Nav from './header/Nav';
import NavDois from './header/NavDois';
import Pesquisa from './header/Pesquisa';
import Address from "./header/Address";

export default class Header extends React.Component{

	render(){
		return(
			<div className='header'>
				<MenuMob/>
				<Nav/>
				<NavDois/>
				<Pesquisa/>
				<Address/>
			</div>
		)
	}

} 