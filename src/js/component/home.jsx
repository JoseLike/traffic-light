import React, { useState } from "react";
import Luz from "/workspace/traffic-light/src/js/component/luz.jsx";

//create your first component
const Home = () => {
	const [selected, setSelected] = useState("semaforo");

	const red = "red " + selected;
	const yellow = "yellow " + selected;
	const green = "green " + selected;

	return (
		<div className="body">
			<div id="semaforo-top"></div>
			<div className="cuerpo">
				<div>
					<div
						className={red}
						onClick={() => setSelected("semaforo glow")}></div>
					<div
						className={yellow}
						onClick={() => setSelected("semaforo glow")}></div>
					<div
						className={green}
						onClick={() => setSelected("semaforo glow")}></div>
				</div>
			</div>
		</div>
	);
};

export default Home;
