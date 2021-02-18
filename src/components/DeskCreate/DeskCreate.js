import React from 'react'
import PropTypes from 'prop-types'
import db from '../../firebase'
import CreateForm from '../CreateForm/CreateForm'

function DeskCreate({ onCreate }) {
	const createDesk = (name) => {
		return db
			.collection('desks')
			.add({ name })
			.then((docRef) => docRef.get())
			.then((doc) => onCreate({ id: doc.id, ...doc.data() }))
			.catch(console.error)
	}

	return <CreateForm onSubmit={createDesk} placeholder="Enter desk name" actionTitle="Create desk" />
}

DeskCreate.propTypes = {
	onCreate: PropTypes.func.isRequired
}

export default DeskCreate
