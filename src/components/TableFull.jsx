import React from 'react';
import {
	Outlet
  } from 'react-router-dom';

import { TableSide } from './TableSide';

import tabSheStyles from '../Styles/tableSheet.module.css'
import tabSidStyles from '../Styles/tableSide.module.css'

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
