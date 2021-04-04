import React, {useState, useCallback} from 'react';
import Encabezado from './Encabezado';
import ComponenteHijo from './ComponenteHijo';
import './estilos.css';

const App = () => {
	const [contador1, cambiarContador1] = useState(1);
	const [contador2, cambiarContador2] = useState(1);
	const [contador3, cambiarContador3] = useState(1);

	const aumentar1 = useCallback(() => {
		cambiarContador1(contador1 + 1);
	}, [contador1]);

	const aumentar2 = useCallback(() => {
		cambiarContador2(contador2 + 1);
	}, [contador2]);
	
	const aumentar3 = useCallback(() => {
		cambiarContador3(contador3 + 1);
	}, [contador3]);
	

	return (
		<div className="grid">
			<Encabezado />
			<ComponenteHijo texto="Contador 1" cuenta={contador1} sumarUno={aumentar1} />
			<ComponenteHijo texto="Contador 2" cuenta={contador2} sumarUno={aumentar2} />
			<ComponenteHijo texto="Contador 3" cuenta={contador3} sumarUno={aumentar3} />
		</div>
	);
}
 
export default App;