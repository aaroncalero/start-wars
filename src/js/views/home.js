import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Card } from "../component/card";
import "bootstrap/dist/css/bootstrap.css";
import { PlanetsCard } from "../component/planetsCard";

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getPlanets();
		actions.getPeoples();
	}, []);

	return (
		<div className="container-fluid ">
			<h1 className="pers" style={{ color: " #F8FCFB" }}>
				Personajes
			</h1>
			<div className="scrollmenu scro1">
				<div className="row text-center">
					<div className="col" style={{ margin: "3rem 1rem 1rem 1rem" }}>
						{store.peoples.map((items, i) => {
							return (
								<div key={i} style={{ marginRight: "10px" }}>
									<Card
										title={items.name}
										gender={items.gender}
										hair={items.hair_color}
										index={i + 1}
										eye={items.eye_color}
										url={items.url}
										imgUrl={store.img[i]}
									/>
								</div>
							);
						})}
					</div>
				</div>
			</div>
			<h1 className="plane" style={{ color: " #F8FCFB", marginTop: "2rem" }}>
				Planetas
			</h1>
			<div className="scrollmenu scro">
				<div className="row text-center">
					<div className="col" style={{ margin: "3rem 1rem 1rem 1rem" }}>
						{store.planets.map((items, i) => {
							return (
								<div key={i} style={{ marginRight: "10px" }}>
									<PlanetsCard
										urlImgP={store.imgP[i]}
										index={i + 1}
										name={items.name}
										terrain={items.terrain}
										population={items.population}
									/>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};
