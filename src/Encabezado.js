import React from 'react';

const Encabezado = () => {
	console.log('Encabezado Renderizado');
	return (
		<div className="encabezado">
			<h1>Contadores</h1>
		</div>
	);
}
 
export default React.memo(Encabezado);