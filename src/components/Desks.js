import { PanelHeaderSimple } from '@vkontakte/vkui'
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import DeskList from './DeskList'

function Desks({ onChangePanel }) {
	return (
		<Fragment>
			<PanelHeaderSimple>My desks</PanelHeaderSimple>
			<DeskList />
			{/* <div>Desk Panel</div>
			<Button size="l" onClick={onChangePanel}>
				Go to columns
			</Button> */}
		</Fragment>
	)
}

Desks.propTypes = {
	onChangePanel: PropTypes.func.isRequired
}

export default Desks
