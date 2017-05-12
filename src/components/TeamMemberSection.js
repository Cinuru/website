import React from 'react'
import PropTypes from 'proptypes'
import styled from 'styled-components'
import { clearfix, gold } from '../components/style-vars'

const Styles = styled.section`
    ${clearfix}
    margin-bottom: 3rem;
    position: relative;
    min-height: 18rem;
    img {
        position: absolute;
        right: 0;
        top: 1rem;
        width: 14rem;
    }
    div {
        width: 33rem;
    }
    h2 {
        margin: 0;
    }
    h3 {
        font-weight: 900;
        color: ${gold};
    }
    @media(max-width: 850px) {
        img {
            width: 30%;
        }
        div {
            width: 65%;
        }
    }
    @media(max-width: 600px) {
        min-height: 0;
        margin-top: 8.5rem;
        &.first {
            margin-top: 4rem !important;
        }
        div {
            width: 100%;
        }
        img {
            top: -8rem;
            right: 3rem;
            max-width: 9.5rem;
            width: 100%;
        }
    }
    @media(max-width: 350px) {
        img {
            right: 2rem;
        }
    }
`

const getId = (filename) => filename.split('/')[1].split('.md')[0]

const TeamMemberSection = ({img, name, position, description, __filename, className}) => (
    <Styles id={getId(__filename)} className={className}>
        <img src={img} alt={name}/>
        <div>
            <h2>{name}</h2>
            <h3>{position}</h3>
            {description.map((p, i) => <p key={i}>{p}</p>)}
        </div>
    </Styles>
)

TeamMemberSection.propTypes = {
    className: PropTypes.string,
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    description: PropTypes.arrayOf(PropTypes.string).isRequired,
    __filename: PropTypes.string.isRequired,
}

export default TeamMemberSection
