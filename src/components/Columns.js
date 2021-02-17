import React, { Fragment, useState, useEffect } from 'react'
import { Div, Gallery, PanelHeaderSimple } from '@vkontakte/vkui'
import './Columns.css'
import Column from './Column'
import db from '../firebase'
import ColumnCreate from './ColumnCreate'

function Columns() {
	const [columns, setColumns] = useState([])
	const addColumn = (column) => setColumns([...columns, column])

	const removeColumn = (id) => {
		const result = columns.filter((item) => item.id !== id)
		setColumns(result)
	}

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
	return (
		<Fragment>
			<PanelHeaderSimple>Desk</PanelHeaderSimple>

			{columns.length ? (
				<Gallery className="Columns__list" slideWidth="90%" align="center">
					{columns.map(({ id, name }) => (
						<Column key={id} id={id} onDelete={removeColumn}>
							{name}
						</Column>
					))}
					<ColumnCreate onCreate={addColumn} />
				</Gallery>
			) : (
				<ColumnCreate onCreate={addColumn} />
			)}

			<Div></Div>
		</Fragment>
	)
}

export default Columns
