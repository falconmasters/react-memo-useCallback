import React from 'react';

const ComponenteHijo = ({texto, cuenta, sumarUno}) => {
	console.log(`${texto} Renderizado`);
	return (
		<div className="caja">
			<p>{texto}</p>
			<h1>{cuenta}</h1>
			<button className="boton" onClick={sumarUno}>+1</button>
		</div>
	);
}
 
export default React.memo(ComponenteHijo);