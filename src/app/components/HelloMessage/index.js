import React from 'react'
import {render} from 'react-dom'
import styles from './styles.css'

export class HelloMessage extends React.Component {

	constructor (props) {
		super(props);
	}

    render () {
        return <h1 className={styles.container}>Hello! {this.props.msg}</h1>
    }

}