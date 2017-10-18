import React from 'react';
import styled from 'styled-components';
import { Link } from 'phenomic';

import { silver, black, darkgray } from './style-vars';

const Wrapper = styled.footer`
	background: ${black};
	color: ${silver};
	padding: 2rem 0 0 0;
	text-align: center;
	color: ${darkgray};
	letter-spacing: 0.025em;
	.pages {
		margin-bottom: 2rem;
		font-weight: 300;
		ul {
			list-style-type: none;
			padding: 0;
			li {
				display: inline-block;
				margin: 0.5rem 1rem;
				transition: all 0.15s;
				&:hover,
				&:active,
				&:focus {
					transform: scale(1.1);
				}
			}
		}
	}
	.address {
		* {
			font-weight: 300;
			font-size: 0.75rem;
		}
	}
	.supporters {
		margin-top: 2rem;
		h2 {
			font-weight: 300;
			font-size: 0.75rem;
			text-transform: uppercase;
			margin-bottom: 0.5rem;
		}
		img {
			max-width: 50rem;
		}
	}
	.small {
		font-size: 0.6em;
	}
`;

const Footer = () => (
	<Wrapper id="nav">
		<div className="container">
			<div className="pages">
				<ul>
					<li>
						<Link to="/cinema">Für Kinos</Link>
					</li>

					<li>
						<Link to="/about">Über Uns</Link>
					</li>
					<li>
						<Link to="/contact">Kontakt</Link>
					</li>
					<li>
						<Link to="/jobs">Jobs</Link>
					</li>
					<li>
						<Link to="/impressum">Impressum</Link>
					</li>
				</ul>
			</div>
			<div className="address">
				<p>Cinuru Research</p>
				<p>contact@cinuru.com</p>
				<p>
					℅ Startbüro Filmuniversität<br />
					August-Bebel-Str. 26<br />
					14482 Potsdam
				</p>
			</div>
			<div className="supporters">
				<h2>Gefördert Durch:</h2>
				<img src="/assets/supporters.png" alt="supported by" />
			</div>
		</div>
	</Wrapper>
);

export default Footer;
