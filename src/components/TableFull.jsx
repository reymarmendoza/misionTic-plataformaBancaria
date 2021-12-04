import React from 'react';
import {
	Outlet
  } from 'react-router-dom';

import { TableSide } from './TableSide';

export function TableFull() {
	return (
		// <BrowserRouter>
		<div className="row">
			<div className="col-4">
				<TableSide />
			</div>
			<Outlet />
		</div>
	)
}
