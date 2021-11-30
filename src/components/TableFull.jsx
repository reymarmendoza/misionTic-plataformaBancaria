import React from 'react'

import { TableSide } from './TableSide'
import { TableSheet } from './TableSheet'

import tabSheStyles from '../Styles/tableSheet.module.css'
import tabSidStyles from '../Styles/tableSide.module.css'

export function TableFull() {
	return (
		<div className="row">
			<div className="col-4">
				<TableSide />
			</div>
			<div className="col-8">
				<TableSheet />
			</div>
		</div>
	)
}