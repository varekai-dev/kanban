import { Icon24Add } from '@vkontakte/icons'
import { Button, Card, Input, FormLayout, Div } from '@vkontakte/vkui'
import React, { useState } from 'react'
import db from '../firebase'
const modes = {
	button: 'button',
	form: 'form'
}

const statuses = {
	default: 'default',
	error: 'error'
}

function DeskCreate() {
	const [mode, setMode] = useState(modes.button)
	const [name, setName] = useState('')
	const [status, setStatus] = useState(statuses.default)

	const reset = () => {
		setStatus(statuses.default)
		setMode(modes.button)
		setName('')
	}
	const createDesk = (e) => {
		if (e) {
			e.preventDefault()
		}
		if (!name.trim().length) {
			setStatus(statuses.error)
			return
		}
		db.collection('desks')
			.doc()
			.set({
				name
			})
			.then(reset)
			.catch(console.error)
		reset()
	}

	if (mode === modes.button) {
		return (
			<Div>
				<Button onClick={() => setMode(modes.form)} before={<Icon24Add />} size="xl">
					Create
				</Button>
			</Div>
		)
	}
	return (
		<Card mode="shadow">
			<FormLayout onSubmit={createDesk}>
				<Input placeholder="Enter desk name" autoFocus value={name} onChange={(e) => setName(e.target.value)} status={status} />

				<div>
					<Button size="l" onClick={createDesk}>
						Create desk
					</Button>
					<Button onClick={() => setMode(modes.button)} size="l" mode="tertiary">
						Cancel
					</Button>
				</div>
			</FormLayout>
		</Card>
	)
}

export default DeskCreate
