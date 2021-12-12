import React from "react";

import { Link, useLocation } from 'react-router-dom';
import RegTransModal from './RegTransModal';


const user = [
	{
		user: 'cliente',
		select: ['Cuentas', 'Transferencias', 'Reclamos', 'Nueva Cuenta']
	},
	{
		user: 'empleado',
		select: ['Depositos', 'Cuentas', 'Reclamos']
	},
	{
		user: 'administrador',
		select: ['Gestionar Empleado']
	}
];

export function TableSide({ fechaInicio, fechaFin, idCuenta, onUpdate }) {
	const tipoUsr = useLocation().state || localStorage.getItem("banAgrario")

	return (
		<div className="d-flex flex-column flex-shrink-0 p-3 bg-light">
			<p1 className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
				<svg className="bi me-2" width="40" height="32"><use></use></svg>
				PANEL
			</p1>

			<>
				<ul className="nav nav-pills flex-column mb-auto">
					{user.map((u) => {
						if (u.user === tipoUsr) {
							return u.select.map((s) => {
								if (s === 'Transferencias') {
									return (<RegTransModal tipoUsr={tipoUsr} s={s}
										fechaInicio={fechaInicio} fechaFin={fechaFin}
										idCuenta={idCuenta} onUpdate={onUpdate} />
									);
								} else {
									return (
										<li>
											<Link to={`/${tipoUsr}/${s.replace(/ /g, '')}`}>
												<a href={`/${tipoUsr}/${s.replace(/ /g, '')}`} className="nav-link link-dark">
													<svg className="bi me-2" width="16" height="16"><use></use></svg>
													{s}
												</a>
											</Link>
										</li>
									)
								}
							})
						} else { return null }
					})
					}
				</ul>
			</>
		</div>
	)
}