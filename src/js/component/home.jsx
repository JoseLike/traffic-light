import React, { useState } from "react";

//create your first component
const Home = () => {
	const [selected, setSelected] = useState("");

	const red = selected === "rtrue" ? "semaforo red glow" : "semaforo red ";
	const yellow =
		selected === "ytrue" ? "semaforo yellow glow" : "semaforo yellow ";
	const green =
		selected === "gtrue" ? "semaforo green glow" : "semaforo green ";

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
