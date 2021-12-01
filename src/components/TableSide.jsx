import React from "react";
import { Link } from 'react-router-dom';

export function TableSide() {
	return (
		<div className="d-flex flex-column flex-shrink-0 p-3 bg-light">
			<a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
				<svg className="bi me-2" width="40" height="32"><use></use></svg>
			</a>
			<>
				<ul className="nav nav-pills flex-column mb-auto">
					<li className="nav-item">
						<Link to="/usuario/inicio">
							<a href="#" className="nav-link active" aria-current="page">
								<svg className="bi me-2" width="16" height="16"><use></use></svg>
								Inicio
							</a>
						</Link>
					</li>
					<li>
						<Link to="/usuario/ctas">
							<a href="#" className="nav-link link-dark">
								<svg className="bi me-2" width="16" height="16"><use></use></svg>
								Cuentas
							</a>
						</Link>
					</li>
					<li>
						<a href="#" className="nav-link link-dark">
							<svg className="bi me-2" width="16" height="16"><use></use></svg>
							Transferencias
						</a>
					</li>
					<li>
						<a href="#" className="nav-link link-dark">
							<svg className="bi me-2" width="16" height="16"><use></use></svg>
							Reclamos
						</a>
					</li>
					<li>
						<a href="#" className="nav-link link-dark">
							<svg className="bi me-2" width="16" height="16"><use></use></svg>
							Nueva Cuenta
						</a>
					</li>
				</ul>
			</>
		</div>
	)
}