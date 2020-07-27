import React from 'react';
import Banner from './main/Banner';
import Comentarios from './main/Comentarios';
import InstDestaque from './main/InstDestaque';
import Instrumentos from './main/Instrumentos';
import SomBanner from './main/SomBanner';

export default class Main extends React.Component{

	render(){
		return(
			<div className='main'>
				<Banner/>
				<Comentarios/>
				<InstDestaque/>
				<Instrumentos/>
				<SomBanner/>
			</div>
		)
	}

} 