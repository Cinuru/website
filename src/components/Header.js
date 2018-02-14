import React from 'react';
import PropTypes from 'proptypes';
import styled from 'styled-components';
import { Link } from 'phenomic';

import { darkgray, text } from './style-vars';

const Wrapper = styled.header`
	z-index: 10;
	background: ${p => (p.isHome ? (p.scrolled ? text : 'transparent') : 'white')};
	color: ${p => (p.isHome ? 'white' : darkgray)};
	padding: 1rem 2rem;
	height: 4rem;
	position: fixed;
	width: 100%;
	font-size: 0.9rem;
	line-height: 2rem;
	box-sizing: border-box;
	${p => (p.scrolled ? 'box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.3);' : '')} .container {
		max-width: 50rem;
		margin: 0 auto;
	}
	.logo {
		display: inline-block;
		transition: all 0.15s;
		&:hover,
		&:active,
		&:focus {
			transform: scale(1.05);
		}
		img {
			width: auto;
			height: 2rem;
		}
	}
	nav {
		float: right;
		ul {
			list-style-type: none;
			margin: 0;
			padding: 0;
		}
		li {
			display: inline-block;
			margin: 0 1rem;
			text-transform: uppercase;
			&.active {
				font-weight: 900;
			}
			transition: all 0.15s;
			&:hover,
			&:active,
			&:focus {
				transform: scale(1.1);
			}
		}
	}
	@media (max-width: 420px) {
		padding: 1.25rem 2rem;
	}
	@media (max-width: 350px) {
		font-size: 0.8rem;
	}
`;

class Header extends React.Component {
	constructor(props) {
		super(props);
		let scrollPostition = 0;
		if (typeof window !== 'undefined') {
			scrollPostition = window.pageYOffset | document.body.scrollTop;
		}
		this.state = { scrolled: scrollPostition !== 0 };
		this.handleScroll = this.handleScroll.bind(this);
	}
	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}
	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}
	handleScroll() {
		const scrollPostition = window.pageYOffset | document.body.scrollTop;
		this.setState({ scrolled: scrollPostition !== 0 });
	}
	render() {
		const { route, isHome } = this.props;
		const { scrolled } = this.state;
		return (
			<Wrapper scrolled={scrolled} isHome={isHome}>
				<div className="container">
					<span className="logo">
						<Link to="/">
							<img src={`/assets/logoName${isHome ? 'White' : ''}.svg`} alt="Cinuru" />
						</Link>
					</span>
					<nav>
						<ul>
							<li className={route === '/cinema/' ? 'active' : ''}>
								<Link to="cinema">Für Kinos</Link>
							</li>
							<li className={route === '/about/' ? 'active' : ''}>
								<Link to="about">Über Uns</Link>
							</li>
						</ul>
					</nav>
				</div>
			</Wrapper>
		);
	}
}

Header.propTypes = {
	route: PropTypes.string,
	isHome: PropTypes.string,
};

export default Header;
