import { CardGrid } from '@vkontakte/vkui'
import React from 'react'
import DeskItem from './DeskItem'

const desks = [{ name: 'Desk 1' }, { name: 'Desk 2' }]

function DeskList() {
	if (!desks.length) {
		return null
	}
	return (
		<CardGrid size="l">
			{desks.map((desk, index) => (
				<DeskItem key={index}> {desk.name}</DeskItem>
			))}
		</CardGrid>
	)
}

export default DeskList
