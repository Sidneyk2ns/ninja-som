import React from 'react';
export default class MenuMob extends React.Component{



render(){

    return(
      <div>
        <button className="botaoMob" onClick={this.OnShow}>
			<img src="/img/arrow.png"alt="Botão mobile"/>	
        </button>
      </div>
    );
  }
}
