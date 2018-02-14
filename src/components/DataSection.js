import React from 'react';
import PropTypes from 'proptypes';
import styled from 'styled-components';

import { container, clearfix } from './style-vars';

const Styles = styled.section`
	${container} max-width: 40rem;
	margin-top: 7rem;
	position: relative;
	${clearfix} .image {
		width: 27rem;
		position: absolute;
		right: -8rem;
		top: 0;
	}
	h1,
	.p1,
	.p2,
	h3 {
		margin-left: -7rem;
	}
	h1 {
		padding-right: 10rem;
	}
	.p1 {
		margin-top: 2rem;
		padding-right: 15rem;
	}
	.p2 {
		padding-right: 18rem;
	}
	h3 {
		padding-right: 22rem;
		margin-top: 2rem;
	}
	@media (max-width: 950px) {
		.image {
			right: -4rem;
			top: 2rem;
		}
		h1,
		.p1,
		.p2,
		h3 {
			margin-left: -4rem;
			padding-right: 20rem;
		}
		.p2 {
			padding-right: 24rem;
		}
		h3 {
			padding-right: 28rem;
		}
	}
	@media (max-width: 800px) {
		.image {
			right: -1.5rem;
			top: 1.5rem;
		}
		h1,
		.p1,
		.p2,
		h3 {
			margin-left: 0;
			padding-right: 18rem;
		}
		.p1 {
			padding-right: 20rem;
		}
		.p2 {
			padding-right: 27rem;
		}
		h3 {
			padding-right: 17rem;
		}
	}
	@media (max-width: 600px) {
		margin-top: 0;
		padding: 0 2rem;
		text-align: center;
		.image {
			position: relative;
			width: 100%;
			max-width: 25rem;
			margin: 1rem auto -1rem auto;
			top: auto;
			right: auto;
		}
		h1,
		.p1,
		.p2,
		h3 {
			margin-left: 0;
			padding-right: 0;
		}
		h3 {
			font-size: 1.3rem;
		}
	}
`;

const DataSection = ({ title, img, text, highlight }) => (
	<Styles id="data">
		<h1>{title}</h1>
		<div className="image">
			<img src={img} alt="data-cycle" />
		</div>
		{text.map((p, i) => (
			<p key={i} className={`p${i + 1}`}>
				{p}
			</p>
		))}
		<h3>{highlight}</h3>
	</Styles>
);

DataSection.propTypes = {
	title: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired,
	text: PropTypes.arrayOf(PropTypes.tring).isRequired,
	highlight: PropTypes.string.isRequired,
};

export default DataSection;
