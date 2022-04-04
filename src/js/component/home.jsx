import React, { useState } from "react";
import Luz from "/workspace/traffic-light/src/js/component/luz.jsx";

//create your first component
const Home = () => {
	const [selected, setSelected] = useState("semaforo rojo");

	setSelected =()=>{
	return 
};

	return (
		<div className="body">
			<div id="semaforo-top"></div>
			<div className="cuerpo">
				<div>
					<Luz clase={selected} onClick={setSelected}/>
					<div className="semaforo yellow"></div>
					<div className="semaforo green"></div>
				</div>
			</div>
		</div>
	);
};

export default Home;
