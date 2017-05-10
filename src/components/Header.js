import React from 'react'
import PropTypes from 'proptypes'
import styled from 'styled-components'
import { Link } from "phenomic"

import { darkgray, gold } from './styles'

const Wrapper = styled.header`
    z-index: 10;
    background: white;
    color: ${darkgray};
    padding: 1rem 2rem;
    position: fixed;
    width: 100%;
    font-size: 0.9rem;
    ${props => props.scrolled ? 'box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.3);' : ''}
    .container {
        max-width: 50rem;
        margin: 0 auto;
    }
    .logo {
        display: inline-block;
        color: ${gold};
        font-weight: 900;
        font-size: 1.5em;
        line-height: 1.1rem;
        letter-spacing: 0.025em;
        transition: all 0.15s;
        &:hover, &:active, &:focus {
            transform: scale(1.05);
        }
    }
    nav {
        float: right;
        ul {
            list-style-type: none;
            margin: 0;
            padding: 0
        }
        li {
            display: inline-block;
            margin: 0 1rem;
            text-transform: uppercase;
            &.active {
                font-weight: 900;
            }
            transition: all 0.15s;
            &:hover, &:active, &:focus {
                transform: scale(1.1);
            }
        }
    }
    @media(max-width: 420px) {
        padding: 1.25rem 2rem;
    }
    @media(max-width: 350px) {
        font-size: 0.8rem;
    }
`

class Header extends React.Component {
    constructor(props) {
        super(props)
        const scrollPostition = window.pageYOffset | document.body.scrollTop
        this.state = {scrolled: scrollPostition !== 0}
        this.handleScroll = this.handleScroll.bind(this)
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }
    handleScroll() {
        const scrollPostition = window.pageYOffset | document.body.scrollTop
        this.setState({scrolled: scrollPostition !== 0})
    }
    render() {
        const { route } = this.props
        const { scrolled } = this.state
        return (
            <Wrapper scrolled={scrolled}>
                <div className="container">
                    <span className="logo">
                        <Link to="/">Cinuru Research</Link>
                    </span>
                    <nav>
                        <ul>
                            <li className={route === '/about/' ? 'active' : ''}>
                                <Link to="about">Über Uns</Link>
                            </li>
                            <li>
                                <a href="mailto:contact@cinuru.com">Kontakt</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </Wrapper>
        )
    }
}

Header.propTypes = {
    route: PropTypes.string
}

export default Header
