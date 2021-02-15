import { CardGrid } from '@vkontakte/vkui'
import React, { useState, useEffect } from 'react'
import DeskItem from './DeskItem'
import db from '../firebase'

function DeskList() {
	const [desks, setDesks] = useState([])

	useEffect(() => {
		db.collection('desks')
			.get()
			.then((querySnapshot) => {
				const desks = []
				querySnapshot.forEach((doc) => {
					desks.push({
						id: doc.id,
						name: doc.data().name
					})
				})
				setDesks(desks)
			})
	}, [])

	if (!desks.length) {
		return null
	}
	return (
		<CardGrid size="l">
			{desks.map((desk) => (
				<DeskItem key={desk.id}> {desk.name}</DeskItem>
			))}
		</CardGrid>
	)
}

export default DeskList
