import React, { useState } from "react";

//create your first component
const Home = () => {
	const [selected, setSelected] = useState("rojo");
	return (
		<div className="body">
			<div id="semaforo-top"></div>
			<div className="cuerpo">
				<div>
					<div className="semaforo red"></div>
					<div className="semaforo yellow"></div>
					<div className="semaforo green"></div>
				</div>
			</div>
		</div>
	);
};

export default Home;
