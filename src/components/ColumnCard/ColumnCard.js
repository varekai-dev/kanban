import { Button, Card, Div } from '@vkontakte/vkui'
import React from 'react'
import PropTypes from 'prop-types'
import './ColumnCard.css'
import db from '../../firebase'

function ColumnCard({ children, id, onDelete }) {
	const deleteCard = () => {
		db.collection('cards').doc(id).delete().then(onDelete(id))
	}
	return (
		<Card size="l">
			<Div className="ColumnCard__wrapper">
				{children}
				<Button mode="destructive" onClick={deleteCard}>
					Delete
				</Button>
			</Div>
		</Card>
	)
}

ColumnCard.propTypes = {
	children: PropTypes.node.isRequired,
	id: PropTypes.string.isRequired,
	onDelete: PropTypes.func.isRequired
}

export default ColumnCard
