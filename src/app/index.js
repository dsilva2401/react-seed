import React from 'react'
import {render} from 'react-dom'
import {HelloMessage} from './components'

class App extends React.Component {

	render () {
		return (
			<div>
				<HelloMessage msg="Welcome!"/>
			</div>
		)
	}

}

render(<App />, document.getElementById('content'))
