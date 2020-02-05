import React, { useState, useEffect } from 'react'
import { render } from 'react-dom';

import Donut from 'react-svg-donuts';

import axios from 'axios'

import Agenda from '../components/Agenda'
import MissList from '../components/MissList'
import TypeItin from '../components/TypeItin'
import Ressources from '../components/Ressources'

import './Dashboard.css'
import 'react-svg-donuts/dist/index.css';

const DashboardAdmin = () => {
	const [items, setItems] = useState([]);
	const [itemIndex, setItemIndex] = useState(0);
	const [filter, setFilter] = useState(false);
	const [modalItineraire, setModalItineraire] = useState(false)
	const [modalRessources, setModalRessources] = useState(false)
	const [progress, setProgress] = useState(50);

	const renderProgress = progress => <strong>{progress}%</strong>;

	const admin = true;

	useEffect(() => {
		axios.get(`http://localhost:4000/api/exploitation/missions`)
			.then((result) => setItems(result.data))
	})

	const showItineraire = () => {
		setModalItineraire(!modalItineraire);
	}

	const showRessources = () => {
		console.log("hello")
		setModalRessources(!modalRessources);
	}

	/*const getMission = (e) => {
		const selected = Number(e.target.id)
		setItemIndex(selected)
		setaddMission(!addMission)
	}*/

	return (
		<div className="Dashboard">
			<div className="Left">
				<div className="Action">
					<div className="action-left">
						<div className="one" onClick={showItineraire}>
							<p>créer missions</p>
						</div>
						<div className="two" onClick={showRessources}>
							<p>Ressources</p>
						</div>
					</div>
					<div className="action-right"></div>
				</div>
				<div className={admin ? "Dashboard-Schedule" : "Dashboard-Schedule-admin"}>
					<Agenda missions={items} />
				</div>
			</div>
			<div className="Dashboard-List">
				<div className="info-sup">
					<div className="graph">
						<Donut progress={progress} onRender={renderProgress} />
					</div>
				</div>
				<h3>Liste missions</h3>
				<MissList missions={items} admin={admin} />
			</div>
			{modalItineraire ? <div className="Dashboard-modal">
				<span className="quit" onClick={showItineraire}>X</span>
				<TypeItin quitModal={showItineraire} />
			</div> : ''}

			{modalRessources ? <div className="Dashboard-modal">
				<span className="quit" onClick={showRessources}>X</span>
				<Ressources quitModal={showRessources} />
			</div> : ''}
		</div >
	)
}

export default DashboardAdmin