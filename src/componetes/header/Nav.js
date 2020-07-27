import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
export default class Nav extends React.Component{

	render(){
		return(
			<div className='nav-um'>
				
				<AnchorLink href='#home'><img className="icon icon1" src="/img/lock-1.png"alt="icon"/>   compra 100%segura</AnchorLink>
   				<AnchorLink href='#sobre'> <img className="icon icon2" src="/img/arrow.png"alt="icon"/>   1° TROCA GRÁTIS</AnchorLink>
				<AnchorLink href='#instrumentos'> <img className="icon icon3" src="/img/ativo-10.png"alt="icon"/>   5X SEM JUROS</AnchorLink>				
   				<AnchorLink href='#contato'> <img className="icon icon4" src="/img/ativo-11.png"alt="icon"/>   ENTREGA EM <span>TODO BRASIL</span></AnchorLink>
			</div>
		)
	}

} 