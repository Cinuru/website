import React from 'react'
import PropTypes from 'proptypes'
import enhanceCollection from "phenomic/lib/enhance-collection"
import { BodyContainer } from 'phenomic'

import Container from './Container'

import Article from '../components/Article'
import TeamMemberSection from '../components/TeamMemberSection'

const getTeamMembers = (collection) => {
    return enhanceCollection(collection, {
        filter: ({__filename}) => __filename.split('/')[0] === 'team',
        sort: 'order'
    })
}

const AboutPage = (props, {collection}) => (
    <Container { ...props }>
        <Article title={props.head.title} heroImg={props.head.heroImg}>
            <div>
                <BodyContainer>
                    {props.isLoading ? '' : props.body}
                </BodyContainer>
                {getTeamMembers(collection).map((props, i) =>
                    <TeamMemberSection { ...props } key={i} className={i===0 ? 'first' : undefined}/>
                )}
            </div>
        </Article>
    </Container>
)

AboutPage.propTypes = {
    head: PropTypes.object,
    body: PropTypes.string,
    isLoading: PropTypes.bool
}

AboutPage.contextTypes = {
    collection: PropTypes.array.isRequired
}

export default AboutPage
