import React, { useState } from "react";
import Luz from "/workspace/traffic-light/src/js/component/luz.jsx";

//create your first component
const Home = () => {
	const [selected, setSelected] = useState("");

	const red = selected === "rtrue" ? "semaforo red glow":"semaforo red ";
	const yellow = selected === "ytrue" ? "semaforo red glow":"semaforo yellow ";
	const green = selected === "gtrue" ? "semaforo red glow":"semaforo yellow ";

	return (
		<div className="body">
			<div id="semaforo-top"></div>
			<div className="cuerpo">
				<div>
					<div
						className={red}
						onClick={() => setSelected("rtrue")}></div>
					<div
						className={yellow}
						onClick={() => setSelected("ytrue")}></div>
					<div
						className={green}
						onClick={() => setSelected("gtrue")}></div>
				</div>
			</div>
		</div>
	);
};

export default Home;
