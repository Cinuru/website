import React from 'react';
import PropTypes from 'proptypes';
import { BodyContainer } from 'phenomic';
import styled from 'styled-components';
import FileIcon from 'react-icons/lib/fa/file-pdf-o';

import { brand } from '../components/style-vars';
import Container from './Container';

const Wrapper = styled.div`
	article {
		max-width: 35rem;
		margin: 0 auto;
		text-align: center;
		margin-bottom: 4rem;
		font-size: 1.2rem;
		line-height: 1.5rem;
		p {
			padding: 0 1rem;
		}
		@media (max-width: 350px) {
			font-size: 1.1rem;
		}
	}
	h1 {
		font-size: 2.4rem;
		line-height: 3rem;
		font-weight: 900;
		margin-top: 1rem;
		margin-bottom: 0.5rem;
	}
	h2 {
		font-size: 1.9rem;
		font-weight: 900;
		color: ${brand};
		margin-bottom: 4rem;
	}
	.summary {
		line-height: 2rem;
		text-align: left;
		width: 32rem;
		margin: 3rem auto;
		h3 {
			font-style: normal;
			font-weight: 900;
			text-align: center;
			text-transform: uppercase;
			margin-bottom: 1rem;
		}
		.label {
			display: inline-block;
			color: ${brand};
			width: 5rem;
			font-weight: 900;
			text-transform: uppercase;
			text-align: right;
			margin-right: 1rem;
		}
		.description {
			display: inline-block;
			text-align: left;
			width: 26rem;
		}
	}
	.file {
		display: block;
		width: 16rem;
		margin: 0 auto;
		padding: 0.25rem 1rem 1rem 1rem;
		border-radius: 1rem;
		color: ${brand};
		font-size: 1.3rem;
		font-weight: 900;
		text-align: center;
		text-transform: uppercase;
		&:hover {
			background: #f5f5f5;
		}
		.icon {
			width: 4rem;
			height: 4rem;
			margin: 1rem auto;
		}
	}
	iframe {
		width: 100%;
		height: 30rem;
		border: none;
		margin-top: -2rem;
		margin-bottom: -6rem;
		@media (max-width: 600px) {
			height: 35rem;
		}
	}
`;

const JobPage = ({
	head: { title, subtitle, summary, typeform, jobDescription, ...head },
	body,
	...props
}) => (
	<Container {...{ head, ...props }}>
		<Wrapper>
			<article>
				<h1>{title}</h1>
				<h2>{subtitle}</h2>
				<BodyContainer>{props.isLoading ? '' : body}</BodyContainer>
				<div className="summary">
					<h3>Job Summary</h3>
					{Object.keys(summary).map(label => (
						<div>
							<span className="label">{label}</span>
							<span className="description">{summary[label]}</span>
						</div>
					))}
				</div>
				<div className="job-description">
					<p>Download the full job description to learn more:</p>
					<a className="file" href={jobDescription} target="_blank">
						<div className="icon">
							<FileIcon color={brand} width="100%" height="100%" />
						</div>
						<div className="text">Job Description</div>
					</a>
				</div>
			</article>
			{typeform && <iframe src={typeform} />}
		</Wrapper>
	</Container>
);

JobPage.propTypes = {
	head: PropTypes.object,
	body: PropTypes.string,
	isLoading: PropTypes.bool
};

export default JobPage;
