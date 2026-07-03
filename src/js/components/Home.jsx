import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Navbar } from "./Navbar";
import { Jumbotron } from "./Jumbotron";
import { Card } from "./Card";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<div className="container">
			<Jumbotron />
			<div className="row">
				<div className="m-0 p-0 d-flex justify-content-center col-md-3">
					<Card
						image="https://images.pexels.com/photos/38381653/pexels-photo-38381653.jpeg"
						title="Objetivo"
						description="Quien sera el campeon de la copa del munbdo?"
						textButton="Ver mas"
					/>
				</div>
				<div className="m-0 p-0 d-flex justify-content-center col-md-3">
					<Card
						image="https://images.pexels.com/photos/38109919/pexels-photo-38109919.jpeg"
						title="Union"
						description="El futbol genera union, la union genera amistad"
						textButton="Ver mas"
					/>
				</div>
				<div className="m-0 p-0 d-flex justify-content-center col-md-3">
					<Card
						image="https://images.pexels.com/photos/14856235/pexels-photo-14856235.jpeg"
						title="Celebrar"
						description="Nada como celebrar un gol de tu equipo"
						textButton="Ver mas"
					/>
				</div>
				<div className="m-0 p-0 d-flex justify-content-center col-md-3">
					<Card
						image="https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg"
						title="La culpable"
						description="El balon y la pasion que lleva en sus espaldas"
						textButton="Ver mas"
					/>
				</div>

			</div>

			</div>
			<footer className="container-fluid d-flex justify-content-center align-items-center mt-3 border-top py-5 bg-dark text-light">
				<div className="container">
					<p className="mb-0 text-center">Copyrigh © Website made by jaem97</p>
				</div>
			</footer>
		</>
	);
};

export default Home;