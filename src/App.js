import React, { useState } from 'react'
import { View, Panel } from '@vkontakte/vkui'
import '@vkontakte/vkui/dist/vkui.css'
import Desks from './components/Desks'
import Columns from './components/Columns'

const panel = {
	desks: 'desks',
	columns: 'columns'
}

function App() {
	const [activePanel, setActivePanel] = useState(panel.columns)
	return (
		<View activePanel={activePanel}>
			<Panel id={panel.desks}>
				<Desks onChangePanel={() => setActivePanel(panel.columns)} />
			</Panel>

			<Panel id={panel.columns}>
				<Columns />
			</Panel>
		</View>
	)
}

export default App
