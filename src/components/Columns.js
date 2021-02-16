import React, { Fragment, useState, useEffect } from 'react'
import { Div, Gallery, PanelHeaderSimple } from '@vkontakte/vkui'
import './Columns.css'
import Column from './Column'
import db from '../firebase'
import ColumnCreate from './ColumnCreate'

function Columns() {
	const [columns, setColumns] = useState([])
	const addColumn = (column) => setColumns([...columns, column])

	useEffect(() => {
		db.collection('columns')
			.get()
			.then((querySnapshot) => {
				const columns = []
				querySnapshot.forEach((doc) => {
					const { deskId, name } = doc.data()

					columns.push({
						id: doc.id,
						deskId,
						name
					})
				})
				setColumns(columns)
			})
	}, [])
	console.log(columns)
	return (
		<Fragment>
			<PanelHeaderSimple>Desk</PanelHeaderSimple>

			{columns.length ? (
				<Gallery className="Columns__list" slideWidth="90%" align="center">
					{columns.map(({ id, name }) => (
						<Column key={id}>{name}</Column>
					))}
					<ColumnCreate onCreate={addColumn} />
				</Gallery>
			) : null}

			<Div></Div>
		</Fragment>
	)
}

export default Columns
