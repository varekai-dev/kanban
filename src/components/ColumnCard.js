import { Card, Div } from '@vkontakte/vkui'
import React from 'react'
import PropTypes from 'prop-types'

function ColumnCard({ children }) {
	return (
		<Card size="l">
			<Div>{children}</Div>
		</Card>
	)
}

ColumnCard.propTypes = {
	children: PropTypes.node.isRequired
}

export default ColumnCard
