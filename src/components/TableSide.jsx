import React from "react";

export function TableSide() {
	return (
		<div className="d-flex flex-column flex-shrink-0 p-3 bg-light">
			<a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
				<svg className="bi me-2" width="40" height="32"><use></use></svg>
				<span className="fs-4">Panel</span>
			</a>
			<>
				<ul className="nav nav-pills flex-column mb-auto">
					<li className="nav-item">
						<a href="#" className="nav-link active" aria-current="page">
							<svg className="bi me-2" width="16" height="16"><use></use></svg>
							Inicio
						</a>
					</li>
					<li>
						<a href="#" className="nav-link link-dark">
							<svg className="bi me-2" width="16" height="16"><use></use></svg>
							Cuentas
						</a>
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
							Otros
						</a>
					</li>
				</ul>
			</>
		</div>
	)
}