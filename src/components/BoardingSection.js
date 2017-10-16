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
  padding-bottom: 2rem;
`

const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Mascot = styled.img`
  width: 150px;
  margin-top: 1rem;
`

const Description = styled.div`
  @media (min-width: 501px) {
    padding: 0rem 1rem;
  }
  @media (max-width: 501px) {
    padding: 0rem 4rem;
  }
  padding: 0rem 2rem;
  text-align:center;
  color:#fbfbfb;
  font-size: 1rem;
  font-weight: 400;
  width: 350px;
  margin-top: -10px;
  letter-spacing: 2px;
  text-shadow: 1px 1px #909090;
`

const FormHeader = styled.p`
  @media (min-width: 501px) {
    padding: 0rem 2rem;
    margin-top: 0;
  }
  @media (max-width: 501px) {
    padding: 0;
    margin-top: 20px;
  }
  color:#fbfbfb;
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  font-size: 13px,
  margin-bottom: -20px;
  letter-spacing: 2px;
  text-shadow: 1px 1px #909090;
`

const FormNote = styled.div`
  width: 320px;
  text-align: center;
  margin-top: -1.4rem;
  padding: 0 1rem;
  color: #fbfbfb;
  font-size: 7px;
`

const CinemaHeader = styled.p`
  padding: 0rem 2rem;
  text-align:left;
  color:#fbfbfb;
  font-size: 1rem;
  font-weight: 400;
  font-size: 1rem;
  padding-top: 20px;
  border-top: 1px solid #f9f9f9;
`

const Feedback = styled.div`
  padding: 0rem 5rem;
  color:#fbfbfb;
  text-align: center;
  margin-top: 30px;
  font-size: 15px;
  letter-spacing: 1px;
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
              <img src={cinemaImage} alt="Scala Lüneburg." style={{width: "110px"}} />
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
