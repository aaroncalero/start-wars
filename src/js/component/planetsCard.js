import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import rigoImage from "../../img/plane1.jpg";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const PlanetsCard = props => {
	const { store, actions } = useContext(Context);
	return (
		<div>
			<div
				className="card "
				style={{
					color: "white",
					width: "14rem",
					height: "20rem",
					backgroundColor: "transparent",
					borderColor: "white"
				}}>
				<img className="card-img-top" src={props.urlImgP} alt="Card image cap" height="125" />
				<div className="card-body">
					<h5 className="card-title">{props.name}</h5>
					<p className="card-text margen">
						Population: {""}
						{props.population}
						<br />
						Terran: {""}
						{props.terrain}
						<br />
						<br />
					</p>
					<Link to={"/planetsprofile/" + props.index}>
						<button className="btn btn-primary pos1">Learn More</button>
					</Link>
					<div className="pos2">
						<i
							className="fa fa-heart"
							onClick={() => actions.Favorite(props.index, props.name, props.url)}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

PlanetsCard.propTypes = {
	population: PropTypes.string,
	terrain: PropTypes.string,
	name: PropTypes.string,
	url: PropTypes.string,
	index: PropTypes.number,
	imgUrl: PropTypes.string.isRequired,
	urlImgP: PropTypes.string.isRequired
};
