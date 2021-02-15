import React, { useState } from 'react'
import { View, Panel, Button } from '@vkontakte/vkui'
import '@vkontakte/vkui/dist/vkui.css'
import Desks from './components/Desks'

const panel = {
	desks: 'desks',
	columns: 'columns'
}

function App() {
	const [activePanel, setActivePanel] = useState(panel.desks)
	return (
		<View activePanel={activePanel}>
			<Panel id={panel.desks}>
				<Desks onChangePanel={() => setActivePanel(panel.columns)} />
			</Panel>

			<Panel id={panel.columns}>
				<div>Column Panel</div>
				<Button onClick={() => setActivePanel(panel.desks)}>Go to desks</Button>
			</Panel>
		</View>
	)
}

export default App
