import React from 'react';
import {
	Outlet
  } from 'react-router-dom';

import { TableSide } from './TableSide';

export function TableFull({ fechaInicio, fechaFin, idCuenta, onUpdate }) {
	return (
		// <BrowserRouter>
		<div className="row">
			<div className="col-4">
				<TableSide 
					fechaInicio={fechaInicio} fechaFin={fechaFin} 
					idCuenta={idCuenta} onUpdate={onUpdate} 
				/>
			</div>
			<Outlet />
		</div>
	)
}
