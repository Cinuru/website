import React from 'react'
import PropTypes from 'proptypes'
import styled from 'styled-components'
import { Link } from 'phenomic'


const Grid = styled.div`
  display: flex;
  @media (max-width: 500px) {
      flex-direction: column;
  }
  @media (min-width: 501px) {
      flex-direction: row;
  }
  justify-content: space-around;
  align-items: stretch;
`

const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: center;
`

const Mascot = styled.img`
  width: 110px;
`

const Description = styled.p`
  padding: 0rem 2rem;
  text-align:left;
  color:#fbfbfb;
  font-size: 1rem;
  font-weight: 400;
  width: 350px;
  margin-top: -10px;
  text-align: center;
  letter-spacing: 2px;
  text-shadow: 1px 1px #909090;
`

const FormHeader = styled.p`
  padding: 0rem 2rem;
  text-align:left;
  color:#fbfbfb;
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  font-size: 13px,
  margin-bottom: -20px;
  margin-top: 10px;
  letter-spacing: 2px;
  text-shadow: 1px 1px #909090;
`

const FormNote = styled.div`
  width: 350px;
  margin-top: -1.4rem;
  padding: 0 2rem;
  color: #fbfbfb;
  font-size: 0.4rem;
  font-weight: 400;
`

const CinemaHeader = styled.p`
  padding: 0rem 2rem;
  text-align:left;
  color:#fbfbfb;
  font-size: 1rem;
  font-weight: 400;
  font-size: 14px;
  padding-top: 20px;
  border-top: 1px solid #f9f9f9;
`

const Feedback = styled.p`
  padding: 0rem 2rem;
  color:#fbfbfb;
  font-weight: 400;
  text-align: center;
  font-size: 13px;
  margin-top: 40px;
  letter-spacing: 2px;
  text-shadow: 0px 1px #909090;
`

const BoardingSection = ({iframeSrc, firstDescription, secondDescription, mascotImg, formHeader, formNote, cinemaHeader, cinemaImage, feedbackMail, feedback}) => (
        <Grid>
          <Column>
            <Description>
              <p>
                {firstDescription}
              </p>
              <p>
                {secondDescription}
              </p>
            </Description>
            <Mascot src={mascotImg} alt="Hi." />
          </Column>
          <Column>
            <FormHeader>
              {formHeader}
            </FormHeader>
            <iframe
              src={iframeSrc}
              width="330px"
              height="270px"
              allowTransparency="true"
            />
            <FormNote>
              {formNote}
            </FormNote>
            <CinemaHeader>
              {cinemaHeader}
            </CinemaHeader>
            <Link to="https://www.scala-kino.net">
              <img src={cinemaImage} alt="Scala Lüneburg." style={{width: "100px"}} />
            </Link>
            <Feedback>
               {feedback}
               <Link to="mailto:support@cinuru.com">
                 {feedbackMail}
               </Link>
            </Feedback>
          </Column>
        </Grid>
)

/*
  TODO See if it's possible to remove some of these
*/
BoardingSection.propTypes = {
    iframeSrc: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    firstDescription: PropTypes.string,
    secondDescription: PropTypes.string,
    mascotImg: PropTypes.string,
    formHeader: PropTypes.string,
    formNote: PropTypes.string,
    cinemaHeader: PropTypes.string,
    cinemaImage: PropTypes.string,
    feedbackMail: PropTypes.string,
    feedback: PropTypes.string,
}

export default BoardingSection
