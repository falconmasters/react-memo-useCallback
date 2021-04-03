import React from 'react';

const ComponenteHijo = ({texto, cuenta, sumarUno}) => {
	
	return (
		<div className="caja">
			<p>{texto}</p>
			<h1>{cuenta}</h1>
			<button className="boton" onClick={sumarUno}>+1</button>
		</div>
	);
}
 
export default ComponenteHijo;