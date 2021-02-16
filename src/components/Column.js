import React from 'react'
import { Div, Card, CardGrid } from '@vkontakte/vkui'
import './Column.css'
import ColumnCard from './ColumnCard'

function Column({ children }) {
	return (
		<Div className="Column">
			<Card className="Column__wrapper">
				<CardGrid>
					<ColumnCard>{children}</ColumnCard>
				</CardGrid>
			</Card>
		</Div>
	)
}

export default Column
