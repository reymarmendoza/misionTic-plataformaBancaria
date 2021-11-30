import React from 'react'

import { TableSide } from './TableSide'
import { TableSheet } from './TableSheet'

import tabSheStyles from '../Styles/tableSheet.module.css'
import tabSidStyles from '../Styles/tableSide.module.css'

export function TableFull() {
	console.log('FIRST: ' + { tabSheStyles })
	console.log('HELLO: ' + tabSheStyles.side)
	return (
		<div>
			<TableSide className={tabSidStyles.side} />
			<TableSheet className={tabSheStyles.side} />
		</div>
	)
}