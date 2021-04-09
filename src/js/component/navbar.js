import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { propTypes } from "react-bootstrap/esm/Image";
import { Card } from "./card";
import { Context } from "../store/appContext";
export const Navbar = props => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar">
			<div className="container-fluid">
				<Link to="/">
					<a className="navbar-brand" href="/">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/250px-Star_Wars_Logo.svg.png"
							alt=""
							width="150"
							height="90 !important"
							className="d-inline-block align-top"
							backgroundColor="white"
						/>{" "}
					</a>
				</Link>

				<div className="dropdown">
					<Dropdown>
						<Dropdown.Toggle variant="info" id="dropdown-basic">
							Favoritos <div className="cuad"> {store.favoritos.length} </div>
						</Dropdown.Toggle>
						<Dropdown.Menu>
							{store.favoritos.map((items, i) => {
								return (
									<Dropdown.Item key={`items -${i}`} href="#/action-1">
										{items.name} {""}{" "}
										<i
											className="fas fa-times"
											style={{ color: "red" }}
											onClick={() => actions.Delete(i)}
										/>
									</Dropdown.Item>
								);
							})}
						</Dropdown.Menu>
					</Dropdown>
				</div>
			</div>
		</nav>
	);
};
