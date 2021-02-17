import React from 'react'
import { Div, Card, CardGrid, Header, Button } from '@vkontakte/vkui'
import './Column.css'
import ColumnCard from './ColumnCard'
import PropTypes from 'prop-types'
import db from '../firebase'

function Column({ children, onDelete, id }) {
	const deleteColumn = () => {
		db.collection('columns').doc(id).delete().then(onDelete(id))
	}
	return (
		<Div className="Column">
			<div className="Column__header">
				<Header>{children}</Header>
				<Button mode="destructive" onClick={deleteColumn}>
					Delete
				</Button>
			</div>
			<Card className="Column__wrapper">
				<CardGrid>
					<ColumnCard>sdasdasd</ColumnCard>
				</CardGrid>
			</Card>
		</Div>
	)
}

Column.propTypes = {
	onDelete: PropTypes.func.isRequired,
	children: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired
}

export default Column
