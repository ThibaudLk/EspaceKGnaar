import React, { Component } from 'react'

import '../style/style.scss'
import Navbar from './navbar'
import Footer from './footer'

class Layout extends Component {
	constructor(props) {
		super(props)
		this.state = { isActive: false }
		this.toggleNavbar = this.toggleNavbar.bind(this)
	}

	toggleNavbar() {
		this.setState({ isActive: !this.state.isActive })
	}
	render() {
		return (
			<div>
				<Navbar isActive={this.state.isActive} toggleNavbar={() => this.toggleNavbar()} />
					{this.props.children}
				<Footer />
			</div>
		)
	}
}

export default Layout
